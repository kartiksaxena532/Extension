import React, { useState } from 'react';

const MusicPlayer = () => {
  const [service, setService] = useState('spotify');

  const handleToggle = () => {
    setService((prevService) => (prevService === 'spotify' ? 'youtube' : 'spotify'));
  };

  return (
    <div className="music-player">
      <button onClick={handleToggle} className="text-white text-bold rounded-lg ">
      {service === 'spotify' ? <button className="rounded-md bg-red-600 ring-4 ring-white h-10 w-32  text-center mb-10 py-3 px-9 flex">Youtube</button>: <div className=" -mt-3 absolute rounded-md bg-green-400 ring-4  w-32 ring-white h-10 py-3">Spotify</div>}
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
