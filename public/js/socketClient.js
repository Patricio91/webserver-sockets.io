const lbOnline = document.querySelector("#lbOnline");
const lbOffline = document.querySelector("#lbOffline");
const txtMessage = document.querySelector("#txtMessage");
const btnSend = document.querySelector("#btnSend");

const socketClient = io();

socketClient.on("connect", () => {
    lbOffline.style.display = "none";
    lbOnline.style.display = "";
});

socketClient.on("disconnect", () => {
    lbOnline.style.display = "none";
    lbOffline.style.display = "";
});

socketClient.on("send-message", (payload) => {
    console.log(payload);
})

btnSend.addEventListener("click", () => {
    const message = txtMessage.value;
    const payload = {
        message,
        id: "123ABC",
        date: new Date().getTime()
    };
    socketClient.emit("send-message", payload, (id) => {});
});