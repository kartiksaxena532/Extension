import React, { useState } from 'react';
import Youtube from '/images/Youtube.png'
import Spotify from '/images/Spotify.png'

const MusicPlayer = () => {
  const [service, setService] = useState('spotify');

  const handleToggle = () => {
    setService((prevService) => (prevService === 'spotify' ? 'youtube' : 'spotify'));
  };

  return (
    <div className="music-player">
      <button onClick={handleToggle} className="text-white text-bold rounded-lg ">
      {service === 'spotify' ? <button className="rounded-md bg-white ring-4 ring-white h-10 w-28 text-center mb-10 px-2 flex"><img className='ml-3 w-26 h-10' src={Youtube} alt="chatgpt"/></button>: <div className=" absolute rounded-md bg-white ring-4 ring-white h-10 w-28 flex"><img className='ml-3 h-26 ' src={Spotify} alt="chatgpt"/></div>}
      </button>
      {service === 'spotify' ? (
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
          width="445"
          height="350"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="Spotify Player"
        ></iframe>
      ) : (
        <iframe width="445" height="260" src="https://www.youtube.com/embed/6bvqH0t7j2Y?si=3bJ05nRFsLTXVb_W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      )}
    </div>
  );
};

export default MusicPlayer;
