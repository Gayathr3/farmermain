import React from "react";
import { useNavigate } from "react-router-dom";
import "./FarmerDashboard.css";

const FarmerDashboard = () => {
    const navigate = useNavigate();

    const dashboardOptions = [
        { label: "Add Product", path: "/ProductFarmer" },
        { label: "Manage Product", path: "/manage-products" },
        { label: "FarmTech", path: "/FarmTech" },
        { label: "Disease Detection", path: "/disease-detection" },
        { label: "view orders", path: "/view-orders" },
    ];

    return (
        <div className="dashboard-container">
            <h2>Welcome, Farmer</h2>
            <nav className="dashboard-buttons">
                {dashboardOptions.map((option, index) => (
                    <button key={index} onClick={() => navigate(option.path)}>
                        {option.label}
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default FarmerDashboard;
