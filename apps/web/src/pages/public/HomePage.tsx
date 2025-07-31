import React from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '@/components/layout';
import {
  Hero,
  FeaturesSection,
  TestimonialsSection,
  CTASection,
} from '@/components/page-sections';
import { useScrollAnimation } from '@/hooks';

// Sample features data
const features = [
  {
    title: 'Expert Coaches',
    description: 'Connect with certified coaches specialized in various domains, from career to personal development.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Flexible Scheduling',
    description: 'Book sessions at your convenience, with flexible time slots to fit your busy schedule.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Secure Video Calls',
    description: 'Enjoy high-quality, encrypted video sessions from the comfort of your home or office.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Progress Tracking',
    description: 'Set goals and track your progress with our intuitive tools and regular check-ins.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Personalized Feedback',
    description: 'Receive customized insights and actionable feedback after each coaching session.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    title: 'Resource Library',
    description: 'Access our extensive library of resources, worksheets, and exercises to enhance your growth.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

// Sample testimonials data
const testimonials = [
  {
    id: '1',
    quote: "Working with Coaching724 transformed my career path. My coach helped me identify my strengths and create a strategic plan to advance in my field. Within six months, I secured a promotion I had been working towards for years.",
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "Global Brands Inc.",
    rating: 5,
  },
  {
    id: '2',
    quote: "The leadership coaching I received through Coaching724 was exactly what I needed to navigate a challenging transition to a management role. My coach provided practical strategies that I could implement immediately.",
    name: "Michael Chen",
    title: "Engineering Manager",
    company: "Tech Innovations",
    rating: 5,
  },
  {
    id: '3',
    quote: "I was skeptical about online coaching at first, but the experience exceeded my expectations. The platform is incredibly user-friendly, and the quality of coaches is outstanding. I've made more progress in three months than I did in years of trying on my own.",
    name: "Elena Rodriguez",
    title: "Small Business Owner",
    rating: 4,
  },
];

const HomePage: React.FC = () => {
  const featuresAnimation = useScrollAnimation();
  const testimonialsAnimation = useScrollAnimation({
    variants: {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8 }
      }
    }
  });

  return (
    <MainLayout>
      <Hero
        title="Unlock Your Potential with Professional Coaching"
        subtitle="Connect with expert coaches who will guide you toward achieving your personal and professional goals."
        ctaText="Find a Coach"
        ctaLink="/coaches"
        secondaryCta={{
          text: "How It Works",
          link: "/how-it-works",
        }}
      />
      
      <motion.div
        ref={featuresAnimation.ref}
        initial="hidden"
        animate={featuresAnimation.controls}
        variants={featuresAnimation.variants}
      >
        <FeaturesSection
          title="Why Choose Coaching724"
          subtitle="Our platform offers everything you need for a transformative coaching experience"
          features={features}
        />
      </motion.div>
      
      <motion.div
        ref={testimonialsAnimation.ref}
        initial="hidden"
        animate={testimonialsAnimation.controls}
        variants={testimonialsAnimation.variants}
      >
        <TestimonialsSection
          title="Success Stories"
          subtitle="Hear from clients who have transformed their lives through coaching"
          testimonials={testimonials}
        />
      </motion.div>
      
      <CTASection
        title="Ready to Begin Your Coaching Journey?"
        subtitle="Take the first step toward achieving your goals with a free consultation."
        ctaText="Get Started Today"
        ctaLink="/signup"
        secondaryCta={{
          text: "Learn More",
          link: "/about",
        }}
      />
    </MainLayout>
  );
};

export default HomePage;
