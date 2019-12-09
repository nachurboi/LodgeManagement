const bodyparser = require('body-parser')
const Apartment = require('../Models/apartment')


exports.getAllApartment = async (req,res)=>{
 const allapartment = await Apartment.find().sort({date:-1})
 if(!allapartment) return res.json({message:`error users not found`})

 res.send({allapartment:allapartment})
}