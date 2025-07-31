import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout';
import { Hero, CTASection } from '@/components/page-sections';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { coaches, coachSpecialties } from '@/data/coaches';

const CoachesPage: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Filter coaches based on specialty and search query
  const filteredCoaches = coaches.filter(coach => {
    const matchesSpecialty = selectedSpecialty === 'all' || coach.specialties.includes(selectedSpecialty);
    const matchesSearch = searchQuery === '' || 
      coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.specialties.some(specialty => {
        const specialtyName = coachSpecialties.find(s => s.id === specialty)?.name || '';
        return specialtyName.toLowerCase().includes(searchQuery.toLowerCase());
      });
    
    return matchesSpecialty && matchesSearch;
  });
  
  return (
    <MainLayout
      title="Our Coaches | Coaching724"
      description="Meet our team of professional coaches specializing in career development, leadership, life coaching, and more."
    >
      <Hero
        title="Meet Our Expert Coaches"
        subtitle="Connect with certified coaches who will guide you toward achieving your personal and professional goals."
        ctaText="Book a Free Consultation"
        ctaLink="/contact"
        backgroundClass="bg-gradient-subtle"
      />
      
      {/* Filter Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
            {/* Specialty Filter */}
            <div className="w-full md:w-auto">
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full md:w-auto px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Specialties</option>
                {coachSpecialties.map((specialty) => (
                  <option key={specialty.id} value={specialty.id}>
                    {specialty.name}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Search */}
            <div className="w-full md:w-auto relative">
              <input
                type="text"
                placeholder="Search coaches..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 px-4 py-2 pr-10 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/60">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Results count */}
          <div className="mb-6">
            <p className="text-foreground/70">
              Showing {filteredCoaches.length} {filteredCoaches.length === 1 ? 'coach' : 'coaches'}
              {selectedSpecialty !== 'all' && (
                <> specializing in {coachSpecialties.find(s => s.id === selectedSpecialty)?.name}</>
              )}
              {searchQuery && (
                <> matching "{searchQuery}"</>
              )}
            </p>
          </div>
          
          {/* Coaches Grid */}
          {filteredCoaches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCoaches.map((coach) => (
                <Card key={coach.id} className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-md">
                  <div className="relative">
                    <img
                      src={coach.avatar}
                      alt={coach.name}
                      className="w-full h-64 object-cover"
                    />
                    {coach.featured && (
                      <div className="absolute top-0 right-0 m-4">
                        <Badge variant="highlight">Featured Coach</Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-display font-bold mb-1">{coach.name}</h3>
                    <p className="text-primary font-medium mb-3">{coach.title}</p>
                    <p className="text-foreground/80 mb-4 line-clamp-3">{coach.shortBio}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {coach.specialties.slice(0, 3).map((specialtyId) => {
                        const specialty = coachSpecialties.find(s => s.id === specialtyId);
                        return specialty ? (
                          <Badge key={specialtyId} variant="secondary" className="text-xs">
                            {specialty.name}
                          </Badge>
                        ) : null;
                      })}
                      {coach.specialties.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{coach.specialties.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="mt-auto pt-4">
                      <Link 
                        to={`/coaches/${coach.slug}`}
                        className="inline-flex items-center text-primary hover:text-primary-hover font-medium"
                      >
                        View Profile
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">No coaches found</h3>
              <p className="text-foreground/70 mb-4">
                Try adjusting your filters or search query to find coaches that match your criteria.
              </p>
              <Button onClick={() => { setSelectedSpecialty('all'); setSearchQuery(''); }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Coaching Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Coaching Process</h2>
            <p className="text-lg">
              We follow a structured approach to ensure you get the most out of your coaching experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-display font-semibold mb-2">Initial Consultation</h3>
              <p className="text-foreground/80">
                Begin with a free consultation to discuss your goals and determine if coaching is right for you.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-display font-semibold mb-2">Personalized Plan</h3>
              <p className="text-foreground/80">
                Work with your coach to create a customized plan tailored to your specific goals and challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-display font-semibold mb-2">Ongoing Support</h3>
              <p className="text-foreground/80">
                Receive regular coaching sessions, feedback, and support as you work toward achieving your goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg">
              Common questions about working with our coaches.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">How do I choose the right coach?</h3>
                  <p className="text-foreground/80">
                    We recommend selecting a coach based on their specialty areas, experience, and coaching style. You can schedule a free consultation with potential coaches to determine the best fit for your needs and goals.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">What happens during a coaching session?</h3>
                  <p className="text-foreground/80">
                    Coaching sessions typically last 45-60 minutes and focus on your specific goals and challenges. Your coach will ask thought-provoking questions, provide feedback, and help you develop actionable strategies for progress. Each session ends with clear next steps to maintain momentum.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">How long does the coaching process take?</h3>
                  <p className="text-foreground/80">
                    The length of coaching engagement varies based on your goals and situation. Many clients work with their coach for 3-6 months to achieve significant progress, with sessions typically held weekly or bi-weekly. Some clients continue with monthly maintenance sessions after achieving their initial goals.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">What if I need to reschedule a session?</h3>
                  <p className="text-foreground/80">
                    We understand that schedules can change. Most coaches require 24-48 hours notice for rescheduling. You can easily reschedule sessions through our online booking system or by contacting your coach directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Ready to Start Your Coaching Journey?"
        subtitle="Take the first step toward achieving your goals with expert guidance and support."
        ctaText="Find Your Coach"
        ctaLink="/contact"
        secondaryCta={{
          text: "Explore Our Services",
          link: "/services"
        }}
      />
    </MainLayout>
  );
};

export default CoachesPage;
