const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => res.render("index"));
router.use("/user", require("./user"));
router.use("/tickets", require("./tickets"));
router.use("*", (req, res) => res.render("404"));

module.exports = router;
