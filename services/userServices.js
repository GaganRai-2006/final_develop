const { CreateUser, finduser } = require("../repository/userRepository");


async  function registeruser(userDetails){
      const user= await finduser({
      email:userDetails.email,
      mobileNumber:userDetails.mobileNumber
      })
            

      if(user){
            throw{reason:"user with email and mobile number is alreday exist",statuscode:400};
      }

      const newuser=await CreateUser({
      email:userDetails.email,
      password:userDetails.password,
      firstName:userDetails.firstName,
      lastName:userDetails.lastName,
      mobileNumber:userDetails.mobileNumber
      });
      if(!newuser){
            throw{reason:"user not created",statuscode:500};
            }

      return newuser;
      }


module.exports={
      registeruser,
}