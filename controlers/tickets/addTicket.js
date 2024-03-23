const db = require("../../libs/connection");

const addTicket = async (req, res, next) => {
	let values = req.body;
	let sql = `INSERT INTO tickets (title, ticket, userID, priorityID)
                VALUES(:title, :ticket, :userID, :priorityID)`;
	try {
		let [result] = await db.execute({ sql, values });
		res.redirect("/tickets");
	} catch (error) {
		res.status(404).send(error);
	}
};
module.exports = addTicket;
