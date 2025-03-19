
import React from 'react';
import { UserPlus, CreditCard, Gamepad2, Banknote } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Sign Up',
    description: 'Create your account in less than 2 minutes with quick email verification',
    icon: <UserPlus className="w-8 h-8" />,
    color: 'from-gold/20 to-gold/5'
  },
  {
    id: 2,
    title: 'Deposit Funds',
    description: 'Add money to your wallet using any of our secure payment methods',
    icon: <CreditCard className="w-8 h-8" />,
    color: 'from-gold/20 to-gold/5'
  },
  {
    id: 3,
    title: 'Place Your Bets',
    description: 'Browse games, select your favorites, and place your bets',
    icon: <Gamepad2 className="w-8 h-8" />,
    color: 'from-gold/20 to-gold/5'
  },
  {
    id: 4,
    title: 'Withdraw Winnings',
    description: 'Cash out your winnings instantly to your bank account or UPI',
    icon: <Banknote className="w-8 h-8" />,
    color: 'from-gold/20 to-gold/5'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-betting-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-3">
            <span className="text-gold text-sm font-medium">Easy Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Getting started with PaisaPrize is simple. Follow these easy steps to begin 
            your betting journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="glass-card p-8 backdrop-blur-md relative group hover:border-gold/30 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${step.id * 0.1}s` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-gold/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-betting-light border border-white/10 mb-6 relative z-10 group-hover:border-gold/30 transition-all duration-300">
                    <div className="text-gold">{step.icon}</div>
                  </div>
                  <div className="absolute top-0 left-0 w-16 h-16 bg-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute top-6 left-0 right-0 flex justify-center">
                  <span className="text-2xl font-bold text-gradient opacity-10">{step.id}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 glass-card p-8 md:p-12 backdrop-blur-md animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-white/70 max-w-xl">
                Join thousands of satisfied players who trust PaisaPrize for fair games and fast payouts.
              </p>
            </div>
            <div className="inline-flex bg-gold/10 p-1 rounded-full">
              <button className="btn-primary rounded-full px-6 py-3">Create Account</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
