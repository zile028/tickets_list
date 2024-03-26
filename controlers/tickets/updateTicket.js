const db = require("../../libs/connection");

const updateTicket = async (req, res, next) => {
	let values = req.body;
	let sql = `UPDATE tickets SET
                title= :title,
                userID = :userID,
                priorityID = :priorityID
                WHERE id = :id
                `;
	try {
		let [result] = await db.execute({ sql, values });
		if (result.affectedRows > 0) {
			res.redirect("/tickets");
		} else {
			next(new Error("Neispravan id."));
		}
	} catch (error) {
		console.log(error);
	}
};
module.exports = updateTicket;
