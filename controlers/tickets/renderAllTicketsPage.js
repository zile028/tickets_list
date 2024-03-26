const db = require("../../libs/connection");
const dayjs = require("dayjs");
const renderAllTicketsPage = async (req, res, next) => {
	let sql = `SELECT t.*, u.firstName, u.lastName, p.name AS priority, p.color
                FROM tickets t
                LEFT JOIN users u ON u.id = t.userID
                JOIN priority p ON p.id = t.priorityID
				ORDER BY u.firstName DESC, u.lastName DESC
                `;

	try {
		let [tickets] = await db.execute({ sql });
		res.render("allTicketsPge", { tickets, dayjs });
	} catch (error) {
		res.status(404).send(error);
	}
};
module.exports = renderAllTicketsPage;
