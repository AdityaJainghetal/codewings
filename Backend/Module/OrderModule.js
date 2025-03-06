const mongoose= require("mongoose");
const orderSchema=new mongoose.Schema({
    customerid:String,
    customername:String,
    productname:String,
    amount:Number,
    email:String
})


module.exports = mongoose.model("order", orderSchema);