
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Coins, Trophy, Zap } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-pattern"
      style={{
        '--mouse-x': '0.5',
        '--mouse-y': '0.5',
      } as React.CSSProperties}
    >
      {/* Glowing orb that follows mouse */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-gold/10 blur-[100px] opacity-50 pointer-events-none"
        style={{
          left: 'calc(var(--mouse-x) * 100%)',
          top: 'calc(var(--mouse-y) * 100%)',
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.3s ease-out, top 0.3s ease-out',
        }}
      />

      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTI1MjUiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJWNGgydjIyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0 animate-fade-in">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-gold text-sm font-medium flex items-center">
                <Zap className="w-4 h-4 mr-1" /> New users get 100% bonus up to ₹10,000
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-white">Your Paisa...</span>
              <span className="text-gradient gold-glow">Your Prize...!</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-8 max-w-xl">
              Experience the thrill of betting with India's most trusted platform. 
              Play smart, win big, and withdraw instantly.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button className="btn-primary text-lg px-8 py-6 h-auto">
                Start Betting
              </Button>
              <Button variant="outline" className="btn-secondary text-lg px-8 py-6 h-auto">
                Learn More
              </Button>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-8 mt-12">
              <div className="flex items-center">
                <Coins className="w-5 h-5 text-gold mr-2" />
                <span className="text-white/80">10+ Payment Methods</span>
              </div>
              <div className="flex items-center">
                <Trophy className="w-5 h-5 text-gold mr-2" />
                <span className="text-white/80">100% Secure</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block w-full max-w-md mt-12 md:mt-0 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8 backdrop-blur-md rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient" />
              <div className="text-center">
                <h3 className="text-xl font-bold mb-6">Featured Event</h3>
                <div className="bg-betting-light/30 rounded-xl p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white/80">India</span>
                    <span className="text-gold font-bold">VS</span>
                    <span className="text-white/80">Australia</span>
                  </div>
                  <p className="text-white/60 text-sm mb-4">Cricket - T20 World Cup</p>
                  <div className="flex justify-between mb-2">
                    <div className="text-center">
                      <p className="text-white/60 text-xs">India Win</p>
                      <p className="bg-betting-light/50 rounded-lg py-1 px-3 font-semibold">2.10</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white/60 text-xs">Draw</p>
                      <p className="bg-betting-light/50 rounded-lg py-1 px-3 font-semibold">3.25</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white/60 text-xs">Australia Win</p>
                      <p className="bg-betting-light/50 rounded-lg py-1 px-3 font-semibold">2.80</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full btn-primary">Place Bet Now</Button>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl z-[-1]" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl z-[-1]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
