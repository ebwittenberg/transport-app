const express = require('express');
const getAllDrivers = require('../controllers/driver');

const driverRouter =  express.Router();

driverRouter.get('/', getAllDrivers)



module.exports = driverRouter;

