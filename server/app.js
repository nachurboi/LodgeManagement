const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./Routes/Router')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(router);

const port = 1

app.listen(port, ( req, res ) => {
    console.log(`App is listening on port: ${port}`)
    
})

mongoose.connect('mongodb://localhost:27017/LoginRegister', { useUnifiedTopology: true, useNewUrlParser: true });