const express=require('express');
const { getcartById } = require('../controller/cartControler');

cartRoute=express.Router();

cartRoute.get('/:id',getcartById);

module.exports=cartRoute;