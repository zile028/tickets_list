const dayjs = require("dayjs");
const db = require("../../libs/connection");
const getAllUsers = async (req, res) => {
	let sql = "SELECT * FROM users";
	try {
		let [users] = await db.execute({ sql });
		res.render("users", { users, dayjs });
	} catch (error) {
		res.status(404).send(error);
	}
};
module.exports = getAllUsers;
