import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <About />
      </main>
      <Contact />
    </div>
  );
}

export default App;
