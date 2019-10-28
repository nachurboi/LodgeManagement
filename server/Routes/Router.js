const express = require('express');
const router = express.Router();
const Registration = require('../Controller/DataFlow')


router.post('/register', Registration.Registration);
router.post('/login', Registration.Login)

module.exports = router;