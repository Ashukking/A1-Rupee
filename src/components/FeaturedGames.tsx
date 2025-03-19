
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Gamepad2, DollarSign, Trophy } from 'lucide-react';

const games = [
  {
    id: 1,
    title: 'Cricket Betting',
    description: 'Bet on live matches, innings, and player performances',
    icon: <Trophy className="w-10 h-10 text-gold" />,
    bgImage: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000',
    popular: true,
  },
  {
    id: 2,
    title: 'Roulette Royale',
    description: 'Classic casino game with Indian-style gameplay',
    icon: <Gamepad2 className="w-10 h-10 text-gold" />,
    bgImage: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=1000',
    popular: false,
  },
  {
    id: 3,
    title: 'Teen Patti Master',
    description: 'India\'s favorite card game with real-time betting',
    icon: <DollarSign className="w-10 h-10 text-gold" />,
    bgImage: 'https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?q=80&w=1000',
    popular: true,
  },
  {
    id: 4,
    title: 'Lucky 7',
    description: 'Simple and exciting dice game with huge payouts',
    icon: <Gamepad2 className="w-10 h-10 text-gold" />,
    bgImage: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1000',
    popular: false,
  },
  {
    id: 5,
    title: 'Andar Bahar',
    description: 'Fast-paced traditional Indian card game',
    icon: <DollarSign className="w-10 h-10 text-gold" />,
    bgImage: 'https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=1000',
    popular: false,
  }
];

const FeaturedGames = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="featured-games" className="section-padding bg-betting">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-3">
            <span className="text-gold text-sm font-medium">Premium Games</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Games</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Choose from our selection of popular betting games, designed for maximum 
            excitement and potential rewards.
          </p>
        </div>

        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-betting-dark/80 backdrop-blur-sm p-2 rounded-full border border-white/10 hover:border-gold/50 transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 scrollbar-hidden scroll-smooth"
          >
            {games.map((game) => (
              <div 
                key={game.id} 
                className="game-card min-w-[300px] max-w-[300px] h-[380px] flex-shrink-0 animate-fade-in"
                style={{ animationDelay: `${game.id * 0.1}s` }}
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 z-0">
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-betting-dark via-betting-dark/60 to-transparent z-10" 
                    />
                    <img 
                      src={game.bgImage} 
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                      loading="lazy"
                    />
                  </div>
                  <div className="relative z-10 h-full flex flex-col p-6">
                    <div className="flex-grow">
                      {game.popular && (
                        <div className="absolute top-4 right-4 bg-gold text-black text-xs py-1 px-3 rounded-full font-medium">
                          Popular
                        </div>
                      )}
                      <div className="rounded-full bg-betting-dark/40 backdrop-blur-md p-3 inline-block mb-4">
                        {game.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                      <p className="text-white/70 text-sm">{game.description}</p>
                    </div>
                    <div className="mt-auto pt-6 opacity-0 translate-y-8 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <Button className="w-full btn-primary">Play Now</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-betting-dark/80 backdrop-blur-sm p-2 rounded-full border border-white/10 hover:border-gold/50 transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="btn-secondary">
            View All Games
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
