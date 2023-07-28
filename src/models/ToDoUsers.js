const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    task:{
        type:String
    }
})

const register = new mongoose.model('ToDoUser',userSchema);

module.exports=register;