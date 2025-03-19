
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AlignRight, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 lg:px-24",
        isScrolled ? "bg-betting-dark/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gradient">PaisaPrize</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#featured-games" className="nav-link">Games</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#testimonials" className="nav-link">Reviews</a>
          <a href="#" className="nav-link">About Us</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="btn-secondary">Log In</Button>
          <Button className="btn-primary animate-pulse-gold">Sign Up</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <AlignRight className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-betting-dark/95 backdrop-blur-md transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } pt-20`}
      >
        <nav className="flex flex-col items-center space-y-8 p-8">
          <a href="#featured-games" className="text-xl nav-link" onClick={() => setIsMenuOpen(false)}>Games</a>
          <a href="#how-it-works" className="text-xl nav-link" onClick={() => setIsMenuOpen(false)}>How It Works</a>
          <a href="#testimonials" className="text-xl nav-link" onClick={() => setIsMenuOpen(false)}>Reviews</a>
          <a href="#" className="text-xl nav-link" onClick={() => setIsMenuOpen(false)}>About Us</a>
          <div className="flex flex-col space-y-4 w-full max-w-xs mt-4">
            <Button variant="outline" className="btn-secondary w-full" onClick={() => setIsMenuOpen(false)}>Log In</Button>
            <Button className="btn-primary w-full" onClick={() => setIsMenuOpen(false)}>Sign Up</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
