const Job = require('../models/jobs');

async function getAllJobs(req, res) {

    const arrayOfJobs = await Job.getAllJobs();

    res.send(arrayOfJobs);

}

module.exports = getAllJobs;