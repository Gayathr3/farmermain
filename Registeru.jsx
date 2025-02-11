import React, { useState } from 'react';
import "./Registeru.css";

const Registeru = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        govtid: null,  // Changed the variable to govtid only, assuming it's the Adhar ID
        licence: null,
        address: '',
        contact: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        alert('User registration submitted!');
    };

    return (
        <div className="container">
            <h2>User Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="govtid">Government ID (PNG):</label>
                    <input
                        type="file"
                        id="govtid"
                        name="govtid"
                        accept=".png"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="licence">License (PNG):</label>
                    <input
                        type="file"
                        id="licence"
                        name="licence"
                        accept=".png"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Contact Number:</label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default Registeru;
