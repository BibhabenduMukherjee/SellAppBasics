const express = require("express")
const router = express.Router();
const Product = require("../schema/sale")
router.get("/topfivesale",async(req,res)=>{
   Product.find({}).sort({"quantity" : -1}).limit(4).exec((err,data)=>{
    if(err){
     res.status(400).json({error : "Error Occured"})
    }else{
        console.log(data)
        res.status(200).json({result : data})
    }
   })
   
})

module.exports = router