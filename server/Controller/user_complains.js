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
//get all complains
exports.getAllComplaints = async (req, res)=>{

  const info = await complaints.find().sort({"_id":-1})
  res.json({
    info:info
  })

}
// seleye a single conplain

exports.deleteSinglelComplaints =  async( req, res)=>{
  const info = await  complaints.findOneAndRemove({_id:req.params.id})
  res.json({
    mesage:'complain deleted successfully'
  })
}