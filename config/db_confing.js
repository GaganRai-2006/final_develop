const mongose=require('mongoose')
const db=require('./serverConfig')
async function dbconnect(){
      try{
           await mongose.connect(db.DB_URL);
           console.log("successfully db connected to server..");
      }catch(error){
            console.log("not able to connect");
            console.log(error);
      }
}
module.exports=dbconnect;