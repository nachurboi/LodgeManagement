const mongoose = require('mongoose');

const RegSchema = new mongoose.Schema({
 firstname:String,
 lastname:String,
 email:String,
 password:String,
 number:Number
 
})

module.exports = mongoose.model('RegTable',RegSchema);

