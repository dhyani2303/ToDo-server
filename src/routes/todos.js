const express=require("express");
const router=express.Router();
const verifyToken=require("../verifyToken");
const {addtodo,gettodo}=require("../controllers/todo");

router.post("/",verifyToken,addtodo);
router.get("/",verifyToken,gettodo);


module.exports=router;