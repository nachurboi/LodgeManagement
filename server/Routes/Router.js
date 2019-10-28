const express = require('express');


const router = express.Router();
const Registration = require('../Controller/DataFlow')


router.post('/register', Registration.Registration);

module.exports = router;