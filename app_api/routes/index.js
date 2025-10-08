const express = require("express");
const router = express.Router();

const TripsController = require("../controllers/trips");

router.route("/trips").get(TripsController.tripslist);

module.exports = router;