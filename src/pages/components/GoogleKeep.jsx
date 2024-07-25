import React from 'react';

const GoogleKeep = () => {
  return (
    <div className="google-keep-container bg-white rounded-xl">
      <iframe
        src="https://quicknote.io/"
        title="Notes"
        style={{ width: '445px', height: '500px', border: 'none'}}
        
      ></iframe>
    </div>
  );
};

export default GoogleKeep;
