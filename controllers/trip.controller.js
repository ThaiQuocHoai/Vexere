const { Trip, Station } = require("../models");

const createTrip = async (req, res) => {
  const data = req.body;

  try {
    const newTrip = await Trip.create(data);
    res.status(201).send(newTrip);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllTrip = async (req, res) => {
  try {
    const trips = await Trip.findAll({
      include: [
        {
          model: Station,
          as: "from",
        },
        {
          model: Station,
          as: "to",
        },
      ],
    });
    res.status(200).send(trips);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTripDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const trip = await Trip.findOne({
      id,
      include: [
        {
          model: Station,
          as: "from",
        },
        {
          model: Station,
          as: "to",
        },
      ],
    });
    if (trip) {
      res.status(200).send(trip);
    } else {
      res.status(404).send("Not found!!!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteTrip = async (req, res) => {
  const { id } = req.params;
  try {
    const trip = await Trip.destroy({
      where: {
        id,
      },
    });
    if (trip === 0) {
      res.status(404).send({ message: "Id not found!!!" });
    } else {
      res.status(200).send({ message: "Deleted successfullly!!!" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTrip = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const update = await Trip.update(data, {
      where: {
        id,
      },
    });
    if (update === 0) {
      res.status(404).send({ message: "Id not found!!!" });
    } else {
      res.status(200).send({ message: "Updated successfullly!!!" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createTrip,
  getAllTrip,
  getTripDetail,
  deleteTrip,
  updateTrip
};
