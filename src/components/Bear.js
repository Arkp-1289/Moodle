import React, { useEffect, useState } from 'react';
import bearImage from './bearImg.jpg';

function Bear() {
  const [isSaluting, setIsSaluting] = useState(false);

  useEffect(() => {
    setIsSaluting(true);
    setTimeout(() => setIsSaluting(false), 1000); // salute animation lasts 1 second
  }, []);

  return (
    <div className="bear-container">
      <img
        className={`bear-image ${isSaluting ? 'salute' : ''}`}
        src={bearImage}
        alt="Bear saluting"
      />
          
      <h1 >Welcome buddy ❤</h1>
    </div>
  );
}

export default Bear;
