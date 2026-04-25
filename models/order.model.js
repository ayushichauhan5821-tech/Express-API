const mongoose = require("mongoose")

let OrderSchema = mongoose.Schema({
    userId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    items:[
        {productId:String,
            qauntity:Number,
            price:Number,
            totle:Number
        },
          ],
        totalbill:{
            type:Number,
        },
        status:{
            type:String,
            enum:["pending","confirm","cancle"],
            default:"pending",
        },
        });
        module.exports=mongoose.model("order",OrderSchema)

   
