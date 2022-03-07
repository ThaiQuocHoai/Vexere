const express = require("express");
const {
  createStation,
  getAllStations,
  getStationDetail,
  uppdateStation,
  deleteStation,
} = require("../controllers/stations.controller");
const authenticate = require("../middlewares/auth/authenticate");
const autho = require("../middlewares/auth/authorize");
const { checkExist } = require("../middlewares/validations/checkExist");
const { Station } = require("../models");


const stationRouter = express.Router();

stationRouter.post(
  "/",
  authenticate,
  autho(["ADMIN", "SUPER_ADMIN"]),
  createStation
);

stationRouter.get("/", getAllStations);
stationRouter.get("/:id", checkExist(Station), getStationDetail);
stationRouter.put("/:id", uppdateStation);
stationRouter.delete("/:id", checkExist(Station), authenticate, deleteStation);

module.exports = {
  stationRouter,
};
