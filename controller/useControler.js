const UserRepository = require("../repository/userRepository");
const UserService=require("../services/userServices");
async function createUser(req,res){
      console.log("user created");


      console.log(req.body);
      const userService=new UserService(new UserRepository());
      console.log(userService);
      try{
            const response= await userService.registeruser(req.body);
            return res.json({
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