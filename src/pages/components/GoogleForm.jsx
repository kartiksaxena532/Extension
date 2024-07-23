import React from 'react';

const GoogleForm = () => {
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScsb77xrajnSqmYOIK7ajYFp0vDdOeEz-nGV_ppQducoJeJog/viewform?embedded=true';
  return (
    <div className="widget">
      <iframe src={formUrl} frameBorder="0" className="w-full h-[600px] rounded-md"></iframe>
    </div>
  );
};

export default GoogleForm;
