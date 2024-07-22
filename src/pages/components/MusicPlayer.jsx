import React, { useState } from 'react';

const MusicPlayer = () => {
  const [service, setService] = useState('spotify');

  const handleToggle = () => {
    setService((prevService) => (prevService === 'spotify' ? 'youtube' : 'spotify'));
  };

  return (
    <div className="music-player">
      <button onClick={handleToggle} className="toggle-button">
        Toggle to {service === 'spotify' ? 'YouTube' : 'Spotify'}
      </button>
      {service === 'spotify' ? (
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="Spotify Player"
        ></iframe>
      ) : (
        <iframe
          width="300"
          height="380"
          src="https://www.youtube.com/embed/videoseries?list=PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Player"
        ></iframe>
      )}
    </div>
  );
};

export default MusicPlayer;
