
import React, { useEffect, useState, useRef } from 'react';
import { SKILLS } from '../constants';

const BarChart: React.FC = () => {
  return (
    <div className="w-full space-y-6 py-8">
      {SKILLS.map((skill, i) => (
        <div key={i} className="space-y-2">
          <div className="flex justify-between items-end">
            <span className="text-[12.25px] font-bold text-stone-700 tracking-wider uppercase">{skill.name}</span>
            <span className="text-[10px] font-medium text-stone-400">{skill.percentage}%</span>
          </div>
          <div className="h-1 w-full bg-stone-100 overflow-hidden">
            <div 
              className="h-full bg-gradient-main transition-all duration-1000 ease-out relative"
              style={{ width: `${skill.percentage}%` }}
            >
               <div className="absolute right-0 top-0 w-1 h-full bg-amber-400"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const RadarChart: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDesktop = windowWidth >= 1024;
  const size = 600; 
  const center = size / 2;
  const radius = size * 0.3;
  const levels = 5;
  const data = SKILLS;
  const angleStep = (Math.PI * 2) / data.length;

  const gridLevels = Array.from({ length: levels }, (_, i) => (radius / levels) * (i + 1));

  // Points for the animated skill area
  const points = data.map((skill, i) => {
    const factor = isVisible ? (skill.percentage / 100) : 0.02;
    const r = factor * radius;
    const x = center + r * Math.cos(i * angleStep - Math.PI / 2);
    const y = center + r * Math.sin(i * angleStep - Math.PI / 2);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className={`relative w-full aspect-square max-w-[610px] flex items-center justify-center overflow-visible transition-all duration-[1200ms] cubic-bezier(0.34, 1.56, 0.64, 1) ${isVisible ? 'opacity-100 scale-100 rotate-0 lg:translate-y-4 lg:translate-x-16 md:translate-y-12 md:translate-x-4' : 'opacity-0 scale-75 -rotate-3 translate-y-24'}`}>
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="chartBorderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>

        {/* Background Grid Circles */}
        {gridLevels.map((r, i) => (
          <circle
            key={i}
            cx={center}
            cy={center}
            r={r}
            fill="none"
            stroke="#e7e5e4" 
            strokeWidth="0.5" 
            strokeDasharray={i === levels - 1 ? "0" : "4 4"}
            className={`transition-opacity duration-1000 delay-${i * 50} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}

        {/* Axis Lines */}
        {data.map((_, i) => {
          const x = center + radius * Math.cos(i * angleStep - Math.PI / 2);
          const y = center + radius * Math.sin(i * angleStep - Math.PI / 2);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="#e7e5e4"
              strokeWidth="0.5"
              className={`transition-opacity duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            />
          );
        })}

        {/* Data Area */}
        <polygon
          points={points}
          fill="rgba(251, 191, 36, 0.1)"
          stroke="url(#chartBorderGradient)" 
          strokeWidth="2.5"
          strokeLinejoin="round"
          className="transition-all duration-[1400ms] cubic-bezier(0.34, 1.56, 0.64, 1)"
        />

        {/* Center Point */}
        <circle cx={center} cy={center} r="4" fill="#fbbf24" className={`transition-transform duration-700 ${isVisible ? 'scale-100' : 'scale-0'}`} />

        {/* Labels */}
        {data.map((skill, i) => {
          // Responsive label distance: Desktop gets 65, Tablet/Smaller gets 55 (increased from 45)
          const labelRadius = radius + (isDesktop ? 65 : 55); 
          const x = center + labelRadius * Math.cos(i * angleStep - Math.PI / 2);
          const y = center + labelRadius * Math.sin(i * angleStep - Math.PI / 2);
          
          let anchor: "start" | "middle" | "end" = "middle";
          if (x > center + 40) anchor = "start";
          else if (x < center - 40) anchor = "end";

          return (
            <text
              key={i}
              x={x}
              y={y}
              fontSize="14"
              fontWeight="800"
              fill="#57534e"
              textAnchor={anchor}
              style={{ transitionDelay: isVisible ? `${400 + (i * 40)}ms` : '0ms' }}
              className={`tracking-widest uppercase select-none transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <tspan x={x} dy="0.3em">{skill.name}</tspan>
              <tspan x={x} dy="1.7em" fontSize="9" fill="#a8a29e" fontWeight="400">
                {skill.percentage}%
              </tspan>
            </text>
          );
        })}
      </svg>
    </div>
  );
};

const Professional: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.15 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="professional" ref={sectionRef} className="py-24 md:py-48 bg-white border-y border-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 space-y-10 md:space-y-12 order-1 lg:order-1 relative z-10">
            <div className="space-y-4 md:space-y-6">
              <p className="text-gradient inline-block text-xs font-black tracking-[0.5em] uppercase">My Expertise</p>
              <h2 className="text-5xl md:text-7xl font-black text-stone-900 tracking-tighter leading-tight md:leading-none uppercase">
                Professional <br /> <span className="text-gradient inline-block">Expertise</span>
              </h2>
            </div>
            
            <p className="text-stone-500 text-base md:text-lg font-light leading-relaxed max-w-md">
              A visual representation of my core technical competencies. I balance creative intuition with technical precision.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { zh: "Adobe 系列軟體應用", en: "Adobe Creative Suite Mastery" },
                { zh: "品牌識別與策略", en: "Brand Identity & Strategy" },
                { zh: "刊物與編輯設計", en: "Editorial & Publication Design" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col group border-l-2 border-stone-100 pl-6 py-2 hover:border-amber-400 transition-colors bg-stone-50/30">
                  <span className="text-sm md:text-base font-bold text-stone-700 tracking-wider uppercase mb-1">
                    {item.zh}
                  </span>
                  <span className="text-[9px] md:text-[10px] text-stone-400 font-medium tracking-widest uppercase">
                    {item.en}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 w-full flex justify-end order-2 lg:order-2">
            <div className="w-full">
              <div className="block md:hidden">
                <BarChart />
              </div>
              <div className="hidden md:block w-full max-w-full">
                <RadarChart isVisible={isVisible} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professional;
