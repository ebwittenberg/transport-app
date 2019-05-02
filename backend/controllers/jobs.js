const Job = require('../models/jobs');
const Driver = require('../models/drivers');

async function getAllJobs(req, res) {

    const arrayOfJobs = await Job.getAllJobs();

    res.send(arrayOfJobs);

}

async function assignJob(req, res) {
    console.log('I am running');
    console.log(req.params);

    await Driver.assignJobToDriver(req.params.driverID, req.params.jobID);

    res.send(`Job #${req.params.jobID} has been assigned to driver ${req.params.driverID}`);

}

module.exports = {getAllJobs, assignJob};