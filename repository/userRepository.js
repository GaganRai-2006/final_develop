
const user=require('../schema/userSchema');

async  function finduser(parameters){
            try{
                  const response= await user.findOne({...parameters});
                  return response;
            }catch(error){
                  console.log(error);
            }
      }

async  function CreateUser(userDetails){
            try{
                  const response=await user.create(userDetails);
                  return response;
            }catch(error){
                  console.log(error);
            }
      }


module.exports={
      finduser,
      CreateUser
}