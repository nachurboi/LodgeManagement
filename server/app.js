const express = require('express');
const app = express();

const cors = require('cors')

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const router = require('./Routes/routes')

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', router);

const port = 1000;

app.listen(port, ( req, res ) => {
    console.log(`App is listening on port: ${port}`)
    
})

const db=mongoose.connect('mongodb://localhost:27017/lodgemanagement', { useUnifiedTopology: true, useNewUrlParser: true });




if(db){
    console.log('database conect')
}else{
    console.log('database no gree connect')
}