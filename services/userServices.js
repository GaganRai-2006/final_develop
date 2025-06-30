class UserService{
      constructor(userRepository){
            this.userRepository=userRepository;
      }

       async registeruser(userDetails){
            const user= await this.userRepository.finduser({
                  email:userDetails.email,
                  mobileNumber:userDetails.mobileNumber
            })
            

            if(user){
            throw{reason:"user with email and mobile number is alreday exist",statuscode:400};
            }

            const newuser=await this.userRepository.CreateUser({
                  email:userDetails.email,
                  password:userDetails.password,
                  firstName:userDetails.firstName,
                  lastName:userDetails.lastName,
                  mobileNumber:userDetails.mobileNumber
            });
            if(!newuser){
                  throw{reason:"user not created",stats:500};
            }

            return newuser;
      }
}

module.exports=UserService;