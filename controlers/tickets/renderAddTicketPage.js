const db = require("../../libs/connection");

const renderAddTicketPage = async (req, res, next) => {
	const sqlUsers = "SELECT * FROM users;";
	const sqlPriority = "SELECT * FROM priority;";

	try {
		let [users] = await db.execute({ sql: sqlUsers });
		let [priorities] = await db.execute({ sql: sqlPriority });
		res.render("addTicketPage", { users, priorities });
	} catch (error) {
		res.status(404).send(error);
	}
};
module.exports = renderAddTicketPage;
