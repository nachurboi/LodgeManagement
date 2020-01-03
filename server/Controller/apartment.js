const bodyparser = require('body-parser')
const apartment = require('../Models/apartment')


// getting all apartment

exports.getAllApartment = async (req,res)=>{

 const info = await apartment.find().sort({date:-1})
 if(!info) return res.json({message:`error users not found`})

else{
     res.json({
         message:info

})}
}

//getting single apartment
exports.getSingleApartment = async (req,res)=>{
 const info = await apartment.findOne({_id:req.params.id})
 return(res.json({
     info:info
 }))
 
}

//delete single apartment
exports.deleteApartment = async ( req, res)=>{
 const info = await apartment.findOneAndRemove({_id:req.params.id})
 res.json({
     info:info,
     message:"apartment has been deleted"
 })
}


//update a single apartment information
exports.updateApartment = async (req,res)=>{
 const info = await apartment.find({id:req.params.id})
 if(info){ return res.json({message:'apartment does not exist'})
 
 }else{
     const body = req.body;

     info.typeofapartment = body.typeofapartment || info.typeofapartment
     info.address = body.address || info.address
     info.city = body.city || info.city
     info.number = body.number || info.number
     info.photo = body.photo || info.photo
     await info.save();

     res.json({message:'apartment updated successfully'})
 }
}

