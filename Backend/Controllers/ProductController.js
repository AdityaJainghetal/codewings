const ProductModule =require("../Module/productModule");


const productDisplay = async(req,res)=>{
    const { productbrand } = req.query;
    try {
        const Product = await ProductModule.find({productbrand:productbrand});
        res.status(200).json(Product);
    } catch (error) {
        console.log(error);
    }
}


const productDataShow = async(req,res)=>{
    const Product = await ProductModule.findById(req.body.id);
    res.status(200).send(Product);
}





module.exports={
    productDisplay,
    productDataShow
}