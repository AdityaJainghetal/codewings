const mongoose = require("mongoose")
const adminSchema=new mongoose.Schema({
    adminid:String,
    adminpassword:String
})

module.exports = mongoose.model("admin", adminSchema);