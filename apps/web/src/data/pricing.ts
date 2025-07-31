export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
  isPopular?: boolean;
  cta: string;
  discountPercentage?: number;
  originalPrice?: number;
}

export interface PricingCategory {
  id: string;
  title: string;
  description: string;
  tiers: PricingTier[];
}

export const pricingCategories: PricingCategory[] = [
  {
    id: 'individual',
    title: 'Individual Coaching',
    description: 'One-on-one coaching sessions tailored to your specific needs and goals.',
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        description: 'Perfect for individuals just beginning their coaching journey',
        price: 199,
        interval: 'month',
        features: [
          '2 coaching sessions per month',
          '45-minute sessions',
          'Email support between sessions',
          'Access to resource library',
          'Session notes and action items',
          'Monthly progress review'
        ],
        cta: 'Get Started'
      },
      {
        id: 'professional',
        name: 'Professional',
        description: 'Our most popular plan for focused individual development',
        price: 349,
        interval: 'month',
        features: [
          '4 coaching sessions per month',
          '60-minute sessions',
          'Priority email support',
          'Full access to resource library',
          'Detailed session notes and action plans',
          'Bi-weekly progress reviews',
          'Personalized development exercises',
          'Access to workshops and webinars'
        ],
        isPopular: true,
        cta: 'Sign Up Now'
      },
      {
        id: 'executive',
        name: 'Executive',
        description: 'Comprehensive support for senior leaders and executives',
        price: 649,
        interval: 'month',
        features: [
          '4 coaching sessions per month',
          '90-minute sessions',
          '24/7 email and messaging support',
          'Emergency coaching calls',
          'Full access to premium resources',
          'Weekly progress tracking',
          'Customized leadership assessments',
          'Team dynamics consultation',
          'Stakeholder interviews (optional)',
          'Quarterly strategy sessions'
        ],
        cta: 'Contact Us'
      }
    ]
  },
  {
    id: 'group',
    title: 'Group Coaching',
    description: 'Cost-effective coaching in small groups with peers facing similar challenges.',
    tiers: [
      {
        id: 'basic-group',
        name: 'Basic Group',
        description: 'Small group coaching for shared learning and growth',
        price: 99,
        interval: 'month',
        features: [
          'Weekly group sessions (4-8 participants)',
          '90-minute sessions',
          'Shared learning environment',
          'Peer accountability',
          'Basic resource access',
          'Community discussion forum'
        ],
        cta: 'Join a Group'
      },
      {
        id: 'premium-group',
        name: 'Premium Group',
        description: 'Enhanced group coaching with additional individual support',
        price: 179,
        interval: 'month',
        features: [
          'Weekly group sessions (4-6 participants)',
          '90-minute sessions',
          'Monthly 1-on-1 coaching session',
          'Full resource library access',
          'Priority community support',
          'Group and individual action plans',
          'Personalized feedback',
          'Access to workshops and webinars'
        ],
        isPopular: true,
        cta: 'Upgrade Now'
      },
      {
        id: 'mastermind',
        name: 'Mastermind',
        description: 'Exclusive high-level group for leaders and entrepreneurs',
        price: 349,
        interval: 'month',
        features: [
          'Bi-weekly mastermind sessions (4-6 participants)',
          '2-hour intensive sessions',
          'Monthly 1-on-1 strategic coaching',
          'Hot seat coaching opportunities',
          'Executive resource access',
          'Accountability partnerships',
          'Business growth frameworks',
          'Network with high-performers',
          'Quarterly planning workshops',
          'Guest expert sessions'
        ],
        cta: 'Apply Now'
      }
    ]
  },
  {
    id: 'corporate',
    title: 'Corporate Programs',
    description: 'Customized coaching programs for teams and organizations.',
    tiers: [
      {
        id: 'team-essentials',
        name: 'Team Essentials',
        description: 'Foundational coaching for small teams',
        price: 1499,
        interval: 'month',
        features: [
          'Up to 5 team members',
          'Monthly team coaching session',
          '2 individual sessions per member',
          'Team assessment and analysis',
          'Customized development plan',
          'Shared resource access',
          'Quarterly progress reviews'
        ],
        cta: 'Get Team Started'
      },
      {
        id: 'leadership-accelerator',
        name: 'Leadership Accelerator',
        description: 'Comprehensive program for developing leadership teams',
        price: 2999,
        interval: 'month',
        features: [
          'Up to 10 team members',
          'Bi-weekly team coaching sessions',
          '4 individual sessions per member',
          'Leadership assessments',
          'Team dynamics workshop',
          'Conflict resolution training',
          'Communication enhancement',
          'Strategic planning support',
          'Monthly progress tracking',
          'Executive summary reports'
        ],
        isPopular: true,
        cta: 'Accelerate Your Team'
      },
      {
        id: 'enterprise-solutions',
        name: 'Enterprise Solutions',
        description: 'Custom coaching solutions for larger organizations',
        price: 0,
        interval: 'month',
        features: [
          'Customized program design',
          'Scalable to organization size',
          'Multiple coaching formats',
          'Organization-wide assessments',
          'Integration with existing L&D',
          'Progress measurement and ROI',
          'Executive briefings',
          'Change management support',
          'Culture transformation',
          'Sustainable development framework'
        ],
        cta: 'Request Custom Quote'
      }
    ]
  }
];

export const getAllPricingTiers = (): PricingTier[] => {
  return pricingCategories.flatMap(category => category.tiers);
};

export const getPricingTierById = (id: string): PricingTier | undefined => {
  return getAllPricingTiers().find(tier => tier.id === id);
};
