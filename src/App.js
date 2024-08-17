import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/images')  // Request will be proxied to http://localhost:5000/api/images
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className="App">
      <h1>Images from Pexels</h1>
      <div className="image-grid">
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            style={{ width: '320px', height: '180px', objectFit: 'cover' }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
