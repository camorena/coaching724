import React from 'react';
import { GlassCard } from '../ui/glass-card';

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeaturesSectionProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title,
  subtitle,
  features,
  columns = 3,
}) => {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {title}
          </h2>
          {subtitle && <p className="text-lg text-foreground/80">{subtitle}</p>}
        </div>

        <div className={`grid ${gridCols[columns]} gap-8`}>
          {features.map((feature, index) => (
            <GlassCard
              key={index}
              className="p-6 transition-all duration-300 hover:scale-105"
            >
              {feature.icon && (
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                </div>
              )}
              <h3 className="text-xl font-display font-semibold text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-center text-foreground/80">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
