
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-betting-dark border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="mb-5">
            <div className="flex items-center mb-5">
              <span className="text-3xl font-bold text-gradient">PaisaPrize</span>
            </div>
            <p className="text-white/60 mb-5">
              India's premier online betting platform offering secure, fair, and exciting gaming experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Facebook className="w-5 h-5 text-white/80" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Twitter className="w-5 h-5 text-white/80" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Instagram className="w-5 h-5 text-white/80" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Linkedin className="w-5 h-5 text-white/80" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-gold flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> Games
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-gold flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-gold flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> How to Play
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-gold flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> Responsible Gaming
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-gold flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-5">Games</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-gold flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> Cricket Betting
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-gold flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> Roulette
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-gold flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> Teen Patti
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-gold flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> Andar Bahar
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-gold flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> Lucky 7
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold mr-3 mt-1" />
                <span className="text-white/60">
                  123 Gaming Street, Digital City, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-3" />
                <span className="text-white/60">+91 1234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gold mr-3" />
                <span className="text-white/60">support@paisaprize.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PaisaPrize. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 text-sm hover:text-gold">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 text-sm hover:text-gold">
                Terms of Service
              </a>
              <a href="#" className="text-white/50 text-sm hover:text-gold">
                Gambling License
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
