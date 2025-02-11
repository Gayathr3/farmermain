import React, { useState } from "react";
import "./ProductFarmer.css";

const productData = [
    { name: "Vegetables", img: "https://media.istockphoto.com/id/895273074/photo/tomato-harvest-time.jpg?s=612x612&w=0&k=20&c=1IhGhS4J88UWOAjRW-ZyLawZl_--2Fk0gKR-NuYf5i0=" },
    { name: "Seeds", img: "https://m.media-amazon.com/images/I/71IIwDlHahL._AC_UF1000,1000_QL80_.jpg" },
    { name: "Fertilizers", img: "https://www.automatworld.in/blog/wp-content/uploads/2024/04/Cover-Banner-1.png" },
    { name: "Equipment", img: "https://i.ytimg.com/vi/PjVUs-UZj_M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCzo2hzEhTexIuqw7ocOz4I5-fR1g" }
];

const ProductFarmer = () => {
    const [openForm, setOpenForm] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [formData, setFormData] = useState({
        todaysProduct: false,
        name: "",
        quantity: "",
        price: "",
        image: null
    });

    const handleOpenForm = (category) => {
        setSelectedCategory(category);
        setOpenForm(true);
        setFormData({ todaysProduct: false, name: "", quantity: "", price: "", image: null });
    };

    const handleChange = (e) => {
        const { name, type, value, checked, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        setOpenForm(false);
    };

    return (
        <div className="product-container">

            <h1>Farmer Product Management</h1>
            
            {/* Product Grid */}
            <div className="product-grid">
                {productData.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={product.img} alt={`${product.name} category`} />
                        <h2>{product.name}</h2>
                        <button onClick={() => handleOpenForm(product.name)}>Add Product</button>
                        <button onClick={() => alert("View Products Page (To be implemented)")}>View Products</button>
                    </div>
                ))}
            </div>

            {/* Full-Screen Modal */}
            {openForm && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Add Product - {selectedCategory}</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                <input type="checkbox" name="todaysProduct" checked={formData.todaysProduct} onChange={handleChange} />
                                Add Today's Product
                            </label>
                            <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
                            <input type="number" name="quantity" placeholder="Product Quantity" value={formData.quantity} onChange={handleChange} required />
                            <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
                            <input type="file" name="image" accept="image/*" onChange={handleChange} required />

                            {/* Image Preview */}
                            {formData.image && (
                                <div className="image-preview">
                                    <img src={URL.createObjectURL(formData.image)} alt="Preview" />
                                </div>
                            )}

                            <button type="submit">Submit</button>
                            <button type="button" className="cancel-btn" onClick={() => setOpenForm(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductFarmer;
