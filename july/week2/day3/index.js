const express= require("express");
const connectDB=require("./db")

//this is for creating application
const app=express();

const router=express.Router()
connectDB();
const port=8080;


const validation=(req,res,next)=>{
    console.log("validation start")
    next();
}


const auth=(req,res,next)=>{
    console.log("authemntication start")
    next()
}
// app.use(validation);
// app.use(auth);
// app.get("/",(req,res)=>{
//     res.send("get method called")
//})


// app.post("/user",(req,res)=>{
//     res.send("post method called")
// })

app.use("/api",router);

router.get("/",validation,auth,(req,res)=>{
    res.send("get method called")
})
router.post("/user",validation,auth,(req,res)=>{
    res.send("post method called")
})
app.listen(port,(res,req)=>{
    console.log("server is running on the port",port);
})