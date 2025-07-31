import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MainLayout } from '@/components/layout';
import { CTASection } from '@/components/page-sections';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getServiceBySlug, services } from '@/data/services';
import { useScrollAnimation } from '@/hooks';

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug || '');
  
  const featuresAnimation = useScrollAnimation();
  const benefitsAnimation = useScrollAnimation({
    variants: {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.7 }
      }
    }
  });
  
  // If service not found, navigate to services page
  React.useEffect(() => {
    if (!service && slug) {
      navigate('/services');
    }
  }, [service, slug, navigate]);
  
  if (!service) {
    return null;
  }
  
  return (
    <MainLayout
      title={`${service.title} | Coaching724`}
      description={service.shortDescription}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/services" className="inline-flex items-center text-primary hover:text-primary-hover mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{service.title}</h1>
            <p className="text-xl text-foreground/80 mb-8">{service.shortDescription}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                <Link to="/coaches">Find a Coach</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/contact">Request Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Description Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl">{service.description}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <motion.section 
        className="py-16 bg-muted/30"
        ref={benefitsAnimation.ref}
        initial="hidden"
        animate={benefitsAnimation.controls}
        variants={benefitsAnimation.variants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Features Section */}
      <motion.section 
        className="py-16 bg-background"
        ref={featuresAnimation.ref}
        initial="hidden"
        animate={featuresAnimation.controls}
        variants={featuresAnimation.variants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.features.map((feature, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-foreground/80">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Case Studies / Testimonials Section */}
      {service.caseStudies && service.caseStudies.length > 0 && (
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-8 text-center">Client Success Stories</h2>
              <div className="space-y-8">
                {service.caseStudies.map((caseStudy, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center">
                        <div className="mb-4 md:mb-0 md:mr-6">
                          <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold">
                            {caseStudy.name.charAt(0)}
                          </div>
                        </div>
                        <div>
                          <blockquote className="text-lg italic mb-4">{caseStudy.testimonial}</blockquote>
                          <div>
                            <p className="font-semibold">{caseStudy.name}</p>
                            {caseStudy.position && (
                              <p className="text-sm text-foreground/70">
                                {caseStudy.position}
                                {caseStudy.company && `, ${caseStudy.company}`}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Related Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services
                .filter(s => s.id !== service.id)
                .slice(0, 3)
                .map(relatedService => (
                  <Card key={relatedService.id} className="h-full flex flex-col">
                    <CardContent className="p-6 flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{relatedService.title}</h3>
                      <p className="text-foreground/80 mb-4">{relatedService.shortDescription}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Link 
                        to={`/services/${relatedService.slug}`}
                        className="inline-flex items-center text-primary hover:text-primary-hover font-medium"
                      >
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </Card>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Ready to Get Started?"
        subtitle="Take the first step toward transforming your life or career with our expert coaching."
        ctaText="Schedule a Consultation"
        ctaLink="/contact"
        secondaryCta={{
          text: "Browse Our Coaches",
          link: "/coaches"
        }}
      />
    </MainLayout>
  );
};

export default ServiceDetailPage;
