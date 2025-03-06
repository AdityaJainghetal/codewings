import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import backgroundImage from "../src/assets/background img.jpg"
const Login = () => {
    const [input, setInput] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const api = "http://localhost:8000/users/userlogin";
            const response = await axios.post(api, input);
            message.success("You are successfully logged in!");
            localStorage.setItem("username", response.data.name);
            localStorage.setItem("useremail", response.data.email);
            localStorage.setItem("userid", response.data._id);
            navigate("/");
        } catch (error) {
            message.error(error.response?.data?.msg || "Login failed. Please try again.");
        }
    };

    return (
        <div id="login" style={{ backgroundImage: `url(${backgroundImage})` }}>

        <div className="d-flex justify-content-center align-items-center vh-100">
            
            <div className="card col-12 col-lg-4 p-4 shadow rounded bg-white">
                <h2 className="text-center mb-4">Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={input.email}
                            onChange={handleInput}
                            required
                        />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={input.password}
                            onChange={handleInput}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Submit
                    </Button>
                </Form>
                <div className="mt-3 text-center">
                    <span>Don't have an account? </span>
                    <span className="loginText" onClick={() => navigate("/registration")} style={{ cursor: 'pointer', color: '#007bff' }}>
                        Register
                    </span>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;