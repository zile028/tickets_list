const db = require("../../libs/connection");

const changeTicketState = async (req, res, next) => {
	let values = req.query;
	let sql = `UPDATE tickets SET
                done = :state
                WHERE id = :id
    `;
	try {
		let [result] = await db.execute({ sql, values });
		res.redirect("/tickets#" + values.id);
	} catch (error) {
		res.status(404).send(error);
	}
};
module.exports = changeTicketState;
