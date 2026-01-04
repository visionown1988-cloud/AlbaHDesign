
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  const boldUnitNames = (text: string) => {
    const units = [
      '愛富利整合行銷', '威席藝術', '經濟部能源發展署', '沈氏藝術', 
      'YUHAO', 'TranX', 'EZ資訊', 'AEROMATE'
    ];
    
    let highlightedText = text;
    units.forEach(unit => {
      if (highlightedText.includes(unit)) {
        highlightedText = highlightedText.replace(unit, `<span class="text-stone-900 font-bold underline decoration-orange-300 decoration-1 underline-offset-2">${unit}</span>`);
      }
    });
    
    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  return (
    <section id="experience" className="py-40 bg-stone-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
          <div className="space-y-4">
            <p className="text-gradient inline-block text-xs font-black tracking-[0.5em] uppercase">The path</p>
            <h2 className="text-5xl md:text-7xl font-black text-stone-900 tracking-tighter uppercase">
              Career Journey
            </h2>
          </div>
          <div className="h-px flex-1 bg-stone-200 mx-12 hidden md:block"></div>
          <div className="text-stone-400 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
             <span className="w-1 h-1 bg-orange-500 rounded-full"></span> Since 2006
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group pl-5 transition-all">
              {/* Vertical Timeline Axis */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-stone-200 group-hover:bg-orange-200 transition-colors"></div>
              
              {/* Marker: Short vertical line with orange accent */}
              <div className="absolute left-0 top-0 w-[2px] h-8 bg-orange-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
              <div className="absolute -left-[3px] top-0 w-2 h-2 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="space-y-6">
                <div>
                  {/* Period font size adjusted to 12px (120% of 10px) */}
                  <div className="text-gradient inline-block text-[12px] font-black tracking-widest uppercase mb-1">{exp.period}</div>
                  {/* Company font size adjusted to 28.8px (120% of 24px/text-2xl) */}
                  <h3 className="text-[28.8px] font-black text-stone-900 tracking-tight group-hover:text-stone-800 transition-colors leading-tight">
                    {exp.company}
                  </h3>
                  {/* Role font size adjusted to 12px (120% of 10px) */}
                  <div className="text-stone-400 text-[12px] font-bold tracking-[0.2em] uppercase mt-1">{exp.role}</div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((line, idx) => (
                    <li key={idx} className="text-stone-500 text-sm font-light leading-relaxed">
                      {boldUnitNames(line)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
