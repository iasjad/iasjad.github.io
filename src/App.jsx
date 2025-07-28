// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Publications from './components/publications';
function App() {
  return (
    <div className="bg-brand-dark">
      <Navbar />
      <main className="container mx-auto px-6 md:px-12">
        <Hero />
        <About />
        <Projects />
        <Publications />
        <Experience />
      </main>
      <Contact />
    </div>
  );
}

export default App;
