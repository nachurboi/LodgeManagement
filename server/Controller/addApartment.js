const bodyparser = require('body-parser')
const Apartment = require('../Models/apartment')


exports.getAllApartment = async (req,res)=>{
 const allapartment = await Apartment.find()
                     .sort({date:-1})
 if(!allapartment) return res.json({message:`error users not found`})

 res.json({allapartment:allapartment ,Message:"all house show ooo"})
}