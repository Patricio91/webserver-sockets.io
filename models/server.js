const express = require("express");
const cors = require("cors");
const { socketController } = require("../socketsControllers/controller");


class Server {
    constructor () {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require("http").createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths = {};

        this.middlewares();

        this.routes();

        this.eventsSockets();
    }

    middlewares () {
        this.app.use(cors());
        this.app.use(express.static("public"));
    }

    routes () {
        
    }

    eventsSockets () {
        this.io.on("connection", socketController);
    }

    listen () {
        this.server.listen(this.port, () => {
            console.log("Server listening on port", this.port);
        })
    }

}

module.exports = Server;