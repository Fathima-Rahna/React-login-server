const express = require('express')
const userController = require('../Controllers/userController')
const router = new express.Router()


//register

router.post('/register',userController.register)


//login
//login
router.post('/login',userController.login)

module.exports=router