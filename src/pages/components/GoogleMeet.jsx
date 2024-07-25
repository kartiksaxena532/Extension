import React from 'react';

const GoogleMeetWidget = ({ meetLink, handleInputChange, joinMeeting, error }) => {
  return (
    <div className="w-72 bg-white gap-2 pt-2 px-3 shadow-md rounded-lg flex flex-row justify-between items-center">
      <input
        type="text"
        placeholder="Google Meet Link"
        value={meetLink}
        onChange={handleInputChange}
        className={`w-full p-2 border ${error ? 'border-red-500' : 'border-gray-500'} rounded mb-2`}
      />
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <button
        onClick={joinMeeting}
        className="w-1/2 mb-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-semibold text-xs"
      >
        Join Meet
      </button>
    </div>
  );
};

export default GoogleMeetWidget;
