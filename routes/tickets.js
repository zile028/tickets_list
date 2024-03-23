const { Router } = require("express");
const router = new Router();
// GET
router.get("/", require("../controlers/tickets/renderAllTicketsPage.js"));
router.get("/add", require("../controlers/tickets/renderAddTicketPage.js"));
router.get("/state", require("../controlers/tickets/changeTicketState.js"));

// POST
router.post("/add", require("../controlers/tickets/addTicket.js"));

module.exports = router;
