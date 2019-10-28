const Reg = require('../Models/Reg/Model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('./config')

exports.Registration = async ( req, res, next)=>{
 try {
      if(!req.body.firstname || !req.body.lastname || !req.body.password || !req.body.number){ 
        return res.json({
         message:'please enter the required fields'
        })
            }else{
                const hash = bcrypt.hashSync(req.body.password, 10)
                const info = await Reg.create(req.body)
                info.password = hash
                await info.save()
                return res.json({ 
                    message:'account created successfully'
                })
      }
 } catch (error) {
     return console.log(error.message)

 }
}

//login
exports.Login = async (req, res) => {
    if(!req.body.email || !req.body.password){
        return res.json({message:'Please enter your credentials'})
    }
    else{
        await Reg.findOne({email:req.body.email}, (err, user) =>{
            if(err){
                console.log(err.message)
            }
            else if(!user){
                res.json({message:'No user with such email'})
            }
            else{
                const isPassword = bcrypt.compareSync(req.body.password, user.password)
                if(!isPassword){
                    res.json({message:'incorrect password'})
                }
                else{
                    const token = jwt.sign({id:user._id, firstname:user.firstname, lastname:user.lastname, email:user.email}, config.user_secret, {expiresIn:86400})
                    res.json({message:'Login successful', token:token})
                }
            }
        })
    }
}
