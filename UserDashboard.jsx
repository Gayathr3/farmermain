import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";

const UserDashboard = () => {
    const navigate = useNavigate();

    const dashboardOptions = [
        { label: "View Your Profile", path: "/Registeru" },
        { label: "View Orders", path: "/orders" },
        { label: "View FarmTech", path: "/FarmTech" },
        { label: "Your Cart", path: "/cart" },
        { label: "Browse Products", path: "/products" }
    ];

    return (
        <div className="user-dashboard-container">
            <h2>Welcome, User</h2>
            <nav className="user-dashboard-buttons">
                {dashboardOptions.map((option, index) => (
                    <button key={index} onClick={() => navigate(option.path)}>
                        {option.label}
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default UserDashboard;
