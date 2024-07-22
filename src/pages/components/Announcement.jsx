import React from 'react';

const Announcements = () => {
  return (
    <div className="widget">
      <h3 className="text-2xl font-bold mb-2">Announcements</h3>
      <marquee behavior="scroll" direction="left" className="block p-2 bg-yellow-200 border capitalize border-gray-400 rounded-full text-black font-bold text-xl ">
        This is a scrolling announcement text.
      </marquee>
    </div>
  );
};

export default Announcements;
