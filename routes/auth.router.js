const express = require('express');
const router = express.Router();

const register = require('../controller/register.controller');
const login = require('../controller/login.controller');

router.post('/register', register);
router.post('/login', login);
    
module.exports =  router ;