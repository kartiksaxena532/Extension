import React, { useState } from 'react';

const MeetingWidget = () => {
  const [service, setService] = useState('google-meet');

  const handleToggle = () => {
    setService((prevService) => (prevService === 'google-meet' ? 'microsoft-teams' : 'google-meet'));
  };

  return (
    <div className="meeting-widget">
      <button onClick={handleToggle} className="toggle-button">
        Toggle to {service === 'google-meet' ? 'Microsoft Teams' : 'Google Meet'}
      </button>
      {service === 'google-meet' ? (
        <iframe
          src="https://meet.google.com/"
          title="Google Meet"
          style={{ width: '100%', height: '600px', border: 'none' }}
        ></iframe>
      ) : (
        <iframe
          src="https://teams.microsoft.com/"
          title="Microsoft Teams"
          style={{ width: '100%', height: '600px', border: 'none' }}
        ></iframe>
      )}
    </div>
  );
};

export default MeetingWidget;
