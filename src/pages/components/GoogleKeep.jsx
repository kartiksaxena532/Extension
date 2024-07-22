import React from 'react';

const GoogleKeep = () => {
  return (
    <div className="google-keep-container">
      <iframe
        src="https://keep.google.com/"
        title="Google Keep"
        style={{ width: '100%', height: '600px', border: 'none' }}
      ></iframe>
    </div>
  );
};

export default GoogleKeep;
