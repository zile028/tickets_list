const { Router } = require("express");
const router = Router();

// GET
router.get("/", require("../controlers/user/getAllUsers"));
router.get("/delete/:id", require("../controlers/user/deleteUser.js"));
// POST
router.post("/update/:id", require("../controlers/user/updateUser.js"));
router.post("/add", require("../controlers/user/addUser.js"));

module.exports = router;
