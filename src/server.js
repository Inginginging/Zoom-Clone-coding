import http from "http"; //nodeJs 에 내장돼 있음.
import { WebSocketServer } from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public")); //frontend code 보이게 하기.

app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log("Listening on http://localhost:3000");

const server = http.createServer(app); //express로 만든 server에 접근.
const wss = new WebSocketServer({ server }); //http server위에 ws server를 올림. => 같은 포트에서 두가지 프로토콜 이해 가능.

server.listen(3000, handleListen);
