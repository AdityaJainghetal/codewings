import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import {
  Container,
  Nav,
  Navbar,
  Row,
  Col,
  Button,
  Badge,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
const Topmenu = () => {
  
  
    const handleNavigation = (path) => {
      navigate(path);
    };
  const Product = useSelector((state) => state.mycart.cart);
  const productLength = Product.length;

  const [username, setUsername] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
    setIsLogin(!!storedUsername);
  }, []);


  const userLogout = () => {
    localStorage.removeItem("username");
    setIsLogin(false);
    navigate("/");
  };

  return (
    <>
      <Navbar expand="lg" className="custom-navbar" id="navbar">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            Exculsive
          </Navbar.Brand>
          <Navbar.Toggle >
          <IoMdMenu />
          </Navbar.Toggle>
        
          
           
          
          <Navbar.Collapse id="navbar-nav">
            <Row className="w-100 align-items-center">
              {/* Left Section */}
              <Col xs={12} md={4} className="text-center text-md-start">
                <Nav className="nav-links">
                  <Nav.Link as={Link} to="/product">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact">
                    Contact
                  </Nav.Link>
                
                  <Nav.Link as={Link} to="/registration">
                    Sign Up
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login" className="login-link">
                    Login
                  </Nav.Link>
                </Nav>
              </Col>

              {/* Center Section */}
              <Col xs={12} md={4} className="text-center user-info">
                {isLogin ? (
                  <p className="welcome-text">
                    Welcome : <strong>{username}</strong>
                  </p>
                ) : (
                  <p>Please login to access your account</p>
                )}
              </Col>

         


              {/* Right Section */}
              <Col
                xs={12}
                md={4}
                className="text-center text-md-end d-flex justify-content-center justify-content-md-end align-items-center"
              >
          
                     <Col style={{ color: "black"}}>
          <DropdownButton id="dropdown-basic-button" title="Categories" variant="light">
            <Dropdown.Item onClick={() => handleNavigation("/womens")}>Womens</Dropdown.Item>
            <Dropdown.Item onClick={() => handleNavigation("/mens")}>Mens</Dropdown.Item>
            <Dropdown.Item onClick={() => handleNavigation("/mobile")}>Electronic</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Home & lifestyle</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Sports & outdoor</Dropdown.Item>
            <Dropdown.Item href="#/action-6">Body & Toys</Dropdown.Item>
            <Dropdown.Item href="#/action-7">Groceries & pets</Dropdown.Item>
            <Dropdown.Item href="#/action-8">Health & beauty</Dropdown.Item>
          </DropdownButton>
        </Col>



        <Nav.Link as={Link} to="/cart" className="cart-icon">
                  <FaCartShopping />
                  {productLength > 0 && (
                    <Badge bg="danger">{ productLength 
}</Badge>
                  )}
                </Nav.Link>
                {isLogin && (
                  <Button onClick={userLogout} className="logout-btn">
                    Logout
                  </Button>
                )}
              </Col>
              
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Topmenu;