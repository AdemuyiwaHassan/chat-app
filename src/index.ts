import express, { Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { join } from "path";

const app = express();
const server = createServer(app);
const io = new Server(server);
const PORT = 3000;
app.use(express.json());
app.use(express.static(join(__dirname, "../public")));

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!!");
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
