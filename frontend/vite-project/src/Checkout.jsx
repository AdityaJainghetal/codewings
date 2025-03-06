import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
const CheckOut = () => {
    const [mydata, setMydata] = useState({});
    const navigate = useNavigate();
    const Product = useSelector(state => state.mycart.cart);
    
    useEffect(() => {
        if (!localStorage.getItem("username")) {
            message.error("You are not logged in!");
            navigate("/cart");
        } else {
            loadData();
        }
    }, [navigate]);

    const loadData = async () => {
        const api = "http://localhost:8000/users/getuserdetail";
        try {
            const response = await axios.post(api, { id: localStorage.getItem("userid") });
            setMydata(response.data);
        } catch (error) {
            message.error("Failed to load user data.");
            console.error(error);
        }
    };

    const initPay = (data) => {
        const options = {
            key: "rzp_test_o3vkPO5n8pMXdo",
            amount: data.amount,
            currency: data.currency,
            name: productName,
            description: "Test",
            image: `http://localhost:8000/${myimg}`,
            order_id: data.id,
            handler: async (response) => {
                try {
                    const verifyURL = "http://localhost:8000/api/payment/verify";
                    await axios.post(verifyURL, response);
                    message.success("Payment successful!");
                } catch (error) {
                    // message.error("Payment verification failed.");
                    console.error(error);
                }
            },
            theme: {
                color: "#3399cc",
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();

        // window.localStorage.removeItem('persist:cartData');
        // window.location.reload()
        
    };

    const handlePay = async () => {
        try {
            const orderURL = "http://localhost:8000/api/payment/orders";
            const { data } = await axios.post(orderURL, {
                amount: totalAmount,
                productname: productName,
                customername: mydata.name,
                email: mydata.email,
                id: mydata._id
            });
 
           

            initPay(data.data); 
   
          // Reload the current page
        
         window.localStorage.removeItem('persist:cartData');
           navigate("/")
        

    
    
       


        } catch (error) {
            message.error("Failed to create payment order.");
            console.error(error);
        }
        
    
    };

    let totalAmount = 0;
    let productName = "";
    let myimg = "";

    Product.forEach((item) => {
        totalAmount += item.price * item.qnty;
        productName += item.name + ",";
        myimg = item.image;
    });

    return (
        <>
            
      
        <div id="checkout">
            <Card className="checkoutbtn">
                <Card.Img style={{width:"50%", height:"50%", padding:"auto"}} variant="top" src={`http://localhost:8000/${myimg}`} />
                <Card.Body>
                    <Card.Title>User CheckOut</Card.Title>
                    <Card.Text>
                        Your Total Pay Amount: <input type="number"value={totalAmount}/>
                    </Card.Text>
                    <Card.Text>
                        Your Shipping Address: <input type="text" value={mydata.address} />
                    </Card.Text>
                    <Card.Text>
                        Your Products: <input type="text"  value={productName} />
                    </Card.Text>
                    <Button variant="primary" onClick={handlePay}>Pay Now!</Button>
                </Card.Body>
            </Card>
        </div>
        </>
    );
};

export default CheckOut;