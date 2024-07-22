import React from 'react';

const GoogleForm = () => {
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf.../viewform';
  return (
    <div className="widget">
      <h3 className="text-xl font-semibold mb-2">Google Form</h3>
      <iframe src={formUrl} frameBorder="0" className="w-full h-96"></iframe>
    </div>
  );
};

export default GoogleForm;
