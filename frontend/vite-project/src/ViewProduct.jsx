import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {useDispatch} from "react-redux";
import { addtoCart } from "./CardSlice";

const ViewProduct = () => {
    const { id } = useParams(); 
    const [proData, setPreData] = useState({});
    const [bigImage, setBigImage] = useState("");


    const dispatch = useDispatch()
    const loadData = async () => {
        let api = "http://localhost:8000/products/productdatashow";
        const response = await axios.post(api, { id: id });
        setPreData(response.data);
        setBigImage(response.data.defaultImage);
        console.log(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    const myBigImage = (item) => {
        setBigImage(item);
    }

    return (
        <>
            <Container className="product-container">
                <Row className="justify-content-center">
                    <Col md={6} className="image-column">
                        <Card className="text-center m-3">
                            <Card.Img variant="top" src={`http://localhost:8000/${bigImage}`} className="main-image" />
                            <div className="thumbnail-container">
                                {proData.images && proData.images.length > 0 ? (
                                    proData.images.map((item, index) => (
                                        <img 
                                            key={index} 
                                            className="thumbnail" 
                                            onClick={() => { myBigImage(item) }} 
                                            src={`http://localhost:8000/${item}`} 
                                            alt={`Thumbnail ${index}`} 
                                        />
                                    ))
                                ) : (
                                    <p>No additional images available.</p>
                                )}
                            </div>
                        </Card>
                    </Col>
                    <Col md={6} className="details-column">
                        <h2 className="product-name">Product Name: {proData.productname}</h2>
                        <h3 className="product-price">Price: ₹{proData.productprice}</h3>
                        <h4 className="product-category">Category: {proData.productcategory}</h4>
                        <h5 className="product-description">Description: {proData.productdescription}</h5>
                      
                         <Button variant="primary" className="add-to-cart-button"
                                onClick={()=>{dispatch(addtoCart({id:proData._id,name:proData.productname,brand:proData.productbrand, category:proData.productcategory, price:proData.productprice, image:proData.defaultImage,qnty:1}))}}
                                
                                >Add to Cart</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ViewProduct;