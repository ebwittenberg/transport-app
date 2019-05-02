const express = require('express');
const {
    getAllJobs,
    assignJob
} = require('../controllers/jobs');

const jobsRouter = express.Router();

jobsRouter.get('/unassigned', getAllJobs);
jobsRouter.post('/assign/:driverID/:jobID', assignJob)

module.exports = jobsRouter;