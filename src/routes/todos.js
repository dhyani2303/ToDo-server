const express=require("express");
const router=express.Router();
const verifyToken=require("../verifyToken");
const {addtodo,gettodo,deletetodo}=require("../controllers/todo");

router.post("/",addtodo);
router.get("/",gettodo);
router.delete("/",deletetodo)


module.exports=router;