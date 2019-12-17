const mongoose = require('mongoose');

const apartmentSchema = new mongoose.Schema({
 apartment:String,
 address:String,
 city:String,
 phonenumber:Number,
 photo:String,

})
module.exports = mongoose.model('apartments',apartmentSchema );