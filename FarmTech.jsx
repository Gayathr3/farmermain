import React, { useState } from "react";
import "./FarmTech.css";

const FarmTech = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    cropName: "",
    cropImage: "",
    fieldingTechniques: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormData({ todaysProducttecniques: false, name: "",  image: null });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, cropImage: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setShowForm(false);
  };

  return (
    <div className="farmtech-container">
      <h1 className="farmtech-heading">Farm Techniques</h1>
      <div className="button-group">
        <button onClick={() => setShowForm(true)}>Add Technique</button>
        <button>View Techniques</button>
        <button>Edit Techniques</button>
      </div>

      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <h2>Add Crop Technique</h2>
            <form onSubmit={handleSubmit}>
              <label>Crop Name:</label>
              <input
                type="text"
                name="cropName"
                value={formData.cropName}
                onChange={handleInputChange}
                required
              />

              <label>Crop Image:</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} />
              {formData.cropImage && (
                <img src={formData.cropImage} alt="Crop Preview" className="preview-image" />
              )}

              <label>Fielding Techniques:</label>
              <textarea
                name="fieldingTechniques"
                rows="4"
                value={formData.fieldingTechniques}
                onChange={handleInputChange}
                required
              ></textarea>

              <div className="form-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmTech;
