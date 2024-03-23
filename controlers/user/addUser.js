const db = require("../../libs/connection");

const addUser = async (req, res, next) => {
	let values = req.body;

	let sql = `INSERT INTO users (firstName, lastName, age, email)
                    VALUES (:firstName, :lastName, :age, :email)`;

	try {
		let [result] = await db.execute({ sql, values });

		res.redirect("/user");
	} catch (error) {
		res.status(404).send(error);
	}
};
module.exports = addUser;
