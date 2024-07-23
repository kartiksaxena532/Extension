import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#22333B] p-4 flex justify-between">
    <div className='flex py-2 text-3xl text-extrabold text-white mx-6 '>
        Digital Notice Board
    </div>
    <div className='flex gap-5'>
    <button className='text-white text-md text-bold ring-2 ring-yellow-400 rounded-full px-6  hover:bg-yellow-200 hover:text-black'>
        Explore
    </button>
    <button className='text-white text-md text-bold ring-2 ring-yellow-400 rounded-full px-6 hover:bg-yellow-200 hover:text-black'>
        Sign-in
    </button>
   
    </div>
    </nav>
  );
};

export default Navbar;
