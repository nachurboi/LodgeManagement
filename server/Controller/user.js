const express = require('express')
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const user = require('../Models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../Controller/config'); 
// const router = express.Router();
   
   //cloudinary set up
//  cloudinary.config({
//     cloud_name:config.cloud_name,
//     api_key:config.api_key,
//     api_secret:config.api_secret
//    })
   
//    // multer set up
//    const storage = multer.diskStorage({
//     filename:function(req, file,cb){
//      cb(null, Date.now()+file.originalname)
//     }
//    })
    
//    const imageFilter = function(req,file,cb){
    
//     if(!file.originalname.match(/\.(jpeg||jpg||png)$/i)){
//      return cb("only Image files are allowed", false)
//     }
//     else{
//      cb(null,true)
//     }
   
//    }
   
// const upload = multer({
//     storage:storage,
//     fileFilter:imageFilter
//    }) 

// exports.userRegistration = router.post('/register',upload.single('photo'), async (req,res)=>{
//     try {
//         if(!req.body.firstname|| !req.body.lastname || !req.body.password || !req.body.number || !req.body.email){
//             res.json({Message:"fill in the required information"}),console.log('fill in the required fields')
//         }
//         else if(req.file ==='' || req.file === undefined){
          
//           console.log("no image selected")
//         }
//         else{
//          let img = req.file.path;
//          const result = await cloudinary.uploader.upload(img)
//          let imgUrl = result.secure_url;
      
//          const info =  await user.create({
//            firstname:req.body.firstname,
//            lastname:req.body.lastname,
//            password:req.body.password,
//            number:req.body.number, 
//            email:req.body.email
//               })
//               info.photo = imgUrl    
//               await info.save();
//               res.json({ Message:"Succesfully saved"})
//         }
        
        
//        } catch (error) {
//          console.log(error)
//        }
//    });

    



   
   
   































//real


// exports.userRegistration = async ( req, res)=>{
//  try { 
//       if(!req.body.firstname || !req.body.lastname || !req.body.password || !req.body.number || !req.body.email){ 
//         return res.json({
//               message:'please enter the required fields'
//         })
//             }else{
//                 const hash = bcrypt.hashSync(req.body.password, 10)
//                 const body = req.body
//                 await user.create({
//                     firstname:body.firstname,
//                     lastname:body.lastname,
//                     email:body.email,
//                     password:hash,
//                     number:body.number
                
//                 },(err, user)=>{
//                     if(err){
//                         res.json({error:err})
//                         console.log(err)
//                     }
//                     res.json({message:"Account created succesfully"})
//                 }
//                 )
                
//       }
//  } catch (error) {
//      return res.json({
        
    
//           message:error
//      })

//  }
 
// }


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
                  let id = user.id
                  let firstname = user.firstname
                  let email = user.email
                  let photo = user.photo
                  let lastname = user.lastname
                  let number= user.number
                  
                  res.json({message:'Login successful', 
                  token:token, id:id, firstname:firstname,
                  email:email,photo:photo,lastname:lastname,number:number})
                  
              }
        
      })
   }
    } catch (error) {
        return console.log(error)
    }
   }


   //find one user 
exports.getSingleUser = async (req,res)=>{
        const info = await user.findOne({_id:req.params.id})
        return(res.json({
            message:info 
            // info_id:info._id,
            // info_email:info.email,
            // info_firstname:info.firstname,
            // info_lastname:info.lastname,
            // info_number:info.number

        }))
        
   }

   // get all user
exports.getAllUser = async (req,res)=>{
    const info = await user.find().sort({"_id":-1});
    
    return(res.json({
        info:info
    }))
}

//delete single user
exports.deleteUser = async ( req, res)=>{
    const info = await user.findOneAndRemove({_id:req.params.id})
    res.json({
        info:info,
        message:"User has been deleted"
    })
}

//update a single user information
exports.updateUser = async (req,res)=>{
    const info = await user.find({id:req.params.id})
    if(info){ return res.json({message:'user does not exist'})

    }else{
        const body = req.body;
        info.firstname = body.firstname || info.firstname
        info.lastname = body.lastname || info.lastname
        info.email = body.email || info.email
        info.password = body.password || info.password
        await info.save();
        res.json({message:'user info updated successfully'})
    }
}


