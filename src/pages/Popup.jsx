import React, { useState, useEffect } from 'react';
import GoogleSlides from './components/GoogleSlides';
import Pomodoro from './components/Pomodoro';


export default function() {
  return(
    <div className='mx-10'>
    <p className='text-center text-7xl text-white'>Digital Notice Board</p>
    <div class="container mt-10 ">
  <div class="Google-slides rounded-md"><GoogleSlides/></div>
  <div class="Pomodoro rounded-md"><Pomodoro/></div>
  <div class="Spreadsheet"></div>
  <div class="Forma"></div>
  <div class="Quote"></div>
  <div class="Poll"></div>
  <div class="Steps"></div>
  <div class="Google-Calender"></div>
  <div class="gOOGLE-MEET"></div>
</div>
</div>
  )
}



