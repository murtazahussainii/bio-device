import React, { useState } from 'react';

function UploadImage() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    if (e.target.files.length > 0) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" style={{ marginTop: '10px', maxWidth: '300px' }} />}
    </div>
  );
}

export default UploadImage;
