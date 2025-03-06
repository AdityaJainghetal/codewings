const mongoose= require("mongoose");
const productSchema=new mongoose.Schema({
    productname:String,
    productbrand:String,
    productcategory:String,
    productdescription:String,
    productprice:Number,
    images:[String],
    defaultImage:String
})

module.exports = mongoose.model("product", productSchema);