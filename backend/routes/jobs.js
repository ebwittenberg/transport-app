const express = require('express');
const {
    getUnassignedJobs,
    getJobById,
    assignJob,
    markComplete,
    getCompleted
} = require('../controllers/jobs');

const jobsRouter = express.Router();

jobsRouter.get('/unassigned', getUnassignedJobs);
jobsRouter.get('/assigned/:id', getJobById);
jobsRouter.post('/assign/:driverID/:jobID', assignJob);
jobsRouter.post('/complete', markComplete);

jobsRouter.get('/completed', getCompleted)

module.exports = jobsRouter;