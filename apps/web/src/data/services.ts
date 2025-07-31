export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  benefits: string[];
  features: {
    title: string;
    description: string;
  }[];
  caseStudies?: {
    name: string;
    position?: string;
    company?: string;
    testimonial: string;
  }[];
}

export const services: Service[] = [
  {
    id: "career-coaching",
    title: "Career Coaching",
    slug: "career-coaching",
    shortDescription: "Navigate career transitions and achieve your professional goals with expert guidance.",
    description: "Our career coaching helps you identify your strengths, clarify your goals, and develop a strategic plan to advance in your career. Whether you're seeking a promotion, changing industries, or starting your own business, our coaches provide personalized guidance to help you succeed.",
    icon: "briefcase",
    benefits: [
      "Gain clarity on your career path and professional goals",
      "Develop strategies to overcome career obstacles",
      "Enhance your resume, interview skills, and personal brand",
      "Navigate career transitions with confidence",
      "Achieve better work-life balance"
    ],
    features: [
      {
        title: "Career Assessment",
        description: "Comprehensive assessment of your skills, values, interests, and work style to identify suitable career paths."
      },
      {
        title: "Job Search Strategy",
        description: "Develop an effective job search strategy, including networking, resume optimization, and interview preparation."
      },
      {
        title: "Salary Negotiation",
        description: "Learn techniques to negotiate competitive compensation packages aligned with your value and market rates."
      },
      {
        title: "Career Advancement Planning",
        description: "Create a strategic plan to advance in your current organization or industry."
      }
    ],
    caseStudies: [
      {
        name: "Mark Thompson",
        position: "Senior Marketing Manager",
        company: "Global Tech Inc.",
        testimonial: "After 10 years in the same role, I felt stuck and unsure how to progress. My career coach helped me identify my transferable skills and create a strategic plan. Within 6 months, I secured a senior position with a 30% salary increase."
      },
      {
        name: "Jennifer Lee",
        position: "UX Designer",
        testimonial: "Career coaching helped me transition from graphic design to UX design. My coach guided me through upskilling, portfolio development, and effective networking. I'm now working in my dream field and couldn't be happier."
      }
    ]
  },
  {
    id: "leadership-coaching",
    title: "Leadership Coaching",
    slug: "leadership-coaching",
    shortDescription: "Develop the skills and mindset to lead effectively and inspire your team to excellence.",
    description: "Our leadership coaching helps current and aspiring leaders develop the skills, strategies, and mindset needed to lead effectively. We focus on enhancing your leadership presence, improving team dynamics, and achieving organizational objectives through people-centered leadership.",
    icon: "users",
    benefits: [
      "Enhance your leadership presence and communication skills",
      "Develop strategies for managing complex team dynamics",
      "Improve decision-making and strategic thinking abilities",
      "Build resilience for handling leadership challenges",
      "Create high-performing, engaged teams"
    ],
    features: [
      {
        title: "Leadership Style Assessment",
        description: "Identify your natural leadership style, strengths, and areas for development."
      },
      {
        title: "Executive Presence Development",
        description: "Enhance your ability to communicate with influence and inspire confidence."
      },
      {
        title: "Team Performance Optimization",
        description: "Learn strategies to build, motivate, and lead high-performing teams."
      },
      {
        title: "Strategic Decision Making",
        description: "Develop frameworks for making effective decisions aligned with organizational goals."
      }
    ],
    caseStudies: [
      {
        name: "Sarah Martinez",
        position: "Director of Operations",
        company: "Healthcare Solutions",
        testimonial: "Leadership coaching transformed how I lead my team of 50+ employees. I learned to delegate effectively, provide constructive feedback, and create a culture of accountability. Employee engagement scores have increased by 40% since I began implementing these changes."
      },
      {
        name: "David Kim",
        position: "New Engineering Manager",
        company: "TechStart Inc.",
        testimonial: "As a first-time manager, I struggled with the transition from technical expert to leader. My coach helped me develop crucial people management skills and balance technical oversight with team development. My team's productivity has increased and turnover has decreased significantly."
      }
    ]
  },
  {
    id: "life-coaching",
    title: "Life Coaching",
    slug: "life-coaching",
    shortDescription: "Create balance, fulfillment, and purpose in all areas of your life with supportive guidance.",
    description: "Our life coaching helps you create balance, fulfillment, and purpose across all areas of your life. We support you in clarifying your personal values and goals, overcoming obstacles, and building habits that lead to greater wellbeing and satisfaction.",
    icon: "heart",
    benefits: [
      "Gain clarity on your personal values and life purpose",
      "Develop strategies to overcome limiting beliefs",
      "Improve work-life balance and overall wellbeing",
      "Build stronger personal relationships",
      "Create sustainable habits for long-term success"
    ],
    features: [
      {
        title: "Life Vision Development",
        description: "Clarify your personal values and create a compelling vision for your ideal life."
      },
      {
        title: "Habit Formation",
        description: "Develop sustainable habits that align with your goals and values."
      },
      {
        title: "Mindset Transformation",
        description: "Identify and overcome limiting beliefs that hold you back from achieving your potential."
      },
      {
        title: "Relationship Enhancement",
        description: "Improve communication and deepen connections in your personal relationships."
      }
    ],
    caseStudies: [
      {
        name: "Michael Roberts",
        testimonial: "Life coaching helped me reassess my priorities and make significant changes. I was working 70+ hours weekly and missing important family moments. My coach helped me create boundaries, improve efficiency, and find purpose beyond work. I now have a fulfilling career AND quality time with my family."
      },
      {
        name: "Priya Sharma",
        testimonial: "After a difficult life transition, I felt lost and uncertain about my future. Through life coaching, I gained clarity about my values and rebuilt my confidence. I've since started a new hobby, expanded my social circle, and feel a renewed sense of purpose."
      }
    ]
  },
  {
    id: "business-coaching",
    title: "Business Coaching",
    slug: "business-coaching",
    shortDescription: "Accelerate your business growth with strategic guidance and accountability.",
    description: "Our business coaching helps entrepreneurs and business leaders overcome challenges, optimize operations, and achieve sustainable growth. We provide strategic guidance, accountability, and practical tools to help you build a thriving business aligned with your vision and values.",
    icon: "building",
    benefits: [
      "Develop a clear business strategy and growth plan",
      "Improve operational efficiency and profitability",
      "Enhance leadership and management capabilities",
      "Navigate business challenges with confidence",
      "Achieve better work-life balance as a business owner"
    ],
    features: [
      {
        title: "Business Strategy Development",
        description: "Create a clear roadmap for sustainable business growth aligned with your vision."
      },
      {
        title: "Systems Optimization",
        description: "Identify and implement efficient systems and processes to improve operations."
      },
      {
        title: "Financial Performance",
        description: "Analyze and improve key financial metrics to enhance profitability."
      },
      {
        title: "Team Development",
        description: "Build and lead a high-performing team aligned with your business goals."
      }
    ],
    caseStudies: [
      {
        name: "James Wilson",
        position: "Founder & CEO",
        company: "Innovative Solutions",
        testimonial: "Business coaching helped me transition from solopreneur to leading a team of 12. My coach guided me through creating systems, delegating effectively, and focusing on high-impact activities. Our revenue has tripled in 18 months, and I'm working fewer hours than before."
      },
      {
        name: "Laura Chen",
        position: "Co-owner",
        company: "Wellness Studio",
        testimonial: "Our business was surviving but not thriving. Through coaching, we clarified our unique value proposition, improved our marketing strategy, and optimized our service offerings. We've increased our client base by 65% and significantly improved our profit margins."
      }
    ]
  },
  {
    id: "executive-coaching",
    title: "Executive Coaching",
    slug: "executive-coaching",
    shortDescription: "Enhance your executive presence and strategic thinking to lead at the highest levels.",
    description: "Our executive coaching helps C-suite executives and senior leaders navigate complex challenges, enhance their leadership effectiveness, and achieve organizational objectives. We provide confidential, personalized support to help you lead with greater impact and authenticity.",
    icon: "crown",
    benefits: [
      "Enhance your strategic thinking and decision-making abilities",
      "Develop a powerful executive presence and communication style",
      "Navigate organizational politics and stakeholder relationships",
      "Lead organizational change and innovation effectively",
      "Achieve sustainable high performance without burnout"
    ],
    features: [
      {
        title: "360-Degree Leadership Assessment",
        description: "Gain comprehensive insights into your leadership effectiveness from multiple perspectives."
      },
      {
        title: "Strategic Leadership Development",
        description: "Enhance your ability to think strategically and lead complex organizational initiatives."
      },
      {
        title: "Stakeholder Management",
        description: "Develop strategies for influencing and aligning diverse stakeholders toward common goals."
      },
      {
        title: "Resilience and Wellbeing",
        description: "Build sustainable high performance practices to lead effectively under pressure."
      }
    ],
    caseStudies: [
      {
        name: "Robert Chang",
        position: "Chief Financial Officer",
        company: "Enterprise Solutions",
        testimonial: "Executive coaching helped me transition from technical expert to strategic leader. I've improved my ability to communicate complex financial information to non-financial stakeholders and become a more influential member of the executive team."
      },
      {
        name: "Elena Rodriguez",
        position: "Chief Executive Officer",
        company: "Global Innovations",
        testimonial: "The weight of leading a 500-person company was taking its toll. My executive coach helped me prioritize effectively, delegate appropriately, and communicate my vision more clearly. Both company performance and my work satisfaction have improved significantly."
      }
    ]
  },
  {
    id: "wellness-coaching",
    title: "Wellness Coaching",
    slug: "wellness-coaching",
    shortDescription: "Achieve optimal health and wellbeing through sustainable lifestyle changes.",
    description: "Our wellness coaching helps you achieve optimal physical and mental wellbeing through sustainable lifestyle changes. We support you in developing healthy habits, managing stress, and creating a balanced approach to nutrition, exercise, sleep, and self-care.",
    icon: "activity",
    benefits: [
      "Develop sustainable healthy habits that fit your lifestyle",
      "Improve energy levels and productivity",
      "Reduce stress and enhance mental wellbeing",
      "Achieve and maintain a healthy weight",
      "Create better work-life balance and prevent burnout"
    ],
    features: [
      {
        title: "Wellness Assessment",
        description: "Comprehensive evaluation of current health habits and identification of key areas for improvement."
      },
      {
        title: "Personalized Wellness Plan",
        description: "Develop a realistic plan addressing nutrition, physical activity, sleep, and stress management."
      },
      {
        title: "Habit Formation",
        description: "Implement evidence-based strategies for creating lasting healthy habits."
      },
      {
        title: "Stress Management",
        description: "Learn effective techniques to reduce stress and improve mental wellbeing."
      }
    ],
    caseStudies: [
      {
        name: "Thomas Wilson",
        position: "Senior Software Engineer",
        testimonial: "As a busy professional, I struggled to maintain healthy habits. My wellness coach helped me create a sustainable routine that works with my schedule. I've lost 25 pounds, sleep better, and have significantly more energy throughout the day."
      },
      {
        name: "Maria Garcia",
        position: "Marketing Director",
        testimonial: "I was on the verge of burnout when I started wellness coaching. Through small, consistent changes to my diet, exercise, and stress management practices, I've transformed my health and productivity. I'm happier, more effective at work, and finally have energy for my personal life."
      }
    ]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
