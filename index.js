const dbconnect = require('./config/db_confing');
const server=require('./config/serverConfig');

const express=require('express');

const app=express();


app.listen(server.PORT,async ()=>{
       await dbconnect()
      console.log(`server strated at port ${server.PORT}`);
      
})
