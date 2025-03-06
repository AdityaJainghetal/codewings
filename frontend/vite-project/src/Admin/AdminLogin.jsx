import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const AdminLogin = () => {
    const [adminuser, setAdminUser ] = useState("");
    const [adminpassword, setAdminPassword] = useState("");
    const [loading, setLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true
        try {
            let api = "http://localhost:8000/admin/adminlogin";
            const response = await axios.post(api, { adminuser, adminpassword });
            if (response.status === 200) {
                message.success("Login Successfully!");
                localStorage.setItem("adminid", response.data.adminid);
                navigate("./admindashboard");
            }
        } catch (error) {
            message.error(error.response?.data?.msg || "Login failed. Please try again.");
        } finally {
            setLoading(false); // Reset loading state
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#f0f4f8" }}>
            <div className="card col-12 col-lg-4 p-4 shadow rounded bg-white">
                <h2 className="text-center mb-4">Admin Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={adminuser}
                            onChange={(e) => setAdminUser (e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={adminpassword}
                            onChange={(e) => setAdminPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                        {loading ? "Logging in..." : "Submit"}
                    </Button>
                </Form>
               
            </div>
        </div>
    );
}

export default AdminLogin;