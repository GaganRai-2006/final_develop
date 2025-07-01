const {registeruser}=require('../services/userServices');
async function createUser(req,res){
      console.log("user created");


      console.log(req.body);
      
      try{
            const response= await registeruser(req.body);
            return res.status(201).json({
                  message:"user created",
                  success:true,
                  data:response,
                  error:{}
            })

      }catch(error){
            return res.status(error.statuscode).json({
                  success:false,
                  message:error.reason,
                  data:{},
                  error:error

            })

      }
       
}

module.exports={
      createUser
}