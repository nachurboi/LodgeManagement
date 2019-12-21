const express = require('express');
const app = express();


const cors = require('cors')

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

// mongoose.set({useFindAndModify:false})

const router = require('./Routes/routes')

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', router);

const port = 1000;

app.listen(port, ( req, res ) => {
    console.log(`App is listening on port: ${port}`)
    
})

const db=mongoose.connect('mongodb://localhost:27017/lodgemanagement',{ useFindAndModify:false, useUnifiedTopology: true, useNewUrlParser: true });




if(db){
    console.log('Database is connected')
}else{
    console.log('Database is not connected')
}