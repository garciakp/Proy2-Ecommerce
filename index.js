const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true},
    () => console.log('Connected to DB')
);

app.get('/', (req, res) => {
    res.send('We are on home');
});

//Listen to server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));