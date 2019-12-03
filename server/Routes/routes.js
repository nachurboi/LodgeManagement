const express = require('express');
const router = express.Router();
const userController = require('../Controller/user');
const addApartment = require('../Controller/addApartment')


router.post('/register',userController.userRegistration);
router.post('/login', userController.userLogin);
router.post('/apartment',addApartment.addApartment)


module.exports = router;