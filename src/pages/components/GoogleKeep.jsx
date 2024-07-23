import React from 'react';

const GoogleKeep = () => {
  return (
    <div className="google-keep-container bg-white rounded-xl">
      <iframe
        src="https://quicknote.io/"
        title="Notes"
        style={{ width: '440px', height: '315px', border: 'none', overflow:'hidden'}}
      ></iframe>
    </div>
  );
};

export default GoogleKeep;
