const express = require('express');
const {getAllDrivers, getActiveDrivers} = require('../controllers/driver');

const driverRouter =  express.Router();

driverRouter.get('/', getAllDrivers)
driverRouter.get('/active', getActiveDrivers);



module.exports = driverRouter;

