import React, { useState } from 'react';

const Registerf = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        govtid: null,
        licence: null,
        farmerId: '',
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
        alert('Farmer registration submitted!');
    };

    return (
        <div className="container" style={styles.container}>
            <h2 style={styles.header}>Farmer Registration</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div className="form-group" style={styles.formGroup}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div className="form-group" style={styles.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div className="form-group" style={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div className="form-group" style={styles.formGroup}>
                    <label htmlFor="govtid">Government ID (PNG):</label>
                    <input
                        type="file"
                        id="govtid"
                        name="govtid"
                        accept=".png"
                        onChange={handleFileChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div className="form-group" style={styles.formGroup}>
                    <label htmlFor="licence">License (PNG):</label>
                    <input
                        type="file"
                        id="licence"
                        name="licence"
                        accept=".png"
                        onChange={handleFileChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div className="form-group" style={styles.formGroup}>
                    <label htmlFor="farmerId">Farmer Identification Number:</label>
                    <input
                        type="text"
                        id="farmerId"
                        name="farmerId"
                        value={formData.farmerId}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div className="form-group" style={styles.formGroup}>
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        style={styles.textarea}
                    />
                </div>
                <div className="form-group" style={styles.formGroup}>
                    <label htmlFor="contact">Contact Number:</label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.submitButton}>Submit</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
    },
    header: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    form: {
        width: '400px',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontSize: '14px',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
        height: '80px',
    },
    submitButton: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
    }
};

export default Registerf;
