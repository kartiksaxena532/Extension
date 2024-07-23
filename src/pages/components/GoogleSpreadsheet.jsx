import React from 'react';

const GoogleSpreadsheet = () => {
  const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSMDUI7HkG2cMY6PTiC-ZGINKEUnUlfBa7nrMCQ8HQJKJoFCNB-sq6IpkXRbBk-STyjWwn5lOpdX_qh/pubhtml';
  return (
    <div className="widget">
      <iframe src={sheetUrl} frameBorder="0" className="w-full h-80 rounded-lg"></iframe>
    </div>
  );
};

export default GoogleSpreadsheet;
