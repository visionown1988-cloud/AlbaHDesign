
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Gift } from 'lucide-react';

interface MobileNavProps {
  onContactClick: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ onContactClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  };

  const items = [
    { id: 'about', label: 'About', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )},
    { id: 'portfolio', label: 'Work', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )},
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] pb-[env(safe-area-inset-bottom)] bg-white/80 backdrop-blur-lg border-t border-stone-100 shadow-[0_-4px_16px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-around h-16">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className="flex flex-col items-center justify-center gap-1 w-full text-stone-400 active:text-orange-500 transition-colors py-1"
          >
            {item.icon}
            <span className="text-[9px] font-black uppercase tracking-widest">{item.label}</span>
          </button>
        ))}
        
        <button
          onClick={() => navigate('/gifts')}
          className={`flex flex-col items-center justify-center gap-1 w-full transition-colors py-1 ${location.pathname === '/gifts' ? 'text-stone-900' : 'text-stone-400 active:text-orange-500'}`}
        >
          <Gift className="w-5 h-5" strokeWidth={1.8} />
          <span className="text-[9px] font-black uppercase tracking-widest">Gifts</span>
        </button>

        <button
          onClick={onContactClick}
          className="flex flex-col items-center justify-center gap-1 w-full text-stone-900 active:text-orange-600 transition-colors py-1"
        >
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest">Chat</span>
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
