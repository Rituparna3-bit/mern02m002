const mongoose=require("mongoose");

const userShema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
},
{
    versionKey:false,
}
)
const userModel=mongoose.model("user",userSchema);
module.exports=userModel;