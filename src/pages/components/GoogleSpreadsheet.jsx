import React from 'react';

const GoogleSpreadsheet = () => {
  const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1v.../pubhtml';
  return (
    <div className="widget">
      <iframe src={sheetUrl} frameBorder="0" className="w-full h-80 rounded-lg"></iframe>
    </div>
  );
};

export default GoogleSpreadsheet;
