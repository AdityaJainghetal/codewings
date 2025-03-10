const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const paymentModel = require("../Module/OrderModule");
const axios = require("axios");

const OrderModel= require("../Module/OrderModule");



// Create QR Code
router.post("/orders",async(req,res) => {
    const  { amount, productname, customername,  email, id }= req.body;
     console.log(req.body);
     try {
          const Order= await OrderModel.create({
             customerid:id,
             customername:customername,
             productname:productname,
             amount:amount,
            
             email:email
          })
 
 




        const instance = new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET,
        });

        const options = {
            amount: amount * 100, // amount in paise
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
        };

        instance.orders.create(options, async (error, order) => {
            if (error) {
                console.error("Error creating order:", error);
                return res.status(500).json({ message: "Something went wrong!" });
            }

           
          

            res.status(200).json({ data: order });
        });
    } catch (error) {
        console.error("Error in /orders:", error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
});

// Verifying the payment
router.post("/verify", async (req, res) => {
    try {
        const { razorpay_orderID, razorpay_paymentID, razorpay_signature } = req.body;

        // Validate the request body
        if (!razorpay_orderID || !razorpay_paymentID || !razorpay_signature) {
            return res.status(400).json({ message: "Missing required fields!" });
        }

        const sign = razorpay_orderID + "|" + razorpay_paymentID;
        const resultSign = crypto
            .createHmac("sha256", process.env.KEY_SECRET)
            .update(sign.toString())
            .digest("hex");

        if (razorpay_signature === resultSign) {
            return res.status(200).json({ message: "Payment verified successfully" });
        } else {
            return res.status(400).json({ message: "Payment verification failed" });
        }
    } catch (error) {
        console.error("Error in /verify:", error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
})

module.exports = router;