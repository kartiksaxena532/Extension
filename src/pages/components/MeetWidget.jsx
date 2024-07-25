import React, { useState } from 'react';

const MeetingWidget = () => {

  return (
    <div className="rounded-md">
        <iframe
          src="https://calendly.com/kartuserstudy532/30min"
          title="Google Meet"
          style={{ width: '450px', height: '600px', border: 'none' }}
          className="rounded-md"
        ></iframe>
    </div>
  );
};

export default MeetingWidget;
