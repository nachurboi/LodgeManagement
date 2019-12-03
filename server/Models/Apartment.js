const mongoose = require('mongoose');


const apartmentSchema = new mongoose.Schema({
 typeofapartment:String,
 address:String,
 city:String,
 phonenumber:Number


})
module.exports = mongoose.model('apartments',apartmentSchema )