
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Professional from './components/Professional';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';

const App: React.FC = () => {
  return (
    <div className="selection:bg-orange-100 selection:text-orange-900">
      <Header />
      <main>
        <Hero />
        <Professional />
        <Experience />
        <Portfolio />
      </main>
      
      <footer className="bg-stone-50 border-t border-stone-200 py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <p className="text-gradient text-xs font-black tracking-[0.4em] uppercase">Let's talk</p>
              <h2 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight">
                Let's create something <span className="text-gradient">meaningful.</span>
              </h2>
            </div>
            
            <div className="flex flex-col items-center space-y-4 pt-8">
              <span className="text-stone-400 text-[10px] font-bold tracking-[0.3em] uppercase">請聯繫我 / Get in touch</span>
              <a 
                href="mailto:ceeceec168@gmail.com" 
                className="text-lg md:text-2xl font-light text-stone-900 hover:text-orange-600 transition-colors border-b border-stone-200 pb-1"
              >
                ceeceec168@gmail.com
              </a>
              <p className="text-stone-400 text-[9px] font-bold uppercase tracking-[0.4em] pt-4">Based in Taipei, Taiwan</p>
            </div>

            <div className="pt-24 border-t border-stone-200 flex flex-col items-center gap-4">
              <div className="text-xl font-black tracking-tighter text-stone-900">
                ALBA<span className="text-gradient">.H</span>
              </div>
              <p className="text-[9px] font-bold text-stone-300 tracking-[0.4em] uppercase">
                © {new Date().getFullYear()} Alba Huang Design. Crafted with Precision.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;