const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type : String,
    require : true,
    trim : true
  }, 
  
  password: {
    type : String,
    require : true, 
  },
  
}, { timestamps : true});

const User = mongoose.model('users', userSchema);

module.exports = User;

