const express = require('express');
const router = express.Router();

const register = require('../controller/register.controller');
const login = require('../controller/login.controller');


const authRouter = () => {
    
    router.use('/register', register);
    router.use('/login', login);

}

module.exports =  authRouter ;