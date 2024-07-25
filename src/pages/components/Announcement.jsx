import React from 'react';

const Announcements = () => {
  return (
    <div className="widget">
      <h3 className="text-2xl font-bold mb-2 text-white">Announcements</h3>
      <marquee behavior="scroll" direction="left" className="block p-2 bg-gradient-to-r from-teal-400 to-yellow-200 border capitalize border-gray-400 rounded-2xl text-gray-600 font-bold text-xl ">
        The Company had a great progress in the 3rd quater 📈 .  Company would provide incentives 💵 this week .
      </marquee>
    </div>
  );
};

export default Announcements;
