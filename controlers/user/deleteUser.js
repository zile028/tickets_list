const db = require("../../libs/connection");

const deleteUser = async (req, res) => {
	let values = { id: parseInt(req.params.id) };
	let sql = "DELETE FROM users WHERE id = :id";
	try {
		let [result] = await db.execute({ sql, values });
		res.redirect("/user");
	} catch (error) {
		res.status(404).send(error);
	}
};
module.exports = deleteUser;
