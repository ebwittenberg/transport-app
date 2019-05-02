const express = require('express');
const {
    getUnassignedJobs,
    getJobById,
    assignJob
} = require('../controllers/jobs');

const jobsRouter = express.Router();

jobsRouter.get('/unassigned', getUnassignedJobs);
jobsRouter.get('/assigned/:id', getJobById);
jobsRouter.post('/assign/:driverID/:jobID', assignJob);

module.exports = jobsRouter;