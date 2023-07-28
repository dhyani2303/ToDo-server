const express=require("express");
const mongoose=require("mongoose");
const app=express();
const dotenv=require("dotenv");
const authroutes=require("./src/routes/auth");
const todoroutes=require("./src/routes/todos");
const cookieParser=require("cookie-parser");
const cors=require("cors");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
dotenv.config();
app.use(cookieParser());
app.use(cors());

const connect=()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Database Connection is Successful");
    }).catch(err=>{
        throw err;
    })
}
app.use('/api/auth',authroutes);
app.use('/api/todo',todoroutes);

app.listen(process.env.PORT,()=>{
    connect()
    console.log("Server Connection is Successful!");
})
