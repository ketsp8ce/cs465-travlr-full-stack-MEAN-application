const express = require("express");
const router = express.Router();

// This is where we import the controllers we will route
const TripsController = require("../controllers/trips");

// define route for our trips endpoint
router
    .route('/trips')
    .get(TripsController.tripslist); // GET Method routes tripList

// GET Method routes tripFindByCode
router
    .route('/trips/:tripCode')
    .get(TripsController.tripsFindByCode);

module.exports = router;

