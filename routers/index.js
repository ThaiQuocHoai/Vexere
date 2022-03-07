const express = require('express');
const { stationRouter } = require('./station.router');
const fingerPrintRouter = require('./test-finger-print');
const { tripRouter } = require('./trip.router');
const userRoot = require('./user.router');

const root = express.Router();

root.use('/stations', stationRouter);
root.use('/user', userRoot);
root.use('/trips', tripRouter);
root.use('/test-finger-print', fingerPrintRouter);


module.exports= {
    root
}