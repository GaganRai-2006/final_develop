const mongose=require('mongoose')
const bcrypt=require('bcrypt');
const userSchema=new mongose.Schema({
      firstName:{
            type:String,
            reqiure:[true,"first name is required"],
            minlength:[5,"atleast length is 5"],
            trim:true,
            lowercase:true,
            maxlength:[20,"length less than or equal to 20"]

      },
      lastName:{
            type:String,
            reqiure:[true,"last name is required"],
            minlength:[5,"atleast length is 5"],
            trim:true,
            lowercase:true,
            maxlength:[20,"length less than or equal to 20"]

      },
      mobileNumber:{
            type:String,
            trim:true,
            unique:[true,"number is already in use"],
            required:[true,"phone number must be provided"],
            minlength:[10,"phone number should be length of 10"],
            maxlength:[10,"phone number should be length of 10"],
      },
      email:{
            type:String,
            trim:true,
            required:[true,"email is required"],
            unique:[true,"email is alreday in use"],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"]
      },
      password:{
            type:String,
            required:[true,"password should be provided"],
            minlength:[6,"minlength atleast 6"]
      }
},{
      timestamps:true
})

userSchema.pre('save', async function(){
      
      const hashedPassword= await bcrypt.hash(this.password,10);
      this.password=hashedPassword;
      
})

const User=mongose.model("User",userSchema);
module.exports=User;