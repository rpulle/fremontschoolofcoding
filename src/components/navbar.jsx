import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll for smooth scrolling
import Fsc from '../assets/fsc.png';

const Navbar = () => {
  return (
    <header className='header' style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div className="navbar bg-base-100 text-zinc-50" style={{
        backgroundColor: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px', /* Adjust the max width as needed */
        padding: '0 1rem' /* Optional: Adjust padding as needed */
      }}>
        <ScrollLink
          className="btn btn-ghost text-xl"
          to="home-section" // This targets the "home-section"
          smooth={true}
          duration={500}
        >
        </ScrollLink>

        <div className="flex-none lg:hidden">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-none">
          <ul className="menu menu-horizontal px-1" style={{ display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
            <li>
              <ScrollLink to="home-section" smooth={true} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="startclub-section" smooth={true} duration={500}>
                Start a Club
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about-section" smooth={true} duration={500}>
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="ourteam-section" smooth={true} duration={500}>
                Our Team
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact-section" smooth={true} duration={500}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
