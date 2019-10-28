const Reg = require('../Models/Reg/Model')

exports.Registration = async ( req, res, next)=>{
 try {
      if(!(req.body.firstname) || !(req.body.lastname) || !(req.body.password) || !(req.body.nuber)){ 
        return res.json({
         message:'please enter the required fields'
        })
            }else{
        const info = await Reg.create(req.body)
       return res.json({ 
          message:'account created successfully'
       })
      }
 } catch (error) {
     return console.log(error)

 }
}

