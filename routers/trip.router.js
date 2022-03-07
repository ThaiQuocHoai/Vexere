const express = require('express');
const { createTrip, getAllTrip, getTripDetail, deleteTrip, updateTrip } = require('../controllers/trip.controller');

const tripRouter = express.Router();

tripRouter.post("/", createTrip);
tripRouter.get("/", getAllTrip);
tripRouter.get("/:id", getTripDetail);
tripRouter.delete("/:id", deleteTrip);
tripRouter.put("/:id", updateTrip);

module.exports = {
    tripRouter,
}