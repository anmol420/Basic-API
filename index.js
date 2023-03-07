const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const ApiData = require('./data.json');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/service', (req, res) => {
    res.send(ApiData);
});

app.listen(port,() => {
    console.log("I Am Live");
});