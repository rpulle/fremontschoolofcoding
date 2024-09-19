import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header' style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div className="navbar bg-base-100 text-zinc-50" style={{
        backgroundColor: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px',
        padding: '0 1rem'
      }}>
        <ScrollLink
          className="btn btn-ghost text-xl"
          to="home-section"
          smooth={true}
          duration={500}
        >
          {/* Logo or Title Here */}
        </ScrollLink>

        <div className="flex-none lg:hidden">
          <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className={`hidden lg:flex lg:flex-none ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <ul className="menu menu-horizontal px-1" style={{ display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
            <li>
              <ScrollLink to="home-section" smooth={true} duration={500}>
                <RouterLink to="/">Home</RouterLink>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="startclub-section" smooth={true} duration={500}>
                <RouterLink to="/">Start a Club</RouterLink>
              </ScrollLink>
            </li>
            <li>
              <RouterLink to="/our-team">Our Team</RouterLink>
            </li>
            <li>
              <RouterLink to="/" onClick={() => setTimeout(() => {
                document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
              }, 0)}>
                Contact
              </RouterLink>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <ul className="menu menu-vertical px-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: 0, padding: 0 }}>
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
                <RouterLink to="/our-team">Our Team</RouterLink>
              </li>
              <li>
                <RouterLink to="/" onClick={() => setTimeout(() => {
                  document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
                }, 0)}>
                  Contact
                </RouterLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
