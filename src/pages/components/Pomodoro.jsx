import React, { useState, useEffect } from 'react';
import Pomo from '/images/pomodoro.png';

const Pomodoro = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev > 0) return prev - 1;
          clearInterval(timer);
          return 0;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="widget bg-red-400 h-full rounded-xl">
      <div className="flex items-center space-x-4 flex-col gap-5 w-full">
        <span className="text-3xl font-extrabold mt-5 flex gap-2 text-white space-grotesk "><img src={Pomo} alt="Pomodoro" className="w-8 h-8 mb-3" />Pomodoro</span>
        <span className="text-7xl font-extrabold text-white mt-2">{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</span>
        <button onClick={() => setIsRunning(!isRunning)} className="px-4 py-1 text-bold text-xl bg-white text-black rounded w-60 h-10 ring-1 ring-black">
          {isRunning ? 'STOP' : 'START'}
        </button>
        <button onClick={() => setTimeLeft(25 * 60)} className="px-4 py-1 text-bold text-xl bg-red-600 text-white rounded w-60 h-10 ring-1 ring-gray-400 ">RESET</button>
      </div>
    </div>
  );
};

export default Pomodoro;
