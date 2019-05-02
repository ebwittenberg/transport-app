const express = require('express');
const jobsController = require('../controllers/jobs');

const jobsRouter = express.Router();

jobsRouter.get('/', jobsController);

module.exports = jobsRouter;