import React from 'react';

const Startclub = () => {
  return (
    <div className='pb-10 pl-10'>
      <h1
        className='text-left pt-10 font-bold text-3xl'
        style={{ fontFamily: 'Poppins, sans-serif', color: '#273c60' }}
      >
        {'</ START A CLUB >'}
      </h1>
      <div className="flex justify-between text-xl items-center pt-3 pb-10 pr-60">
        <p className="font-nanum pl-3">
          Bring a free coding club to your community.<br /><br />
          FSC provides all required materials and training.<br />
          6 months of coding experience required.
        </p>
        <button className="btn btn-neutral bg-[#273c60]" style={{fontFamily:'Poppins, sans-serif'}}>APPLY HERE!</button>
      </div>
      <div className="bg-[#506485] rounded-3xl w-[750px] h-[250px] pt-3 pl-3">
        <h1
          className='text-left font-bold text-xl text-white'
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {'</ PROVIDED MATERIALS >'}
        </h1>
        <p>
          Curriculm <br />
          Mentorship <br />
          Professional Community
        </p>
      </div>
    </div>
  );
};

export default Startclub;
