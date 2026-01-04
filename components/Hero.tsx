
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden bg-stone-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-24 -left-24 w-[400px] h-[400px] bg-red-100/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-px bg-gradient-main"></div>
            <div className="text-stone-900 text-sm font-bold tracking-[0.1em]">資深平面視覺設計 <span className="text-orange-500 ml-1">•</span></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-stone-900 leading-[1.1] tracking-tighter mb-12 uppercase">
            Design that <span className="text-gradient inline-block pb-6 pr-8 -mr-8">Breathes</span>.<br />
            Visuals that <span className="relative">Speak<span className="absolute -bottom-2 right-0 w-4 h-4 bg-orange-500/20 rounded-full -z-10 animate-pulse"></span></span>.
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start md:items-end">
            <div>
              <p className="text-lg md:text-xl text-stone-500 font-light leading-relaxed max-w-lg border-l-2 border-orange-200 pl-6">
                Hi, I'm Alba Huang. I specialize in clean, effective visual communication. 
                My goal is to create designs that aren't just seen, but <span className="text-stone-900 font-medium italic underline decoration-orange-500 decoration-2 underline-offset-4">felt and understood</span> effortlessly.
              </p>
            </div>
            
            <div className="flex flex-col gap-6 lg:items-end">
              <div className="inline-block px-4 py-1.5 border border-stone-200 text-stone-400 text-[10px] font-bold tracking-[0.2em] uppercase">
                黃彥寧 • ALBA.H
              </div>
              <div className="h-px w-full lg:w-48 bg-stone-200"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex items-center gap-6 bg-stone-50/50 backdrop-blur-sm md:bg-transparent p-2 md:p-0">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-gradient-main"></div>
          <div className="w-2 h-2 rounded-full bg-orange-400"></div>
          <div className="w-2 h-2 rounded-full bg-stone-200"></div>
        </div>
        <span className="text-[10px] font-bold text-stone-400 tracking-widest uppercase">Senior Visual Designer</span>
      </div>
    </section>
  );
};

export default Hero;