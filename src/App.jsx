import React from 'react';
import './index.css';
import Home from './components/HomeInfo'
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ourteam from './components/Ourteam';
import Aboutus from './components/Aboutus';
import Contact from './components/contact';
import Startclub from './components/Startclub';
import Donate from './components/Donate';
import Footer from './components/Footer';
function App() {
  // const [count, setCount] = useState(0)
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/ourteam" element={<Ourteam />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/startclub" element={<Startclub/>} />
        <Route path="/donate" element={<Donate/>} />

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
