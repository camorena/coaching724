import React, { useState } from 'react';
import { Card } from '../ui/card';

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company?: string;
  image?: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title,
  subtitle,
  testimonials,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {title}
          </h2>
          {subtitle && <p className="text-lg text-foreground/80">{subtitle}</p>}
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <Card className="p-8 max-w-3xl mx-auto">
                    {/* Quote Icon */}
                    <div className="mb-6 text-primary">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 12.5H10C9.33696 12.5 8.70107 12.7634 8.23223 13.2322C7.76339 13.7011 7.5 14.337 7.5 15V22.5C7.5 23.163 7.76339 23.7989 8.23223 24.2678C8.70107 24.7366 9.33696 25 10 25H15C15.663 25 16.2989 25.2634 16.7678 25.7322C17.2366 26.2011 17.5 26.837 17.5 27.5V28.75C17.5 29.413 17.2366 30.0489 16.7678 30.5178C16.2989 30.9866 15.663 31.25 15 31.25H12.5M32.5 12.5H25C24.337 12.5 23.7011 12.7634 23.2322 13.2322C22.7634 13.7011 22.5 14.337 22.5 15V22.5C22.5 23.163 22.7634 23.7989 23.2322 24.2678C23.7011 24.7366 24.337 25 25 25H30C30.663 25 31.2989 25.2634 31.7678 25.7322C32.2366 26.2011 32.5 26.837 32.5 27.5V28.75C32.5 29.413 32.2366 30.0489 31.7678 30.5178C31.2989 30.9866 30.663 31.25 30 31.25H27.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    
                    {/* Rating Stars */}
                    {testimonial.rating && (
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-5 h-5 ${i < testimonial.rating! ? 'text-yellow-500' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    )}
                    
                    {/* Testimonial Quote */}
                    <p className="text-lg mb-6">{testimonial.quote}</p>
                    
                    {/* Author Info */}
                    <div className="flex items-center">
                      {testimonial.image ? (
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-4">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-foreground/70">
                          {testimonial.title}
                          {testimonial.company && `, ${testimonial.company}`}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors z-10"
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary' : 'bg-foreground/20'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
