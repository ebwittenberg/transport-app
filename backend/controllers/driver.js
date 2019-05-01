const Driver = require('../models/drivers');

async function getAllDrivers(req, res) {
    console.log(req);

    const driversArray = await Driver.getAllDrivers();

    res.send(driversArray);


}

module.exports = getAllDrivers;