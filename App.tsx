import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import About from './components/About';
import Pricing from './components/Pricing';

const App: React.FC = () => {
  return (
    <div className="bg-dark-bg min-h-screen text-slate-200 selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>
      <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Muhammad Awais | ManimMotion. All rights reserved.
        </p>
      </footer>
      <ChatBot />
    </div>
  );
};

export default App;