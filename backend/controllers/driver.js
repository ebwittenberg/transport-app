const Driver = require('../models/drivers');

async function getAllDrivers(req, res) {
    console.log(req);

    const driversArray = await Driver.getAllDrivers();

    res.send(driversArray);


}

async function getActiveDrivers(req, res) {

    const activeDriversArray = await Driver.getActiveDrivers();

    console.log(activeDriversArray);

    res.send(activeDriversArray);


}

module.exports = {getAllDrivers, getActiveDrivers};