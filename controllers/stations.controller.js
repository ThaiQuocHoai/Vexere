const { Op } = require("sequelize");
const { Station } = require("../models");

const createStation = async (req, res) => {
  const data = req.body;
  try {
    const newStation = await Station.create(data);
    res.status(201).send(newStation);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllStations = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const stations = await Station.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });
      res.status(200).send(stations);
    } else {
      const stations = await Station.findAll();
      res.status(200).send(stations);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getStationDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const station = await Station.findOne({
      where: {
        id,
      },
    });
    res.status(200).send(station);
  } catch (error) {
    res.status(500).send(error);
  }
};

const uppdateStation = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const station = await Station.update(data, {
      where: {
        id,
      },
    });

    res.status(200).send(station);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteStation = async (req, res) => {
  const { id } = req.params;
  try {
    await Station.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("Xoa thanh cong!");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createStation,
  getAllStations,
  getStationDetail,
  uppdateStation,
  deleteStation,
};
