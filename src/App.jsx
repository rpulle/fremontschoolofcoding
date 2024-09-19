import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/HomeInfo';
import Aboutus from './components/Aboutus';
import Ourteam from './components/Ourteam';
import Contact from './components/Contact';
import Startclub from './components/Startclub';
import Donate from './components/Donate';
import Footer from './components/Footer';
function App() {
  return (
    <Router> {/* Ensure the Router wraps the entire app */}
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow px-4 sm:px-6 lg:px-8">
          {/* Section-based rendering */}
          <Home />
          <Startclub />
          <Contact />
          <Donate />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
