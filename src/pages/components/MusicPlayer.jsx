import React, { useState } from 'react';
import Youtube from '/images/Youtube.png'
import Spotify from '/images/Spotify.png'

const MusicPlayer = () => {
  const [service, setService] = useState('spotify');

  const handleToggle = () => {
    setService((prevService) => (prevService === 'spotify' ? 'youtube' : 'spotify'));
  };

  return (
    <div className="music-player flex-row">
      <button onClick={handleToggle} className="text-white text-bold rounded-lg ">
      {service === 'spotify' ? <img className='ml-2 mt-3 w-26 h-10 bg-white rounded-lg  px-6' src={Youtube} alt="chatgpt"/>:<img className='ml-2 absolute h-10 w-26 py-2 px-3 bg-white rounded-lg' src={Spotify} alt="chatgpt"/>}
      </button>
      {service === 'spotify' ? (
        <>
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
          width="455"
          height="350"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="Spotify Player"
        ></iframe>
        <p className='block'>Login To Your Spotify To Listen More</p>
        </>
      ) : (
        <iframe width="445" height="260" src="https://www.youtube.com/embed/6bvqH0t7j2Y?si=3bJ05nRFsLTXVb_W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      )}
    </div>
  );
};

export default MusicPlayer;
