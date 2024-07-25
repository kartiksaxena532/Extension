import React, { useState, useEffect, useRef } from 'react';
import Pomo from '/images/pomodoro.png';
import clickSound from '/sounds/click.mp3';  // Add the path to your click sound file
import alarmSound from '/sounds/alarm.mp3';  // Add the path to your alarm sound file

const Pomodoro = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [completionCount, setCompletionCount] = useState(0);
  
  const clickAudioRef = useRef(null);
  const alarmAudioRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev > 0) return prev - 1;
          clearInterval(timer);
          setCompletionCount(prevCount => prevCount + 1);
          if (alarmAudioRef.current) {
            alarmAudioRef.current.play();
          }
          return 0;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning]);

  const handleButtonClick = () => {
    setIsRunning(!isRunning);
    if (clickAudioRef.current) {
      clickAudioRef.current.play();
    }
  };

  const handleReset = () => {
    setTimeLeft(25 * 60);
    if (clickAudioRef.current) {
      clickAudioRef.current.play();
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="widget bg-red-400 rounded-xl">
      <div className="flex items-center space-x-4 flex-col gap-5 w-full">
        <span className="text-3xl font-extrabold mt-5 flex gap-2 text-white space-grotesk ">
          <img src={Pomo} alt="Pomodoro" className="w-8 h-8 mb-3" />Pomodoro
        </span>
        <span className="text-7xl font-extrabold text-white">{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</span>
        <button onClick={handleButtonClick} className="px-4 py-1 text-bold text-xl bg-white text-black rounded w-60 h-10 ring-1 ring-black">
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={handleReset} className="px-4 py-1 mb-4 text-bold text-xl bg-red-600 text-white rounded w-60 h-10 ring-1 ring-gray-400 ">
          Reset
        </button>
      </div>
      <audio ref={clickAudioRef} src={clickSound} />
      <audio ref={alarmAudioRef} src={alarmSound} />
    </div>
  );
};

export default Pomodoro;
