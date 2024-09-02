import React from 'react';
import { Link } from 'react-router-dom';
import Fsc from '../assets/fsc.png'
const Navbar = () => {
  return (
    <header className='header'>
      <div className="navbar bg-base-100 text-white" style={{ backgroundColor: '#273c60' }}>
        <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to="/">
        <img src={Fsc} alt="FSC" className="inline-block" style={{ height: '40px', width: 'auto' }} /> {/* Use the imported variable */}
        </Link>
        </div>
        <div className="flex-none lg:hidden">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-none">
          <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
            <li>
              <details>
                <summary>Get Involved</summary>
                <ul className="bg-base-100 rounded-t-none p-2" style={{ backgroundColor: '#273c60' }}>
                  <li><Link to ='/startclub'>Start a Club</Link></li>
                  <li><Link to ='/donate'>Donate</Link></li>
                </ul>
              </details>
            </li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/ourteam">Our Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
