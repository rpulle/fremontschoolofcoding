import React from 'react';
import Circle from '../assets/cirlce.png';

const teamMembers = [
  { name: 'Rohit Pulle', role: 'Founder/President' },
];

const Ourteam = () => {
  return (
    <div className="flex flex-col items-center pt-10">
      <h1
        className="text-center font-bold text-4xl"
        style={{ fontFamily: 'Poppins, sans-serif', color: '#273c60' }}
      >
        {'</ MEET OUR TEAM >'}
      </h1>
      <div className="grid grid-cols-2 gap-3 mt-10 pb-5 font-nanum">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={Circle}
              alt={member.name}
              className="h-40 w-40 object-cover mb-2"
            />
            <div className="text-center">
              <h2 className="text-lg font-semibold">{member.name}</h2>
              <p className="text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourteam;
