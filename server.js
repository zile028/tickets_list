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

server.use("/", (error, req, res, next) => {
	if (error) {
		console.log(error.message);
		res.render("errorPage", { error: error.message });
	}
});

server.listen(PORT, () => {
	console.log("http://localhost:" + PORT);
});
