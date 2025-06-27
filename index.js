const dbconnect = require('./config/db_confing');
const server=require('./config/serverConfig');
const bodyParser=require('body-parser')
const User=require('./schema/userSchema')

const express=require('express');
const userRoute = require('./Routes/userRoutes');
const cartRoute=require('./Routes/cartRouter')

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());

app.use("/users",userRoute);
app.use("/cart",cartRoute);

app.post("/ping",(req,res)=>{
      console.log(req.body);
      return res.json({message:"pong"});
})


app.listen(server.PORT,async ()=>{
       await dbconnect()
      console.log(`server strated at port ${server.PORT}`);
      // const user= await User.create({
      //       firstName:"Gaganyc",
      //       lastName:"raixyzb",
      //       mobileNumber:"9114528416",
      //       email:"abbv@gmail.com",
      //       password:"1324257"
      // })
      // console.log(user);
      
})
