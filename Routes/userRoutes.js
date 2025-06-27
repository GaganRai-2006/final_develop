const express=require('express');
const { createUser } = require('../controller/useControler');

const userRoute=express.Router();

userRoute.post('/',createUser);
module.exports=userRoute;