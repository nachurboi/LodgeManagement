const bodyparser = require('body-parser')
const Apartment = require('../Models/Apartment')

exports.addApartment = async (req, res)=>{
 try {
  if(!req.body.typeofapartment ||!req.body.address ||!req.body.city || !req.body.phonenumber){
     info = res.json({Message:"Enter the correct information"})
  }
  else{
    await Apartment.create({
     typeofapartment:req.body.typeofapartment,
     address:req.body.address,
     city:req.body.city,
     phonenumber:req.body.phonenumber
    }).then(res.json({
     message:req.body
    }))
  }
  
 } catch (error) {
   console.log(req.body)
   res.json({ message:error})
 }
 
} 