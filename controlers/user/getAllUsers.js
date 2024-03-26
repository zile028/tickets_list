const dayjs = require("dayjs");
const db = require("../../libs/connection");
const getAllUsers = async (req, res, next) => {
	let sql = "SELECT * FROM users";
	try {
		let [users] = await db.execute({ sql });
		res.render("users", { users, dayjs });
	} catch (error) {
		next(new Error("Greska u izvrsavanju SQL-a"));
	}
};
module.exports = getAllUsers;
