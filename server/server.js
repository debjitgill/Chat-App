import express from "express";
import { Server } from 'socket.io';
import { createServer } from 'http';

const port = 3000

const app = express()

const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        method: ["GET", "POST"],
        credentials: true,
    }
});

app.get("/", (req, res) => {
    res.send("Hello World!")
})


io.on("connection", (socket) => {
    console.log("User Connected");
    console.log("Id", socket.id);
})

server.listen(port, () => {
    console.log(`Surver is running on port ${port}`)
})
