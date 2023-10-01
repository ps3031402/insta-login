
const mongoose = require("mongoose")



async function mongooseConn (uri){
    try{
        await mongoose.connect(uri)
  console.log("Connected to mongo DB using mongoose")
    }catch(err){
        console.log(err)
    }
}


// run().catch(console.dir);

module.exports = {mongooseConn}
