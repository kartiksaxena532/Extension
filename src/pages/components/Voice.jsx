import React, { useState } from 'react';
import { FaMicrophone } from "react-icons/fa";


function Voice() {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState(null);

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('Browser does not support Speech Recognition');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      setError(null);
    };

    recognition.onerror = (event) => {
      setError(event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      window.open(`https://www.google.com/search?q=${transcript}`, '_blank');
    };

    recognition.start();
  };

  return (
    <div className="ml-20 flex items-center justify-center w-[12rem] ">
      <button
        onClick={startListening}
        className={` font-semibold flex py-2 px-6 border-2 rounded-full gap-1 text-black ${isListening ? 'bg-red-500' : 'bg-[#ffffff]'} hover:bg-opacity-80`}
      ><FaMicrophone size={15}/>
        {isListening ? 'Listening...' : 'Start Voice Search'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default Voice;