import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TechCanvas from './components/TechCanvas';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import OpenSource from './components/OpenSource';
import Blogs from './components/Blogs';
import Creative from './components/Creative';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function MainPortfolio() {
  const location = useLocation();

  useEffect(() => {
    // If route is /about, /skills, etc. or has hash, scroll smoothly to section
    const path = location.pathname.replace('/', '');
    const hash = location.hash.replace('#', '');
    const targetId = hash || path;

    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Home />
      <About />
      <Skills />
      <Education />
      <Certificates />
      <Projects />
      <Leadership />
      <OpenSource />
      <Blogs />
      <Creative />
      <Community />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        {/* Floating background canvas */}
        <TechCanvas />

        <Navbar />

        <main id="main-content" role="main">
          <Routes>
            <Route path="/*" element={<MainPortfolio />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;