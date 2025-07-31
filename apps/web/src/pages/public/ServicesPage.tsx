import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout';
import { Hero, TestimonialsSection, CTASection } from '@/components/page-sections';
import { services } from '@/data/services';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks';

const ServicesPage: React.FC = () => {
  const servicesAnimation = useScrollAnimation();
  
  // Sample testimonials for services section
  const serviceTestimonials = [
    {
      id: "1",
      quote: "The career coaching I received completely transformed my professional trajectory. My coach helped me identify my unique strengths and develop a strategic plan that led to a promotion within six months.",
      name: "Michael Thompson",
      title: "Marketing Director",
      company: "Global Innovations",
      rating: 5
    },
    {
      id: "2",
      quote: "Leadership coaching gave me the tools to navigate a challenging transition to an executive role. The personalized approach addressed my specific challenges and helped me build a more cohesive team.",
      name: "Sarah Chen",
      title: "Chief Operations Officer",
      company: "TechVision Inc.",
      rating: 5
    },
    {
      id: "3",
      quote: "The business coaching program helped me scale my company from a small startup to a thriving business with 20 employees. The strategic guidance and accountability were exactly what I needed.",
      name: "David Rodriguez",
      title: "Founder & CEO",
      company: "Innovative Solutions",
      rating: 5
    }
  ];

  return (
    <MainLayout
      title="Professional Coaching Services | Coaching724"
      description="Discover our range of professional coaching services designed to help you achieve your personal and professional goals."
    >
      <Hero
        title="Expert Coaching Services"
        subtitle="Tailored coaching solutions to help you achieve your goals and unlock your full potential."
        ctaText="Find Your Coach"
        ctaLink="/coaches"
        secondaryCta={{
          text: "Compare Services",
          link: "#service-comparison"
        }}
        backgroundClass="bg-primary/10"
      />
      
      <motion.section
        className="py-16 bg-background"
        ref={servicesAnimation.ref}
        initial="hidden"
        animate={servicesAnimation.controls}
        variants={servicesAnimation.variants}
        id="service-comparison"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Coaching Services</h2>
            <p className="text-lg text-foreground/80">
              We offer a comprehensive range of coaching services to support your personal and professional development needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden transition-all duration-300 hover:shadow-md h-full flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">{service.title}</h3>
                  <p className="text-foreground/80 mb-4">{service.shortDescription}</p>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Link 
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary-hover font-medium"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>
      
      <TestimonialsSection
        title="Client Success Stories"
        subtitle="Hear from clients who have transformed their lives through our coaching services"
        testimonials={serviceTestimonials}
      />
      
      <CTASection
        title="Ready to Transform Your Life or Career?"
        subtitle="Take the first step toward reaching your full potential with our expert coaches."
        ctaText="Schedule a Free Consultation"
        ctaLink="/contact"
        secondaryCta={{
          text: "Explore Pricing",
          link: "/pricing"
        }}
        backgroundClass="bg-gradient-subtle"
      />
    </MainLayout>
  );
};

export default ServicesPage;
