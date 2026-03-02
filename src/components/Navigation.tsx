import { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'committees', label: 'Committees' },
    { id: 'messages', label: 'Messages' },
    { id: 'venue', label: 'Venue' },
    { id: 'registration', label: 'Register' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent border-b border-white/10`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <div className="relative">
                <Flame className="w-10 h-10 text-[#FFD700] group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]" />
                <div className="absolute inset-0 bg-[#FFD700] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-2xl font-black text-gradient tracking-tighter hover:tracking-normal transition-all duration-300 leading-none">AGNIRA MUN</div>
                <div className="mt-1">
                  <span className="text-[10px] text-[#FFD700] tracking-[0.2em] font-black uppercase bg-[#8B0000]/60 px-2 py-0.5 rounded-sm border border-[#FFD700]/30 shadow-[0_0_10px_rgba(139,0,0,0.5)]">
                    NOVEMBER 6-7, 2026
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-[#FFD700] bg-[#8B0000]/30 shadow-lg shadow-[#FFD700]/20'
                      : 'text-gray-300 hover:text-[#FFD700] hover:bg-[#8B0000]/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-[#FFD700] p-2 hover:bg-[#8B0000]/20 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-[#1a0a0f]/98 border-b border-[#FFD700]/20 shadow-2xl">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-[#FFD700] bg-[#8B0000]/30 shadow-lg'
                      : 'text-gray-300 hover:text-[#FFD700] hover:bg-[#8B0000]/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
