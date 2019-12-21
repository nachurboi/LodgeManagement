const complaints = require('../Models/user_complains');

exports.complains_controller = async (req,res)=>{


  if(!req.body.complain){
    res.json({message:'You can not submit an empty message'})

 }else if(req.body.length > 1000){

  res.json({message:'your comment is too long'})
 
 }else{

     const info = await complaints.create({complain:req.body.complain})

     res.json({message:'message sent',
               user_complain:info.complain

    })  
 }


}
exports.getAllComplaints = async (req, res)=>{

  const info = await complaints.find().sort({"_id":-1})
  res.json({
    info:info
  })

}