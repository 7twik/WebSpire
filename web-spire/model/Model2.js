const mongoose = require("mongoose");

const PostSchema = {
  Username:{
    type:String,
    required: true,
    unique: true,
    
  },
  Password:{
    type:String,
    required: true
  }
};


const Posts = mongoose.model("OfficialLogin", PostSchema); //collection name, schema

module.exports = Posts;