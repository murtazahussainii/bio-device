import React, { useState } from 'react';
import UploadImage from './UploadImage';
import './App.css';

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProcess = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setShowResults(true);
      setIsProcessing(false);
    }, 2000); // Simulate loading
  };

  return (
    <div className="App">
      {!showResults ? (
        <div className="upload-container">
          <h2>🧑‍⚕️ Hydration Analysis</h2>
          <p>Upload an image from your device sensor to check your hydration status.</p>
          <UploadImage onUpload={setUploadedImage} />
          {uploadedImage && (
            <button className="process-btn" onClick={handleProcess}>
              {isProcessing ? "Processing..." : "Analyze Results"}
            </button>
          )}
        </div>
      ) : (
        <div className="results-container">
          <h2>🔬 Analysis Result</h2>
          <img src={uploadedImage} alt="Processed" className="result-image" />
          <p className="status-text"><strong>Status:</strong> ⚠️ Mild Dehydration Detected</p>
          <p>💡 Drink at least **2 glasses of water** to rehydrate.</p>
          <button className="back-btn" onClick={() => setShowResults(false)}>
            🔄 Upload Another Image
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
