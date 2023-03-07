const mongoose = require("mongoose")


const productSchema = mongoose.Schema({
     
     product_id : {
        type : String
     }
    ,
   

    

    productname : {
        type : String,
        require:true
    },

    quantity : {
        type : Number,
        require : true,
    },

    amount : {
      type : Number,
      require : true
    }
})



const Product = mongoose.model("product" ,productSchema)
module.exports = Product