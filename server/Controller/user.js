const user = require('../Models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../Controller/config') 

exports.userRegistration = async ( req, res)=>{
 try { 
      if(!req.body.firstname || !req.body.lastname || !req.body.password || !req.body.number || !req.body.email){ 
        return res.json({
              message:'please enter the required fields'
        })
            }else{
                const hash = bcrypt.hashSync(req.body.password, 10)
                const body = req.body
                await Reg.create({
                    firstname:body.firstname,
                    lastname:body.lastname,
                    email:body.email,
                    password:hash,
                    number:body.number
                
                },(err, user)=>{
                    if(err){
                        res.json({error:err})
                    }
                    res.json({message:"Account created succesfully"})
                }
                )
                
               
                // console.log('save')

                // return res.json({ 
                //     message:'account created successfully'
                // })
      }
 } catch (error) {
     return res.json({
        
    
          message:error
     })

 }
 
}


// login controller

exports.userLogin = async (req, res) => {
    try {
     
     if(!req.body.email || !req.body.password){
      return res.json({message:'Please enter your credentials'})
   }
   else{
      await user.findOne({email:req.body.email}, (err, user) =>{
          if(!user){ return res.json({message:'No user with such email'}) }

          const isPassword = bcrypt.compareSync(req.body.password, user.password)
              if(!isPassword){
                  res.json({message:'incorrect password'})
                  
              }

              else{
                  const token = jwt.sign({id:user._id, firstname:user.firstname, lastname:user.lastname, email:user.email}, config.user_secret, {expiresIn:86400})
                  console.log(user.firstname)
                  res.json({message:'Login successful',firstname:user.firstname, token:token})
                  
              }
        
      })
   }
    } catch (error) {
        return console.log(error)
    }
   }
