import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/HomeInfo';
// import Aboutus from './components/Aboutus';
import Ourteam from './components/Ourteam';
import Contact from './components/Contact';
import Startclub from './components/Startclub';
// import Donate from './components/Donate';
import Footer from './components/Footer';
// import BubbleBackground from './components/Bubblebackground';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow px-4 sm:px-6 lg:px-8">
          <Routes>
            {/* Main scrolling page */}
            <Route path="/" element={
              <>
                <Home />
                <Startclub />
                <Contact />
              </>
            } />
            {/* Separate pages for About Us and Our Team */}
            {/* <Route path="/about-us" element={<Aboutus />} /> */}
            <Route path="/our-team" element={<Ourteam />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
