const express = require("express");
const protected = require("../middleware/protected");
const router = express.Router();
const Product = require("../schema/sale")
router.post("/addsales" , protected , async(req , res)=>{
    const {productname , quantity , amount} = req.body
    console.log(productname)
    console.log(quantity);
    console.log(amount);
    if(!productname || !quantity || !amount){
        res.status(400).json({error : "All field is required"}
        )
    }else{
        const firstDigit = String.fromCharCode(Math.floor(Math.random() * 26) + 65); // generate a random capital letter (A-Z)
        const remainingDigits = Math.floor(Math.random() * 9000) + 1000; // generate a random number between 1000 and 9999
        const product_id = `${firstDigit}${remainingDigits}`;
         
        

        const data = {
            product_id,  productname , quantity , amount
        }
         const product  = new Product(data)
  
         await product.save();
          res.status(201).json({
            result : "All product added successfully"
          })

    }
   
})


module.exports = router