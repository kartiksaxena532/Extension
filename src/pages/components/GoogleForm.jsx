import React from 'react';

const GoogleForm = () => {
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf.../viewform';
  return (
    <div className="widget">
      <iframe src={formUrl} frameBorder="0" className="w-full h-96 rounded-md"></iframe>
    </div>
  );
};

export default GoogleForm;
