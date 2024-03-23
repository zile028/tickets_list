const express = require("express");

const server = express();
const dayjs = require("dayjs");
const PORT = 3000;

server.set("view engine", "ejs");
server.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static(__dirname + "/public"));

server.use("/", require("./routes"));

server.get("/vesti", (req, res) => {
	console.log(req.body);
	res.send("GET");
});

server.delete("/vesti", (req, res) => {
	console.log(req.body);
	res.send("DELETE");
});

server.post("/vesti", (req, res) => {
	console.log(req.body);
	res.send("POST");
});

server.put("/vesti", (req, res) => {
	console.log(req);
	res.send("PUT");
});

server.patch("/vesti", (req, res) => {
	console.log(req);
	res.send("PATCH");
});

server.listen(PORT, () => {
	console.log("http://localhost:" + PORT);
});
