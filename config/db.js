const mongoose = require("mongoose");
// const dbgr= require("debug");
// const config=require("config");



function connectToDB(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("📊Mongodb connected");
    })
    .catch((err)=> console.log(err));
}


// function connectToDB(){
//     mongoose
//     .connect(`${config.get( "MongoDB_URL")}/ecommerce`)
//     .then(()=>{
//         dbgr("Mongodb connected");
//     })
//     .catch((err)=> dbgr(err));
// }


module.exports=connectToDB;