import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
  secondaryCta?: {
    text: string;
    link: string;
  };
  backgroundClass?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCta,
  backgroundClass = 'bg-primary/10',
}) => {
  return (
    <section className={`py-16 ${backgroundClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl mb-8 text-foreground/80">
              {subtitle}
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
            
            {secondaryCta && (
              <Button variant="outline" size="lg">
                <Link to={secondaryCta.link}>{secondaryCta.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
