import React, { useState } from 'react';
import Startclub from './Startclub';

const HomeInfo = () => {
  const [textColor, setTextColor] = useState('#0aefff');

  return (
    <div id="home-section" className='pb-11'>
      <h1
        className='text-center pt-20 font-bold text-7xl opacity-95 text-slate-50'
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {'</ Fremont School of Coding >'}
      </h1>
      <div className='text-center pt-10 font-bold text-slate-50 text-3xl' style={{ fontSize: '2em', color: textColor }}>
        {/* Removed TypeAnimation and replaced with static text */}
        <span style={{ display: 'inline-block', fontSize: '2em' }}>
          We Code .. We Learn .. We Innovate .. We Create ..
        </span>
      </div>
      <p className='text-center pt-10 pb-5 text-white text-xl' style={{ maxWidth: '60%', margin: '0 auto' }}>
        The Fremont School of Coding is a dynamic educational institution that makes tech accessible by offering free coding and software development training for students.
      </p>
    </div>
  );
};

export default HomeInfo;
