
import React, { useState, useRef } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';

const PortfolioItemCard: React.FC<{ imageUrl: string; title: string }> = ({ imageUrl, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPos = useRef({ x: 0, y: 0 });

  // Shared dragging logic for mouse and touch
  const startDragging = (clientX: number, clientY: number) => {
    if (!isHovered) return;
    setIsDragging(true);
    lastPos.current = { x: clientX, y: clientY };
  };

  const moveDragging = (clientX: number, clientY: number) => {
    if (!isDragging || !isHovered) return;

    const deltaX = clientX - lastPos.current.x;
    const deltaY = clientY - lastPos.current.y;

    setOffset(prev => {
      const newX = prev.x + deltaX;
      const newY = prev.y + deltaY;

      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const maxOffsetX = (width * 0.6) / 2;
        const maxOffsetY = (height * 0.6) / 2;

        return {
          x: Math.max(-maxOffsetX, Math.min(maxOffsetX, newX)),
          y: Math.max(-maxOffsetY, Math.min(maxOffsetY, newY))
        };
      }
      return { x: newX, y: newY };
    });

    lastPos.current = { x: clientX, y: clientY };
  };

  // Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    startDragging(e.clientX, e.clientY);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    moveDragging(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    // Force hover state on touch start for mobile
    setIsHovered(true);
    const touch = e.touches[0];
    startDragging(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    moveDragging(touch.clientX, touch.clientY);
    // Prevent scrolling only when dragging
    if (isDragging) {
      if (e.cancelable) e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsDragging(false);
    setOffset({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div 
      ref={containerRef}
      className={`group relative bg-white overflow-hidden aspect-square cursor-grab active:cursor-grabbing border-stone-200 border-[0.5px] ${isDragging ? 'touch-none' : 'touch-pan-y'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img 
        src={imageUrl} 
        alt={title} 
        draggable={false}
        className="w-full h-full object-cover transition-transform duration-500 ease-out select-none pointer-events-none"
        style={{
          transform: isHovered 
            ? `scale(1.6) translate(${offset.x / 1.6}px, ${offset.y / 1.6}px)` 
            : 'scale(1) translate(0px, 0px)'
        }}
      />
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pdfUrl = "https://drive.google.com/file/d/1McShANaSogqfmdhnkEHr7iDzIWeF-Srp/preview";

  return (
    <section id="portfolio" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
          <div className="max-w-2xl space-y-6">
            <p className="text-gradient inline-block text-xs font-black tracking-[0.5em] uppercase">Portfolio</p>
            <h2 className="text-5xl md:text-6xl font-black text-stone-900 tracking-tighter uppercase">
              Selected Works
            </h2>
            <p className="text-stone-500 text-lg font-light leading-relaxed">
              Explore my design projects in detail. Hover or touch to zoom (160%) and drag to pan within the frame.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-stone-900 text-white px-10 py-4 text-[11px] font-bold tracking-[0.3em] hover:bg-gradient-main hover:-translate-y-0.5 active:scale-95 transition-all uppercase shadow-md hover:shadow-orange-500/10"
            >
              MORE
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-1 bg-stone-100">
          {PORTFOLIO_ITEMS.map((item) => (
            <PortfolioItemCard key={item.id} imageUrl={item.imageUrl} title={item.title} />
          ))}
        </div>

        <div className="mt-24 flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-stone-900 text-white px-12 py-5 text-[12px] font-bold tracking-[0.3em] hover:bg-gradient-main hover:-translate-y-0.5 active:scale-95 transition-all uppercase shadow-lg hover:shadow-orange-500/20"
            >
              VIEW FULL PORTFOLIO (PDF)
            </button>
        </div>
      </div>

      {/* PDF Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6 lg:p-10">
          <div 
            className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative w-full h-[90vh] max-w-[95vw] bg-white shadow-2xl overflow-hidden flex flex-col rounded-sm">
            <div className="flex items-center justify-between p-4 border-b border-stone-100 bg-white">
              <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">Alba Huang Portfolio 2026</span>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-stone-900 hover:text-orange-500 hover:rotate-90 transition-all duration-300 p-1 active:scale-75"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 w-full bg-stone-100 overflow-hidden">
              <iframe 
                src={pdfUrl} 
                className="w-full h-full border-none"
                title="Alba Huang Portfolio PDF"
                allow="autoplay"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
