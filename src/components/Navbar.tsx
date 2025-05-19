
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar = ({ transparent = true }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || !transparent
      ? 'bg-navy/95 backdrop-blur-md shadow-lg py-4'
      : 'bg-transparent py-6'
  }`;

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { name: "How It Works", section: "how-it-works" },
    { name: "Why Agentic AI", section: "why-agentic" },
    { name: "Who It's For", section: "who-its-for" },
    { name: "Team", section: "team" },
  ];

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className="text-neon-text hover:text-white text-lg font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('cta')}
              className="bg-neon-blue text-white font-medium px-4 py-2 hover:shadow-[0_0_15px_rgba(91,129,253,0.5)] transition-all hover:-translate-y-1"
            >
              Get Early Access
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="p-2 text-neon-text"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-navy-light border-t border-neon-blue/20 shadow-lg py-4 animate-fade-in-up">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className="py-2 px-4 hover:bg-navy-card rounded-md transition-colors text-left text-lg"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('cta')}
              className="bg-neon-blue text-white font-medium w-full justify-start"
            >
              Get Early Access
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
