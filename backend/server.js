const express = require('express');
const app = express();
const port = 5000;

const cors = require('cors');

const driverRouter = require('./routes/driver');

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // baked into express already, can decode form data and put in req.body
app.use(cors());

app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/drivers', driverRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));