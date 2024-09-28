import React from 'react';
import { useState, useEffect } from 'react';

const fetchQuote = async () => {
  const response = await fetch('https://quotes.rest/quote/random'); 
  const data = await response.json();
  return data.quote; 
};


const Announcements = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const getQuote = async () => {
      const newQuote = await fetchQuote();
      setQuote(newQuote);
    };
    getQuote();
  }, []);

  return (
    <div className="widget ">
      <div className='flex justify-between'>
      <h3 className="text-2xl pl-4 font-bold mb-2 text-white">Announcements</h3>
      
        </div>
      <marquee behavior="scroll" direction="left" className="block p-2 bg-gradient-to-r from-teal-400 to-yellow-200 border capitalize border-gray-400 rounded-2xl text-gray-600 font-bold text-xl ">
        The Company had a great progress in the 3rd quater 📈 .  Company would provide incentives 💵 this week .
      </marquee>
    </div>
  );
};

export default Announcements;
