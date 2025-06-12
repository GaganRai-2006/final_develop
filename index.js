const server=require('./config/serverConfig');

const express=require('express');

const app=express();


app.listen(server.PORT,()=>{
      console.log(`server strated at port ${server.PORT}`);
      
})
