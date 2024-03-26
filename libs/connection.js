const mysql = require("mysql2");
const db = mysql
	.createPool({
		host: "localhost",
		database: "tickets_list",
		user: "root",
		password: "",
		namedPlaceholders: true,
		multipleStatements: true,
	})
	.promise();

module.exports = db;
