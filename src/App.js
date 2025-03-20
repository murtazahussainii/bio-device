import React from 'react';
import logo from './logo.svg';
import './App.css';
import UploadImage from './UploadImage'

function App() {
  return (
    <div className="App">

      {/* Add Image Upload Component */}
      <div style={{ marginTop: '20px' }}>
        <h2>Upload an Image</h2>
        <UploadImage />
      </div>
    </div>
  );
}

export default App;
