import React, { useState } from "react";
import FarmerDashboard from "./FarmerDashboard"; // Import the dashboard component

const FarmerLogin = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.username === "farmer" && credentials.password === "farmer") {
            setIsLoggedIn(true);
            setError(""); // Clear error if login is successful
        } else {
            setError("Invalid username or password!");
        }
    };

    if (isLoggedIn) {
        return <FarmerDashboard />;
    }

    return (
        <div className="login-container">
            <h2>Farmer Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default FarmerLogin;
