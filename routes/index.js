const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => res.render("index"));
router.use("/user", require("./user"));
router.use("/tickets", require("./tickets"));

module.exports = router;
