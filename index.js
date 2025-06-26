const dbconnect = require('./config/db_confing');
const server=require('./config/serverConfig');
const bodyParser=require('body-parser')

const express=require('express');

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());

app.post("/ping",(req,res)=>{
      console.log(req.body);
      return res.json({message:"pong"});
})


app.listen(server.PORT,async ()=>{
       await dbconnect()
      console.log(`server strated at port ${server.PORT}`);
      
})
