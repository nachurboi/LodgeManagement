const express = require('express');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const router = express.Router();
const userController = require('../Controller/user');
const Apartment =require('../Models/apartment')
const config = require('../Controller/config')
const apartment = require('../Controller/apartment')


// cloudinary set up
cloudinary.config({
 cloud_name:config.cloud_name,
 api_key:config.api_key,
 api_secret:config.api_secret
})

// multer set up

const storage = multer.diskStorage({
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




router.post('/apartment', upload.single('photo'), async (req, res)=> {
 try {
  if(!req.body.apartment || !req.body.address || !req.body.city || !req.body.phonenumber){
   res.json({Message:"Enter the correct information"})
  }
  else if(req.file ==='' || req.file === undefined){
    console.log(req.file)
    res.json({Message:'No image selected'})
  }
  else{
   let img = req.file.path;
   const result = await cloudinary.uploader.upload(img)
   let imgUrl = result.secure_url;

   const info =  await Apartment.create({
     typeofapartment:req.body.typeofapartment,
     address:req.body.address,
     city:req.body.city,
     phonenumber:req.body.phonenumber, 
  
        })
        info.photo = imgUrl
      
        await info.save();
        res.json({ Message:"success"
    })
  }
  
  
 } catch (error) {
   console.log(error)
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
router.post('/register',userController.userRegistration);

//user login authentication
router.post('/login', userController.userLogin);

//find one user
router.get('/user/:id',userController.getSingleUser);

//del user
router.delete('/del/user/:id', userController.deleteUser);

// update user info
router.put('/update/user/:id', userController.updateUser);






module.exports = router;