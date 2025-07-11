export const createUser=async(req,res)=>{
    try{
        const {name,age,email,password}=req.body;

     

     console.log(dataBody)

     const user =new userModel({name,age,email,password});
     await userModel.save();

     res.send("data saved")

    }catch(error){
    console.log("error is",error)
    }
}