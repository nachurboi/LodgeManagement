const express = require('express');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const router = express.Router();
const userController = require('../Controller/user');
const Apartment =require('../Models/apartment')
const config = require('../Controller/config')
const apartment = require('../Controller/apartment')
const user = require('../Models/user')
const bcrypt = require('bcryptjs')
const mailer = require('nodemailer')
const user_Complaint = require('../Controller/user_complains')
const emailExitence = require('email-existence')



// cloudinary set up
 cloudinary.config({
 cloud_name:config.cloud_name,
 api_key:config.api_key,
 api_secret:config.api_secret
})

// multer set up1

const storage = multer.diskStorage({
 filename:function(req, file,cb){
  cb(null, Date.now()+file.originalname)
 }
})

const storage1  = multer.diskStorage({
  filename:function(req, file,cb){
   cb(null, Date.now()+file.originalname)
  }
 })
 
const imageFilter = function(req,file,cb){
 
 if(!file.originalname.match(/\.(jpeg||jpg||png)$/i)){
  return cb("only Image files are allowed", false)
 }
 else{
  cb(null,true)
 }

}

const upload = multer({
 storage:storage,
 fileFilter:imageFilter
}) 

const upload1 = multer({
  storage:storage1,
  fileFilter:imageFilter
 }) 



 






router.post('/apartment', upload.single('photo'), async (req, res)=> {

        // 

 try { 

  const apartmentExist = await Apartment.findOne({address:req.body.address});

  if(!req.body.apartment || !req.body.address || !req.body.city || !req.body.phonenumber){
   
    res.json({message:"Fill in the required information"})

  }else if(apartmentExist){
    res.json({message:'apartment already exists'})
  }
  else if(req.file ==='' || req.file === undefined){
  
    res.json({message:'No image selected'})
  }
  else{

   let img = req.file.path;
   const result = await cloudinary.uploader.upload(img)
   let imgUrl = result.secure_url;

   const info =  await Apartment.create({
     apartment:req.body.apartment,
     address:req.body.address,
     city:req.body.city,
     phonenumber:req.body.phonenumber, 
  
        })
        info.photo = imgUrl
      
        await info.save();

        res.json({ message:"APARTMENT REGISTERED SUCCESSFULLY"
    })
  }
  
  
 } catch (error) {
 }
 
})

////////// <---------APARTMENT ROUTES-------->////////////////////////

//all apartment route
router.get('/allapartment',apartment.getAllApartment);

//find one apartment route

router.get('/apartment/:id',apartment.getSingleApartment);

//del apartment route
router.delete('/del/apartment/:id', apartment.deleteApartment);

// update apartment route

router.put('/update/apartment/:id', apartment.updateApartment);



////////// <---------USER ROUTES-------->////////////////////////

//create a new user
router.post('/register',upload1.single('photo'), async (req,res)=>{
  try {
    //checking for existing emails and number during registration
        const userEmailExist = await user.findOne({email:req.body.email})
        const userNumberExist = await user.findOne({number:req.body.number})
    

        // console.log(emailExist.data)
    
      if(!req.body.firstname|| !req.body.lastname || !req.body.password || !req.body.number || !req.body.email){         
        
        res.json({message:"fill in the required information"})

      }else if(userNumberExist){

        res.json({message:'Number already Exists'})

      }else if(userEmailExist){

          res.json({message:"The email you entered Exists"})

      }else if(req.body.password.length < 6 ){

        res.json({message:'Your password is too short'})

      }else if(req.body.password.length > 16){

        res.json({message:'Your password is too long'})

      }else if(req.body.lastname.length > 12){

        res.json({message:'The lastname is too long'})

      }else if(req.body.firstname.length >15){

        res.json({message:'The firstname is too long'})

      }else if(req.body.number.length !==11){

        res.json({message:'incorrect mobile number'})

      }else if(req.file ===''|| req.file === undefined){
  
        res.json({ message:"No Photo Selected"})

      }else{

       let img = req.file.path;
       
       const result = await cloudinary.uploader.upload(img)

       let imgUrl = result.secure_url;

       const hash = bcrypt.hashSync(req.body.password,10)

       const info =  await user.create({

         firstname:req.body.firstname,

         lastname:req.body.lastname,

         email:req.body.email,

         password:hash,

         number:req.body.number, 
         
            })
            info.photo = imgUrl  

            await info.save();

            res.json({ message:"Succesfully saved"})
            
 //setting up nodemailer

 const transport = mailer.createTransport({
  service:'Gmail',
  auth:{
      user:'nachurboi@gmail.com',
      pass:'nachurbaba'
  }
 });
  //craeting custom message to the user
 const mailOptions = {
  from:'nachurboi@gmail.com',
  to:req.body.email,
  subject:`Welcome, ${req.body.firstname}`,
  text:`thank you ${req.body.firstname}for registering with us, please do not re-register`
 }
 //sending the mail
 transport.sendMail(mailOptions,(error,message)=>{
   if(error){
   
   }else{
       
        console.log('email sent '+ message.response)
   }
 })
      }
      
      
     } catch (error) {
       console.log(error)  
     }
 });



//user login authentication
router.post('/login', userController.userLogin);

//find one user
router.get('/user/:id',userController.getSingleUser);

//del user
router.delete('/del/user/:id', userController.deleteUser);

// update user info
router.put('/update/user/:id', userController.updateUser); 

//all user
router.get('/alluser', userController.getAllUser)

//post complains
router.post('/complaints',user_Complaint.complains_controller);

router.get('/allcomplaint',user_Complaint.getAllComplaints)
  





module.exports = router;