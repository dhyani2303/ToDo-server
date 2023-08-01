
const {signup,signin}=require("../controllers/auth");
const express=require("express");

const app=express.Router();

//Authentication while creation of user

app.post("/signup",signup);


//Sign in
app.post("/signin",signin); 


module.exports=app;