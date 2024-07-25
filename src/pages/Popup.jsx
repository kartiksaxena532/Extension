import React, { useState, useEffect } from 'react';
import GoogleSlides from './components/GoogleSlides';
import Pomodoro from './components/Pomodoro';
import Announcement from './components/Announcement';
import GoogleKeep from './components/GoogleKeep';
import GoogleSpreadsheet from './components/GoogleSpreadsheet';
import GoogleForm from './components/GoogleForm'
import Navbar from './components/Navbar';
import MusicPlayer from './components/MusicPlayer';
import Sidebar from './components/Sidebar';
import MeetingWidget from './components/MeetWidget';
import Calender from './components/GoogleCalender';
import Todo from './components/Todo'

export default function() {
  return(
    <div >
    <Sidebar/>
    <Navbar/>
    <div className='pl-20 mr-4 mt-6 h-screen '>
    <Announcement/>
<div className="grid grid-cols-3 gap-10 mt-4">
  <div className="rounded-xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 h-[300px]">
    <GoogleSlides />
  </div>
  <div className="rounded-xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 h-[300px]">
    <Pomodoro />
  </div>
  <div className="rounded-xl border-2 border-slate-400/10 dark:bg-gradient-to-r from-blue-200 to-green-200 h-[300px]">
    <MusicPlayer />
  </div>
  <div className="col-span-2 rounded-xl border-2 border-slate-400/10 bg-gradient-to-r from-blue-200 to-cyan-200 h-[500px]">
    <GoogleSpreadsheet />
  </div>
  <div className="rounded-xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 h-[500px]">
    <GoogleKeep />
  </div>
  <div className="rounded-xl border-2 border-slate-400/10 dark:bg-gradient-to-r from-blue-200 to-cyan-200 h-[605px]">
    <GoogleForm />
  </div>
  <div className="rounded-xl border-2 border-slate-400/10 dark:bg-gradient-to-r from-blue-200 to-cyan-200 h-[605px]">
    <Todo className="mt-4" />
  </div>
  <div className="rounded-xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 h-[300px]">
    <Calender />
  </div>
</div>


</div>
</div>

  )
}



