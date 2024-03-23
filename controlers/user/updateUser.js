const dayjs = require("dayjs");
const db = require("../../libs/connection");

const updateUser = async (req, res, next) => {
	let values = { id: parseInt(req.params.id), ...req.body };
	let sql = `UPDATE users SET
            firstName = :firstName,
            lastName = :lastName,
            email = :email,
            age = :age
            WHERE id = :id
        `;
	try {
		let [result] = await db.execute({ sql, values });
		res.redirect("/user");
	} catch (error) {
		res.status(404).send(error);
	}
};
module.exports = updateUser;
