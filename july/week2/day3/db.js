const mongoose=require("mongoose");

const connectDB= async ()=>{
    try{
       const connection=mongoose.connect("mongodb://127.0.0.1:27017/MyDb");
       console.log("mongoDB connected");
       //connection.disconnect(); to disconnect the database

      // userModel.insertOne({name:"xyz",age:19,email:"nmg@gmail.com",password:"12346"});
    //   const user=new userModel({
    //    // _id:ObjectId('686e174b1bcced7c10aaec4b'),

    //     name:"bn",
    //     age:19,
    //     email:"nmg@gmail.com",
    //     password:"12346"
    //   })
    //   await user.save()

    // const data=await userModel.findOne();
    // console.log(data)
    //    console.log("data saved")

    await userModel.findByIdAndUpdate({_id:'686e18c9bf37ccd982eba69b'},{name:"hikjnm",age:78,email:"hjgjk@gmail.com",password:"6789"})
    console.log("data updated")
    await userModel.findByIdAndDelete({_id:'686e18c9bf37ccd982eba69b'})
    console.log("data deleted")
    }catch(error){
        console.log("Error",error)

    }
       


}
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
        age:{
            type:Number,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
})
const userModel=mongoose.model("user",userSchema);
module.exports=userModel
module.exports=connectDB;