import React, { useState, useEffect } from 'react';
import GoogleSlides from './components/GoogleSlides';
import Pomodoro from './components/Pomodoro';
import Announcement from './components/Announcement';
import GoogleKeep from './components/GoogleKeep';
import GoogleSpreadsheet from './components/GoogleSpreadsheet';
import GoogleForm from './components/GoogleForm'
import Navbar from './components/Navbar';
import MusicPlayer from './components/MusicPlayer';
export default function() {
  return(
    <>
    <Navbar/>
    <div className='mx-10 mt-6 h-screen '>
   
    <Announcement/>
    <div className="grid auto-rows-[300px] grid-cols-3 gap-10 mt-4">
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 ${
           ( i === 3 || i === 6) ? "col-span-2 h-80 " : ""
          }  `}
        >
          {i === 0 && <GoogleSlides />}
          {i === 1 && <Pomodoro />}
          {i === 3 && <GoogleSpreadsheet />}
          {i === 4 && <GoogleKeep />}
          {i === 5 && <GoogleForm />}
          {i === 2 && <MusicPlayer/>}
          {i === 6 && <GoogleSpreadsheet />}
        </div>
      ))}
    </div>
</div>
</>
  )
}



