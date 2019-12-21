const mongoose = require('mongoose');

const user_complaints =  new mongoose.Schema({

  complain:String

});

module.exports = mongoose.model('complaints',user_complaints);