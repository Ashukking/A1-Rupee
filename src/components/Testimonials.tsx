
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Raj Patel',
    location: 'Mumbai',
    quote: 'I've tried many betting sites, but PaisaPrize is simply the best. The interface is intuitive, and I received my winnings in just minutes!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Singh',
    location: 'Delhi',
    quote: 'The game variety is amazing, and customer support is always responsive. I particularly enjoy the cricket betting options during IPL season.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Vijay Kumar',
    location: 'Bangalore',
    quote: 'Fast withdrawals and great odds. I've been using PaisaPrize for six months now, and it's become my go-to platform for all betting needs.',
    avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
    rating: 4,
  },
  {
    id: 4,
    name: 'Ananya Desai',
    location: 'Pune',
    quote: 'Love the security measures in place. I feel safe knowing my personal and financial information is well protected while enjoying my favorite games.',
    avatar: 'https://randomuser.me/api/portraits/women/64.jpg',
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section-padding bg-betting">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-3">
            <span className="text-gold text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community has to say about their PaisaPrize experience.
          </p>
        </div>

        <div className="relative px-4 md:px-12">
          <div className="glass-card overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient opacity-50" />
            
            <div className="p-8 md:p-12">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 flex flex-col md:flex-row items-center gap-8"
                  >
                    <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
                      <div className="relative mb-4">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold/30 relative z-10">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gold/20 rounded-full blur-xl" />
                      </div>
                      <h3 className="text-xl font-bold">{testimonial.name}</h3>
                      <p className="text-white/60 mb-3">{testimonial.location}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-gold fill-gold' : 'text-white/20'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="w-full md:w-2/3 relative">
                      <Quote className="absolute top-0 left-0 w-10 h-10 text-gold/20 -translate-x-4 -translate-y-4" />
                      <p className="text-lg text-white/90 italic relative z-10">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-betting-dark/50 border-t border-white/5 py-4 px-8 flex justify-between items-center">
              <div className="flex items-center gap-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'bg-gold w-6' : 'bg-white/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full border border-white/10 hover:border-gold/50 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full border border-white/10 hover:border-gold/50 transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
