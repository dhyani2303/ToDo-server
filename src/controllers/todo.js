const todo=require("../models/ToDo");
const {successResponse,
	successResponseWithData,
	notFoundResponse,
	validationError,
	notAuthenticated,
	forbidden}=require("../utils/apiResponse.helper");


const addtodo=async(req,res,next)=>{
    try {
        // const email=req.body.email;
        // const task=req.body.task;
        const {userid,task}=req.body;
        if(userid&&task){
            const newTask = await todo.create({
                userid: req.body.userid,
                task: req.body.task,
              });
            //  console.log(newTask);
              successResponseWithData(res,"Task Added Successfully",newTask);
        }
       
      } catch (err) {
        next(err);
      }
}

const gettodo=async(req,res,next)=>{
    try {
        const userid = req.query.userid;
        const task = await todo.find({ userid: userid }, { task: 1, _id: 1 });
    
       successResponseWithData(res,"",task);
        // console.log(task);
      } catch (e) {
        next(e)
      }
}


module.exports={addtodo,gettodo};