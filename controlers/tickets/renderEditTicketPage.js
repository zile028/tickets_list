const db = require("../../libs/connection");
const renderEditTicketPage = async (req, res, next) => {
	let values = { id: req.params.id };
	let sql = `
			SELECT * FROM tickets WHERE id = :id;
			SELECT * FROM priority;
			SELECT * FROM users;`;
	try {
		let [[[ticket], priorities, users]] = await db.query({ sql, values });
		res.render("editTicketPage", { ticket, users, priorities });
	} catch (error) {
		console.log(error);
	}
};
module.exports = renderEditTicketPage;
