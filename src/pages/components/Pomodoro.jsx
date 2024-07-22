import React, { useState, useEffect } from 'react';

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
    <div className="widget bg-red-400 h-full rounded-md">
      <div className="flex items-center space-x-4 flex-col gap-10 w-full">
        <span className="text-lg text-white ">Pomodoro</span>
        <span className="text-2xl font-bold">{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</span>
        <button onClick={() => setIsRunning(!isRunning)} className="px-4 py-2 bg-white text-black rounded w-20">
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={() => setTimeLeft(25 * 60)} className="px-4 py-2 bg-red-500 text-white rounded w-20">Reset</button>
      </div>
    </div>
  );
};

export default Pomodoro;
