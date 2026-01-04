
import React from 'react';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Expertise', id: 'professional' },
    { label: 'Career', id: 'experience' },
    { label: 'Work', id: 'portfolio' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-stone-100">
      <nav className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-0.5 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="text-xl font-black tracking-tighter text-stone-900">
            ALBA<span className="text-gradient">.H</span>
          </div>
          <div className="w-1.5 h-1.5 bg-accent-yellow mt-1 transition-transform group-hover:rotate-45"></div>
        </div>
        <ul className="flex items-center space-x-6 md:space-x-12">
          {navItems.map((item) => (
            <li key={item.id} className="hidden md:block">
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-[10px] font-bold tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-all uppercase relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent-yellow transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={onContactClick}
              className="bg-stone-900 text-white px-6 md:px-8 py-3 rounded-none text-[10px] font-bold tracking-[0.2em] hover:bg-gradient-main hover:-translate-y-0.5 active:scale-95 transition-all shadow-sm hover:shadow-orange-500/20"
            >
              CONTACT
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
