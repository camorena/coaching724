import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MainLayout } from '@/components/layout';
import { CTASection } from '@/components/page-sections';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { pricingCategories } from '@/data/pricing';
import { useScrollAnimation } from '@/hooks';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'month' | 'year'>('month');
  const pricingAnimation = useScrollAnimation();
  const faqAnimation = useScrollAnimation({
    variants: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: 0.2 }
      }
    }
  });

  // FAQ data
  const faqs = [
    {
      question: "How do I know which coaching plan is right for me?",
      answer: "We recommend starting with a free consultation where we can assess your needs and goals. Our coaches will help you determine the most appropriate plan based on your specific situation and objectives."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade mid-cycle, we'll prorate the difference. If you downgrade, the changes will take effect at the start of your next billing cycle."
    },
    {
      question: "Is there a minimum commitment period?",
      answer: "Our monthly plans are flexible with no minimum commitment. However, coaching is a process that typically yields the best results over time. Many clients find that a 3-6 month commitment allows for meaningful progress toward their goals."
    },
    {
      question: "Are there any additional fees beyond the monthly cost?",
      answer: "The prices listed include all standard coaching sessions and features described. Some specialized assessments or premium resources might incur additional costs, but these would always be discussed and approved in advance."
    },
    {
      question: "Do you offer refunds if I'm not satisfied?",
      answer: "We stand behind the quality of our coaching. If you're not completely satisfied after your first session, we offer a 100% money-back guarantee. Beyond that, we handle refund requests on a case-by-case basis."
    },
    {
      question: "Can I schedule sessions outside business hours?",
      answer: "Many of our coaches offer evening and weekend availability. This varies by coach and is indicated in their profiles. If you need specific scheduling accommodations, please mention this during your consultation."
    }
  ];

  return (
    <MainLayout
      title="Pricing & Plans | Coaching724"
      description="Explore our flexible pricing options for professional coaching services. Find the right plan to fit your goals and budget."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl mb-8">Choose the coaching plan that fits your needs and goals</p>
            
            {/* Billing toggle */}
            <div className="inline-flex items-center bg-background rounded-full p-1 mb-8">
              <button
                className={`py-2 px-6 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === 'month' ? 'bg-primary text-white' : 'text-foreground/70 hover:text-foreground'
                }`}
                onClick={() => setBillingCycle('month')}
              >
                Monthly
              </button>
              <button
                className={`py-2 px-6 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === 'year' ? 'bg-primary text-white' : 'text-foreground/70 hover:text-foreground'
                }`}
                onClick={() => setBillingCycle('year')}
              >
                Annual <span className="text-highlight">Save 15%</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Categories */}
      {pricingCategories.map((category, categoryIndex) => (
        <motion.section 
          key={category.id}
          className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
          ref={pricingAnimation.ref}
          initial="hidden"
          animate={pricingAnimation.controls}
          variants={pricingAnimation.variants}
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{category.title}</h2>
              <p className="text-lg text-foreground/80">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.tiers.map((tier) => {
                // Calculate price based on billing cycle
                const displayPrice = billingCycle === 'year' 
                  ? Math.round(tier.price * 12 * 0.85) 
                  : tier.price;
                
                return (
                  <Card 
                    key={tier.id}
                    className={`overflow-hidden flex flex-col h-full transition-all duration-300 ${
                      tier.isPopular ? 'border-primary shadow-lg relative scale-105 z-10' : 'hover:shadow-md'
                    }`}
                  >
                    {tier.isPopular && (
                      <div className="absolute top-0 right-0">
                        <Badge variant="highlight" className="m-4">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardContent className="p-8 flex-grow">
                      <h3 className="text-2xl font-display font-bold mb-2">{tier.name}</h3>
                      <p className="text-foreground/70 mb-6">{tier.description}</p>
                      
                      <div className="mb-6">
                        <div className="flex items-end">
                          <span className="text-4xl font-bold">${displayPrice}</span>
                          <span className="text-foreground/70 ml-2">
                            /{billingCycle === 'year' ? 'year' : 'month'}
                          </span>
                        </div>
                        {billingCycle === 'year' && (
                          <p className="text-sm text-highlight mt-1">Save ${Math.round(tier.price * 12 * 0.15)} annually</p>
                        )}
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        {tier.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    
                    <CardFooter className="p-8 pt-0">
                      <Button className="w-full" variant={tier.isPopular ? 'primary' : 'outline'}>
                        <Link to="/contact">{tier.cta}</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </motion.section>
      ))}
      
      {/* FAQ Section */}
      <motion.section 
        className="py-16 bg-background"
        ref={faqAnimation.ref}
        initial="hidden"
        animate={faqAnimation.controls}
        variants={faqAnimation.variants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                    <p className="text-foreground/80">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Custom plans section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-lg mb-8">
              We understand that every individual and organization has unique needs. Contact us to discuss a tailored coaching program designed specifically for you.
            </p>
            <Button size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Ready to Invest in Your Growth?"
        subtitle="Take the first step toward achieving your goals with expert coaching support."
        ctaText="Get Started Today"
        ctaLink="/contact"
        secondaryCta={{
          text: "Browse Our Coaches",
          link: "/coaches"
        }}
      />
    </MainLayout>
  );
};

export default PricingPage;
