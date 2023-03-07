const Product = require("../schema/sale")
const express = require("express")
const router = express.Router();



router.get("/rev" , async(req,res)=>{
const allProducts = await Product.find({});
let total = 0;
 allProducts.map((product)=>{
   
    total+=Number(product.amount)
})

res.status(200).json({result : total})
})

module.exports = router