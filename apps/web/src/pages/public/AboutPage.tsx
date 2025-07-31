import React from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '@/components/layout';
import { CTASection } from '@/components/page-sections';
import { useScrollAnimation } from '@/hooks';
import { Card } from '@/components/ui/card';

const AboutPage: React.FC = () => {
  const missionAnimation = useScrollAnimation();
  const teamAnimation = useScrollAnimation();
  
  // Sample team members data
  const teamMembers = [
    {
      name: 'Jessica Matthews',
      role: 'Founder & CEO',
      bio: 'Former executive coach with 15+ years of experience working with Fortune 500 companies.',
      image: 'https://randomuser.me/api/portraits/women/20.jpg',
    },
    {
      name: 'David Wilson',
      role: 'Chief Coaching Officer',
      bio: 'Certified coach with expertise in leadership development and organizational psychology.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Olivia Chen',
      role: 'Head of Coach Relations',
      bio: 'Dedicated to recruiting top coaching talent and ensuring quality coaching experiences.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Marcus Johnson',
      role: 'Chief Technology Officer',
      bio: 'Tech innovator focused on creating seamless coaching experiences through technology.',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
    },
  ];

  return (
    <MainLayout
      title="About Coaching724 | Our Mission and Team"
      description="Learn about Coaching724's mission to make professional coaching accessible to everyone, and meet our dedicated team of coaching experts."
    >
      {/* Hero Section */}
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About Coaching724</h1>
            <p className="text-xl">Transforming lives through accessible, professional coaching</p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <motion.section 
        className="py-16 bg-background"
        ref={missionAnimation.ref}
        initial="hidden"
        animate={missionAnimation.controls}
        variants={missionAnimation.variants}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-display font-bold mb-4">Our Mission</h2>
              <p className="text-lg mb-4">
                At Coaching724, we believe that everyone deserves access to high-quality coaching. Our mission is to connect individuals with experienced, certified coaches who can help them achieve their personal and professional goals.
              </p>
              <p className="text-lg mb-4">
                We're committed to making coaching accessible, affordable, and effective through innovative technology and a carefully selected network of expert coaches.
              </p>
              <p className="text-lg">
                Whether you're looking to advance your career, improve your leadership skills, or achieve better work-life balance, our platform provides the resources and support you need to succeed.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-lg transform rotate-3"></div>
                <div className="relative bg-background p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <strong>Excellence:</strong> We are committed to providing the highest quality coaching experiences.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <strong>Accessibility:</strong> We believe coaching should be available to everyone, regardless of location or schedule.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <strong>Trust:</strong> We foster trust through confidentiality, professionalism, and results-driven coaching.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <strong>Innovation:</strong> We continuously improve our platform to enhance the coaching experience.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Team Section */}
      <motion.section 
        className="py-16 bg-muted/30"
        ref={teamAnimation.ref}
        initial="hidden"
        animate={teamAnimation.controls}
        variants={teamAnimation.variants}
        id="team"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg">The passionate people behind Coaching724</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="mt-2 text-sm">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Coaching724 was founded in 2021 by Jessica Matthews, a former executive coach who recognized the need for a more accessible, tech-enabled coaching platform.
              </p>
              <p>
                After spending years working with executives at Fortune 500 companies, Jessica saw how transformative coaching could be—but also how limited its reach was. She envisioned a platform that would bring the benefits of professional coaching to a broader audience, breaking down barriers of geography, scheduling, and cost.
              </p>
              <p>
                With this vision in mind, Jessica assembled a team of coaching experts and technology innovators to create Coaching724. The platform launched with just 10 coaches and has since grown to include over 200 certified coaches specializing in various domains, from career development to leadership to personal growth.
              </p>
              <p>
                Today, Coaching724 serves thousands of clients worldwide, helping them achieve their goals and transform their lives through personalized coaching. Our commitment to quality, accessibility, and innovation continues to drive everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Join Our Coaching Community"
        subtitle="Take the first step toward achieving your goals with Coaching724."
        ctaText="Find Your Coach"
        ctaLink="/coaches"
        secondaryCta={{
          text: "Become a Coach",
          link: "/become-a-coach",
        }}
      />
    </MainLayout>
  );
};

export default AboutPage;
