import React from 'react';

const GoogleSpreadsheet = () => {
  const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1v.../pubhtml';
  return (
    <div className="widget">
      <h3 className="text-xl font-semibold mb-2">Google Spreadsheet</h3>
      <iframe src={sheetUrl} frameBorder="0" className="w-full h-96"></iframe>
    </div>
  );
};

export default GoogleSpreadsheet;
