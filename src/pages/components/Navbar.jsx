import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#22333B] px-12 pt-4 flex justify-between">
    <div className='flex py-1 text-5xl font-bold text-white mx-6 '>
        Digital Notice Board
    </div>
    <div className='flex gap-5'>
      <a href='https://chromewebstore.google.com/category/extensions?utm_source=ext_sidebar&hl=en-US' target='_blank'>
    <button className='text-gray-300 font-semibold text-[15px] py-3 text-bold ring-2 ring-yellow-400 rounded-full px-6  hover:bg-yellow-200 hover:text-black'>
        Explore
    </button>
    </a>
    <a href='#'>
    <button className='text-gray-300  font-semibold text-[15px] text-bold ring-2 py-3  ring-yellow-400 rounded-full px-6 hover:bg-yellow-200 hover:text-black'>
        Sign-in
    </button>
    </a>
   
    </div>
    </nav>
  );
};

export default Navbar;
