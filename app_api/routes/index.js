const express = require("express");
const router = express.Router();

// This is where we import the controllers we will route
const TripsController = require("../controllers/trips");

// define route for our trips endpoint
router
    .route('/trips')
    .get(TripsController.tripsList) // GET Method routes tripList
    .post(TripsController.tripsAddTrip); // POST Method Adds a trips

// GET Method routes tripFindByCode - requires parameter
// PUT Method routes tripsUpdateTrip - requires parameter
router
    .route('/trips/:tripCode')
    .get(TripsController.tripsFindByCode)
    .put(TripsController.tripsUpdateTrip);

module.exports = router;

