const mongoose = require("mongoose");
const Schmea = mongoose.Schema;

// Create Schmea
const UserSchmea = new Schmea({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    avatar:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = User  = mongoose.model("users",UserSchmea)