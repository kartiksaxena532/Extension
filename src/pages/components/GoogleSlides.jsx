import React from 'react';

const GoogleSlide = () => {
  const slideUrl = 'https://docs.google.com/presentation/d/e/2PACX-1v.../embed';
  return (
    <div className="widget">
      
      <iframe src={slideUrl} className="w-full h-96 rounded-md overflow-hidden"></iframe>
    </div>
  );
};

export default GoogleSlide;
