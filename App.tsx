
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Professional from './components/Professional';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const closeLinesModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="selection:bg-orange-100 selection:text-orange-900">
      <Header onContactClick={handleContactClick} />
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
              <div className="flex flex-col md:flex-row items-center gap-6">
                <a 
                  href="mailto:ceeceec168@gmail.com" 
                  className="text-lg md:text-2xl font-light text-stone-900 hover:text-orange-600 transition-colors border-b border-stone-200 pb-1"
                >
                  ceeceec168@gmail.com
                </a>
                <button 
                  onClick={handleContactClick}
                  className="text-lg md:text-2xl font-light text-stone-900 hover:text-orange-600 transition-colors border-b border-stone-200 pb-1"
                >
                  LINE Official
                </button>
              </div>
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

      {/* Floating Window (Modal) for LINE Contact */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-md transition-opacity duration-300"
            onClick={closeLinesModal}
          ></div>
          
          <div className="relative bg-white w-full max-w-sm shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="h-2 bg-gradient-main w-full"></div>
            <div className="p-8 pb-4 flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-gradient text-[10px] font-black tracking-[0.3em] uppercase">Contact Window</p>
                <h3 className="text-xl font-black text-stone-900 tracking-tight">LINE Official Account</h3>
              </div>
              <button 
                onClick={closeLinesModal}
                className="text-stone-300 hover:text-orange-500 hover:rotate-90 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 pt-4 space-y-8">
              <div className="aspect-square bg-stone-50 border border-stone-100 p-6 flex items-center justify-center relative group">
                 <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors pointer-events-none"></div>
                 <img 
                   src="https://qr-official.line.me/gs/M_327bgbyu_BW.png?oat_content=qr" 
                   alt="LINE QR Code" 
                   className="w-full h-full object-contain"
                 />
              </div>

              <div className="space-y-4">
                <p className="text-stone-500 text-xs font-light text-center leading-relaxed">
                  掃描上方 QR Code 或點擊下方按鈕<br />即可直接開啟 LINE 並與我聯繫
                </p>
                
                <a 
                  href="https://lin.ee/0Ntb6mu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-stone-900 text-white text-center py-4 text-[11px] font-bold tracking-[0.3em] hover:bg-gradient-main hover:-translate-y-0.5 active:scale-95 transition-all uppercase shadow-lg shadow-orange-500/10"
                >
                  OPEN LINE CHAT
                </a>
              </div>
            </div>

            {/* Modal Footer Decor */}
            <div className="px-8 pb-8 flex justify-center">
               <div className="flex gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-stone-200"></div>
                  <div className="w-1 h-1 rounded-full bg-stone-200"></div>
                  <div className="w-1 h-1 rounded-full bg-stone-200"></div>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
