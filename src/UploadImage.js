import React, { useState } from 'react';

function UploadImage({ onUpload }) {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    let file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setImagePreview(fileURL);
      onUpload(fileURL);
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload an Image</h2>
      
      {/* Upload Button */}
      <label className="custom-file-upload">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        Upload Image
      </label>

      {/* Image Preview */}
      {imagePreview && <img src={imagePreview} alt="Uploaded Preview" className="preview" />}
    </div>
  );
}

export default UploadImage;
