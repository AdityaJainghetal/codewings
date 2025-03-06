import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import backgroundImage from "../src/assets/background img 2.jpg"

const Signup = () => {
    const [input, setInput] = useState({
        name: '',
        contactno: '',
        city: '',
        address: '',
        pincode: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const api = "http://localhost:8000/users/userregister";
            const response = await axios.post(api, input);
            console.log(response.data);
            message.success("Registration successful!");
            navigate("/login");
        } catch (error) {
            console.error(error);
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <div id="login" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div>
                  
            <Form className="signup-form" onSubmit={handleSubmit}>
            <h1 className="text-center mb-4" >Registration</h1>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Enter Name:</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={handleInput}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicContact">
                    <Form.Label>Enter Contact No:</Form.Label>
                    <Form.Control
                        type="tel"
                        name="contactno"
                        value={input.contactno}
                        onChange={handleInput}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label>Enter Your City:</Form.Label>
                    <Form.Control
                        type="text"
                        name="city"
                        value={input.city}
                        onChange={handleInput}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Enter Shipping Address:</Form.Label>
                    <Form.Control
                        type="text"
                        name="address"
                        value={input.address}
                        onChange={handleInput}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPincode">
                    <Form.Label>Enter Pin Code:</Form.Label>
                    <Form.Control
                        type="number"
                        name="pincode"
                        value={input.pincode}
                        onChange={handleInput}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your Email:</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={handleInput}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={input.password}
                        onChange={handleInput}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    Submit
                </Button>
            </Form>
        </div>
        </div>
    );
};

export default Signup;