const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
 firstname:String,
 lastname:String,
 email:String,
 password:String,
 number:Number,
 photo:String
 
})

module.exports = mongoose.model('user',UserSchema);
