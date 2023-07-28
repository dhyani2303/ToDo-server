const mongoose=require("mongoose");

const toDoSchema=new mongoose.Schema({
    userid:{
        type:String
    },
    task:{
        type:String
    }

})

const ToDo = new mongoose.model('ToDo',toDoSchema);

module.exports=ToDo;