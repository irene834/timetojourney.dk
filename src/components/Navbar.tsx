import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Journeys', href: '#journeys' },
    { name: 'The Business Model', href: '#services' },
    { name: 'The Vision', href: '#story' },
  ];

  const textColor = isScrolled ? 'text-ink' : 'text-white';
  const borderColor = isScrolled ? 'border-ink/20' : 'border-white/30';
  const hoverBg = isScrolled ? 'hover:bg-ink hover:text-paper' : 'hover:bg-white hover:text-ink';
  const linkColor = isScrolled ? 'text-ink/60 hover:text-ink' : 'text-white/80 hover:text-white';

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-paper py-5 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      {/* Dark gradient when at the top to ensure visibility of white text */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`} 
        style={{ zIndex: -1 }} 
      />

      <div className="container mx-auto px-6 md:px-10 flex justify-between items-center">
        <a href="#" className={`flex items-center gap-4 group ${textColor} transition-colors duration-500`}>
          <span className="serif text-2xl md:text-3xl tracking-tighter uppercase">Time To Journey</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12 lg:gap-16">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold ${linkColor} transition-all duration-500 relative group`}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          <a 
            href="#contact" 
            className={`px-8 py-3 border ${borderColor} rounded-full text-[10px] uppercase tracking-[0.3em] font-bold ${textColor} ${hoverBg} transition-all duration-500`}
          >
            Inquire
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${textColor} transition-colors duration-500`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="fixed inset-0 bg-paper z-50 md:hidden flex flex-col justify-center items-center gap-12"
          >
            <button 
              className="absolute top-10 right-10 text-ink"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="serif text-5xl text-ink italic hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 px-12 py-5 bg-ink text-paper rounded-full text-[12px] uppercase tracking-[0.4em] font-bold"
            >
              Start Collaboration
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
