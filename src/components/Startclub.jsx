import React from 'react';
import Folder from '../assets/folder.png';

const Startclub = () => {
  return (
    <div id= "startclub-section" className='pb-10 px-4 sm:px-10 lg:px-20'>
      <h1 className='text-left pt-10 font-bold text-3xl text-zinc-50' style={{ fontFamily: 'Poppins, sans-serif'}}>
        {'</ START A CLUB >'}
      </h1>
      <div className="flex flex-col lg:flex-row justify-between text-xl items-center pt-3 pb-10">
        <p className="font-nanum pl-3 text-center lg:text-left text-gray-50">
          Bring a free coding club to your community.<br /><br />
          FSC provides all required materials and training.<br />
          6 months of coding experience required.
        </p>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-cyan-300 text-black mt-4 lg:mt-0">APPLY HERE</button>
      </div>
      <div className="bg-cyan-100 rounded-3xl w-full max-w-4xl mx-auto p-6">
        <h1 className='text-left font-bold text-2xl text-black' style={{ fontFamily: 'Poppins, sans-serif' }}>
          {'</ PROVIDED MATERIALS >'}
        </h1>
        <div className="flex flex-col lg:flex-row justify-around items-center pt-4">
          <div className="flex flex-col items-center mb-4 lg:mb-0">
            <img src={Folder} alt="Curriculum Icon" className="inline-block" style={{ height: '60px', width: 'auto' }} />
            <p className="text-black mt-2 font-nanum">Curriculum</p>
          </div>
          <div className="flex flex-col items-center mb-4 lg:mb-0">
            <img src={Folder} alt="Mentorship Icon" className="inline-block" style={{ height: '60px', width: 'auto' }} />
            <span className="text-black mt-2 font-nanum">Mentorship</span>
          </div>
          <div className="flex flex-col items-center mb-4 lg:mb-0">
            <img src={Folder} alt="Professional Community Icon" className="inline-block" style={{ height: '60px', width: 'auto' }} />
            <span className="text-black mt-2 font-nanum">Professional Community</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startclub;
