const mongoose = require('mongoose');

const apartmentSchema = new mongoose.Schema({
 typeofapartment:String,
 address:String,
 city:String,
 phonenumber:Number,
 photo:String,

})
module.exports = mongoose.model('apartments',apartmentSchema );