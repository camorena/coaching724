import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout';
import { CTASection } from '@/components/page-sections';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getCoachBySlug, coachSpecialties } from '@/data/coaches';

const CoachDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const coach = getCoachBySlug(slug || '');
  
  // If coach not found, navigate to coaches page
  useEffect(() => {
    if (!coach && slug) {
      navigate('/coaches');
    }
  }, [coach, slug, navigate]);
  
  if (!coach) return null;
  
  // Get formatted rate
  const formattedRate = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(coach.hourlyRate);
  
  // Format availability days
  const availabilityDays = Object.entries(coach.availability)
    .filter(([day, available]) => 
      available && !['evenings', 'weekends'].includes(day)
    )
    .map(([day]) => day.charAt(0).toUpperCase() + day.slice(1))
    .join(', ');
  
  return (
    <MainLayout
      title={`${coach.name} | Coaching724`}
      description={coach.shortBio}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <Link to="/coaches" className="inline-flex items-center text-primary hover:text-primary-hover mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Coaches
              </Link>
              
              <div className="relative mb-4">
                <img
                  src={coach.avatar}
                  alt={coach.name}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                {coach.featured && (
                  <div className="absolute top-0 right-0 m-4">
                    <Badge variant="highlight">Featured Coach</Badge>
                  </div>
                )}
              </div>
              
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {coach.specialties.map((specialtyId) => {
                      const specialty = coachSpecialties.find(s => s.id === specialtyId);
                      return specialty ? (
                        <Badge key={specialtyId} variant="secondary">
                          {specialty.name}
                        </Badge>
                      ) : null;
                    })}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Rate</h3>
                  <p>{formattedRate} per hour</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {coach.languages.map((language) => (
                      <Badge key={language} variant="outline">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p>{coach.location}</p>
                  <p className="text-sm text-foreground/70">
                    {coach.remote ? 'Remote sessions available' : 'In-person sessions only'}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Availability</h3>
                  <p>{availabilityDays}</p>
                  <p className="text-sm text-foreground/70">
                    {coach.availability.evenings && 'Evening sessions available'}
                    {coach.availability.evenings && coach.availability.weekends && ', '}
                    {coach.availability.weekends && 'Weekend sessions available'}
                  </p>
                </div>
                
                <div className="pt-4">
                  <Button className="w-full">
                    <Link to="/contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">{coach.name}</h1>
              <p className="text-xl text-primary font-medium mb-4">{coach.title}</p>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="lead text-xl mb-4">{coach.shortBio}</p>
                {coach.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-display font-semibold mb-4">Coaching Approach</h2>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <p>{coach.approach}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-display font-semibold mb-4">Education & Certifications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Education</h3>
                      <ul className="space-y-1">
                        {coach.education.map((edu, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Certifications</h3>
                      <ul className="space-y-1">
                        {coach.certifications.map((cert, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Client Testimonials</h2>
          
          {coach.testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {coach.testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="h-full">
                  <CardContent className="p-6">
                    {/* Rating Stars */}
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className="text-lg italic mb-4">{testimonial.text}</blockquote>
                    
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      {(testimonial.position || testimonial.company) && (
                        <p className="text-sm text-foreground/70">
                          {testimonial.position}
                          {testimonial.position && testimonial.company && ', '}
                          {testimonial.company}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p>No testimonials available yet.</p>
            </div>
          )}
        </div>
      </section>
      
      <CTASection
        title="Ready to Work with The coach"
        subtitle="Take the first step toward achieving your goals with expert guidance from The coach."
        ctaText="Schedule a Consultation"
        ctaLink="/contact"
        secondaryCta={{
          text: "View Services",
          link: "/services"
        }}
      />
    </MainLayout>
  );
};

export default CoachDetailPage;
