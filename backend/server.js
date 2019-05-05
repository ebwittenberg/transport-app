const express = require('express');
const app = express();
const port = 5000;

const cors = require('cors');
const path = require("path");
app.use(express.static(path.join(__dirname, "client/build")))

const driverRouter = require('./routes/driver');
const jobsRouter = require('./routes/jobs');

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // baked into express already, can decode form data and put in req.body
app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Home page')
// })

app.use('/drivers', driverRouter);
app.use('/jobs', jobsRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));