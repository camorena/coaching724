export interface CoachSpecialty {
  id: string;
  name: string;
}

export interface CoachTestimonial {
  id: string;
  text: string;
  author: string;
  position?: string;
  company?: string;
  rating: number;
}

export interface Coach {
  id: string;
  slug: string;
  name: string;
  title: string;
  avatar: string;
  coverImage?: string;
  bio: string;
  shortBio: string;
  specialties: string[];
  experience: number;
  education: string[];
  certifications: string[];
  approach: string;
  languages: string[];
  hourlyRate: number;
  availability: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
    evenings: boolean;
    weekends: boolean;
  };
  testimonials: CoachTestimonial[];
  location: string;
  remote: boolean;
  featured?: boolean;
}

export const coachSpecialties: CoachSpecialty[] = [
  { id: 'career-development', name: 'Career Development' },
  { id: 'leadership', name: 'Leadership' },
  { id: 'executive-coaching', name: 'Executive Coaching' },
  { id: 'life-coaching', name: 'Life Coaching' },
  { id: 'business-coaching', name: 'Business Coaching' },
  { id: 'team-coaching', name: 'Team Coaching' },
  { id: 'performance-coaching', name: 'Performance Coaching' },
  { id: 'wellness-coaching', name: 'Wellness Coaching' },
  { id: 'communication-skills', name: 'Communication Skills' },
  { id: 'work-life-balance', name: 'Work-Life Balance' },
  { id: 'stress-management', name: 'Stress Management' },
  { id: 'transition-coaching', name: 'Transition Coaching' }
];

export const coaches: Coach[] = [
  {
    id: "1",
    slug: "michael-johnson",
    name: "Michael Johnson",
    title: "Executive Leadership Coach",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "Michael Johnson is an executive leadership coach with over 20 years of experience working with C-suite executives and senior leaders across industries. As a former CEO himself, Michael brings practical insight and empathy to leadership challenges.\n\nHis coaching approach combines strategic thinking with emotional intelligence development, helping leaders navigate complex organizational dynamics while building authentic leadership presence. Michael specializes in executive transitions, strategic leadership, and building high-performing executive teams.\n\nPrior to becoming a coach, Michael held leadership positions at Fortune 500 companies including IBM and Microsoft. He holds an MBA from Wharton and has completed advanced coaching certification through the International Coach Federation. His clients include executives at companies ranging from fast-growing startups to multinational corporations.",
    shortBio: "Former CEO turned executive coach helping senior leaders navigate complex challenges with strategic thinking and emotional intelligence.",
    specialties: ['executive-coaching', 'leadership', 'communication-skills'],
    experience: 20,
    education: [
      "MBA, Wharton School of Business",
      "B.S. Business Administration, University of Michigan"
    ],
    certifications: [
      "Professional Certified Coach (PCC), International Coach Federation",
      "Certified Leadership Coach, Center for Executive Coaching"
    ],
    approach: "My coaching approach integrates strategic business insight with leadership presence development. I believe effective leaders need both business acumen and emotional intelligence to succeed in today's complex environment. I work collaboratively with clients to identify specific leadership challenges, develop practical strategies, and build sustainable leadership habits that drive results while staying true to personal values.",
    languages: ["English", "Spanish"],
    hourlyRate: 350,
    availability: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false,
      evenings: true,
      weekends: false
    },
    testimonials: [
      {
        id: "1",
        text: "Michael's coaching was transformative for my leadership approach. His combination of business strategy and emotional intelligence development helped me navigate a challenging company restructuring while building stronger relationships with my team. I'm now leading with greater confidence and clarity.",
        author: "Sarah Chen",
        position: "Chief Operating Officer",
        company: "TechVision Inc.",
        rating: 5
      },
      {
        id: "2",
        text: "As a new CEO, I was facing significant challenges with board dynamics and strategic direction. Michael's experience as a former CEO himself was invaluable. He helped me navigate complex stakeholder relationships while staying focused on our long-term vision. His coaching has been instrumental to my success in this role.",
        author: "David Rodriguez",
        position: "CEO",
        company: "InnovateSoft",
        rating: 5
      }
    ],
    location: "San Francisco, CA",
    remote: true,
    featured: true
  },
  {
    id: "2",
    slug: "jennifer-williams",
    name: "Jennifer Williams",
    title: "Career Transition Coach",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    coverImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "Jennifer Williams specializes in helping professionals navigate career transitions with confidence and clarity. With 15 years of experience spanning corporate HR, recruitment, and coaching, she brings a comprehensive understanding of career development and job market dynamics.\n\nJennifer has supported hundreds of clients through career pivots, promotions, and industry changes. Her expertise includes career assessment, personal branding, interview preparation, and strategic networking. She excels at helping clients identify transferable skills and articulate their unique value proposition.\n\nBefore establishing her coaching practice, Jennifer worked as a senior HR director for a global consulting firm and as a talent acquisition manager in the tech industry. She holds a master's degree in Organizational Psychology from Columbia University and multiple career coaching certifications.",
    shortBio: "Career transition specialist with HR background helping professionals find clarity, confidence, and success in their next career move.",
    specialties: ['career-development', 'transition-coaching', 'life-coaching'],
    experience: 15,
    education: [
      "M.A. Organizational Psychology, Columbia University",
      "B.A. Psychology, University of California, Berkeley"
    ],
    certifications: [
      "Certified Career Coach, Career Development Alliance",
      "Myers-Briggs Type Indicator (MBTI) Certified Practitioner",
      "Strengths Deployment Inventory Facilitator"
    ],
    approach: "I believe successful career transitions require both tactical job search strategies and inner clarity work. My coaching process begins with comprehensive assessment to identify values, strengths, and goals. We then develop a strategic action plan while addressing limiting beliefs and building confidence. I provide a supportive yet challenging environment, balancing accountability with empathy. My clients gain not just a new role, but a renewed sense of purpose and career ownership.",
    languages: ["English", "French"],
    hourlyRate: 225,
    availability: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: true,
      sunday: false,
      evenings: true,
      weekends: true
    },
    testimonials: [
      {
        id: "1",
        text: "Working with Jennifer was the best investment I've made in my career. After 12 years in finance, I was burned out and uncertain about my next step. Jennifer guided me through a structured process that helped me identify my transferable skills and explore new industries. Six months later, I successfully transitioned to a fulfilling role in healthcare technology with a better work-life balance.",
        author: "Mark Sanchez",
        position: "Program Manager",
        company: "HealthTech Solutions",
        rating: 5
      },
      {
        id: "2",
        text: "Jennifer's coaching was instrumental during my career pivot. Her approach combines practical job search strategies with deep personal development work. She helped me overcome imposter syndrome and clearly articulate my value proposition when changing industries. I'm now in a role that better aligns with my strengths and values, with a 30% salary increase!",
        author: "Priya Patel",
        position: "Marketing Director",
        rating: 5
      }
    ],
    location: "New York, NY",
    remote: true,
    featured: true
  },
  {
    id: "3",
    slug: "david-rodriguez",
    name: "David Rodriguez",
    title: "Leadership & Team Development Coach",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "David Rodriguez is a leadership and team development coach with 18 years of experience helping organizations build cohesive, high-performing teams. With a background in organizational psychology and experience as a senior HR executive, David brings both theoretical knowledge and practical experience to his coaching practice.\n\nDavid specializes in team dynamics, conflict resolution, and collaborative leadership. He has worked with diverse teams across industries, from startups to Fortune 500 companies. His coaching programs have been implemented at organizations including Salesforce, Adobe, and Johnson & Johnson.\n\nBefore establishing his coaching practice, David served as Vice President of Leadership Development at a global technology company, where he designed and implemented leadership programs for over 5,000 managers. He holds a PhD in Organizational Psychology and maintains multiple team coaching certifications.",
    shortBio: "Team development specialist transforming group dynamics and building collaborative leadership skills across organizations.",
    specialties: ['team-coaching', 'leadership', 'communication-skills'],
    experience: 18,
    education: [
      "Ph.D. Organizational Psychology, Stanford University",
      "M.S. Human Resources Management, Cornell University",
      "B.A. Psychology, University of Texas"
    ],
    certifications: [
      "Team Coaching International Certified Team Coach",
      "Certified Leadership Coach, International Coach Federation",
      "Certified in The Five Behaviors of a Cohesive Team™"
    ],
    approach: "My coaching approach focuses on systems thinking - understanding that teams are complex systems where individual behaviors, interpersonal dynamics, and organizational context all interact. I begin by assessing team dynamics through observation, interviews, and validated assessments. Based on this data, I design customized interventions that build psychological safety, clarify purpose, establish productive norms, and develop collaborative leadership practices. I believe sustainable team performance comes from a foundation of trust, healthy conflict, and shared accountability.",
    languages: ["English", "Spanish", "Portuguese"],
    hourlyRate: 275,
    availability: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false,
      evenings: false,
      weekends: false
    },
    testimonials: [
      {
        id: "1",
        text: "David transformed our executive team from a group of functional leaders to a truly cohesive leadership team. His approach addressed both our strategic alignment and our interpersonal dynamics. Six months after our work with David, we've seen measurable improvements in decision-making speed, cross-functional collaboration, and overall business results.",
        author: "Elena Gonzalez",
        position: "Chief Executive Officer",
        company: "Nexus Innovations",
        rating: 5
      },
      {
        id: "2",
        text: "Our team was struggling with conflict avoidance and siloed thinking. David's team coaching program helped us establish new norms for productive disagreement and collaborative problem-solving. His systems approach addressed both individual behaviors and team structures. We now have healthier conflict, better decisions, and stronger relationships.",
        author: "James Chen",
        position: "VP Engineering",
        company: "TechSolutions Inc.",
        rating: 5
      }
    ],
    location: "Austin, TX",
    remote: true
  },
  {
    id: "4",
    slug: "sophia-patel",
    name: "Sophia Patel",
    title: "Wellness & Performance Coach",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    coverImage: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "Sophia Patel is a wellness and performance coach who helps busy professionals optimize their wellbeing while achieving sustainable high performance. With a background in clinical psychology, nutrition, and performance science, Sophia brings an integrative approach to personal and professional development.\n\nSophia specializes in stress management, burnout prevention, work-life integration, and building resilience. She has worked with clients ranging from startup founders to corporate executives, helping them develop personalized wellbeing practices that enhance both health and performance.\n\nBefore focusing on coaching, Sophia worked as a wellness director for a global technology company and as a research associate studying the intersection of wellbeing and performance. She holds a master's degree in Positive Psychology from the University of Pennsylvania and multiple certifications in health coaching and mindfulness instruction.",
    shortBio: "Integrative wellness coach helping ambitious professionals achieve sustainable high performance through evidence-based wellbeing practices.",
    specialties: ['wellness-coaching', 'stress-management', 'work-life-balance'],
    experience: 12,
    education: [
      "M.A. Positive Psychology, University of Pennsylvania",
      "B.S. Psychology and Nutritional Sciences, Cornell University"
    ],
    certifications: [
      "National Board Certified Health & Wellness Coach",
      "Certified Mindfulness Instructor, Mindfulness-Based Stress Reduction",
      "Certified Sleep Science Coach",
      "Precision Nutrition Level 2 Coach"
    ],
    approach: "My coaching approach integrates evidence-based wellbeing practices with performance psychology. I believe that sustainable high performance requires a foundation of physical health, emotional regulation, and cognitive resilience. I work with clients to identify their unique stress patterns and energy drains, then develop personalized strategies for nutrition, movement, sleep, mindfulness, and boundaries. Unlike one-size-fits-all wellness programs, my approach is tailored to each client's biology, psychology, and life circumstances.",
    languages: ["English", "Hindi", "Gujarati"],
    hourlyRate: 200,
    availability: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: true,
      sunday: false,
      evenings: true,
      weekends: true
    },
    testimonials: [
      {
        id: "1",
        text: "Working with Sophia transformed my relationship with stress and performance. As a startup founder, I was burning out from 80-hour weeks and constant pressure. Sophia helped me implement science-based practices for sleep, nutrition, and stress management that actually fit my busy schedule. I'm now more productive than ever while working fewer hours and enjoying better health.",
        author: "Alex Nouri",
        position: "Founder & CEO",
        company: "FinTech Innovations",
        rating: 5
      },
      {
        id: "2",
        text: "After a health scare related to work stress, I knew I needed to make changes. Sophia's integrated approach helped me understand how my mindset, physical habits, and work boundaries were all connected. She created a personalized plan that addressed my specific challenges as an executive. Six months later, my blood pressure is normal, I'm sleeping better, and I'm actually more effective at work.",
        author: "Michelle Johnson",
        position: "Chief Marketing Officer",
        rating: 5
      }
    ],
    location: "Los Angeles, CA",
    remote: true,
    featured: true
  },
  {
    id: "5",
    slug: "marcus-thompson",
    name: "Marcus Thompson",
    title: "Business & Entrepreneurship Coach",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "Marcus Thompson is a business and entrepreneurship coach who helps founders and small business owners build sustainable, profitable businesses aligned with their vision and values. With experience as a three-time founder, venture capitalist, and business consultant, Marcus brings both strategic insight and practical operational knowledge to his coaching.\n\nMarcus specializes in business model development, strategic planning, financial sustainability, and founder mindset. He has worked with entrepreneurs across industries, from early-stage startups to established businesses looking to scale or pivot.\n\nBefore focusing on coaching, Marcus founded and grew a technology company to $20M in annual revenue before a successful acquisition. He subsequently worked as a venture partner at a Silicon Valley VC firm, where he advised portfolio companies. He holds an MBA from Stanford and has completed specialized training in business coaching methodologies.",
    shortBio: "Experienced entrepreneur and investor helping founders build sustainable, profitable businesses aligned with their vision and values.",
    specialties: ['business-coaching', 'executive-coaching', 'leadership'],
    experience: 15,
    education: [
      "MBA, Stanford Graduate School of Business",
      "B.S. Economics, University of Pennsylvania"
    ],
    certifications: [
      "Certified Business Coach, Worldwide Association of Business Coaches",
      "EOS Implementer® Certified",
      "Certified Exit Planning Advisor"
    ],
    approach: "My coaching approach blends strategic business frameworks with founder psychology. I believe building a successful business requires both sound strategy and the right mindset. I work with clients to clarify their vision, develop actionable business strategies, and build the leadership skills needed for execution. My process includes regular assessment of key performance indicators alongside attention to the personal growth required for entrepreneurial success. As a former founder myself, I bring empathy for the entrepreneurial journey along with practical tools for business growth.",
    languages: ["English"],
    hourlyRate: 300,
    availability: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false,
      evenings: true,
      weekends: false
    },
    testimonials: [
      {
        id: "1",
        text: "Marcus's coaching was instrumental in helping me scale my business from $500K to $3M in annual revenue. His combination of strategic frameworks and founder psychology helped me overcome growth barriers and build a stronger leadership team. What sets Marcus apart is his hands-on founder experience - he's been through the challenges himself and provides practical, battle-tested advice.",
        author: "Samantha Lee",
        position: "Founder & CEO",
        company: "Sustainable Home Goods",
        rating: 5
      },
      {
        id: "2",
        text: "When my business hit a plateau, I was working 70-hour weeks with declining profits. Marcus helped me restructure my business model, improve my pricing strategy, and build systems that reduced my personal workload. Within six months, our profitability increased by 40% while I cut my working hours by a third. His coaching transformed both my business and my quality of life.",
        author: "Devon Williams",
        position: "Owner",
        company: "Williams Design Collective",
        rating: 5
      }
    ],
    location: "Chicago, IL",
    remote: true
  },
  {
    id: "6",
    slug: "olivia-chen",
    name: "Olivia Chen",
    title: "Communication & Influence Coach",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    coverImage: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "Olivia Chen is a communication and influence coach who helps leaders and professionals communicate with clarity, confidence, and impact. With a background in communications, psychology, and performing arts, Olivia brings a unique perspective to professional communication development.\n\nOlivia specializes in executive presence, presentation skills, difficult conversations, and strategic influence. She has worked with clients ranging from emerging leaders to C-suite executives across industries, helping them enhance their communication effectiveness in high-stakes situations.\n\nBefore establishing her coaching practice, Olivia worked as a communications director for a global nonprofit and as a communications consultant for Fortune 500 companies. She holds a master's degree in Organizational Communication from Northwestern University and has trained in various communication methodologies including rhetoric, storytelling, and nonverbal communication.",
    shortBio: "Communication specialist helping professionals express themselves with clarity, confidence, and influence in high-stakes situations.",
    specialties: ['communication-skills', 'leadership', 'executive-coaching'],
    experience: 14,
    education: [
      "M.S. Organizational Communication, Northwestern University",
      "B.A. Psychology and Theatre, Yale University"
    ],
    certifications: [
      "Certified Professional Co-Active Coach (CPCC)",
      "Advanced Storytelling for Business, Ira Glass Method",
      "Crucial Conversations® Certified Trainer"
    ],
    approach: "My coaching approach integrates communication science with performance techniques. I believe effective communication is both an art and a science - requiring both technical skill and authentic presence. I work with clients to identify their unique communication patterns, develop their authentic voice, and master the frameworks for different communication contexts. My process often includes video recording and detailed feedback to accelerate improvement. I focus not just on what clients say, but how they say it through vocal quality, body language, and emotional connection.",
    languages: ["English", "Mandarin Chinese"],
    hourlyRate: 250,
    availability: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false,
      evenings: true,
      weekends: false
    },
    testimonials: [
      {
        id: "1",
        text: "Olivia transformed my public speaking from a source of anxiety to a professional strength. Her approach addressed both the technical aspects of presentation and the mindset challenges I was facing. The video analysis and specific feedback accelerated my improvement dramatically. I recently delivered the keynote at our industry conference and received outstanding feedback.",
        author: "Jonathan Taylor",
        position: "Chief Technology Officer",
        company: "DataSystems Inc.",
        rating: 5
      },
      {
        id: "2",
        text: "Working with Olivia helped me navigate a challenging leadership transition. As a technical expert promoted to a leadership role, I struggled with executive presence and strategic communication. Olivia helped me develop a more influential communication style while staying authentic to my values. Her coaching on difficult conversations was particularly valuable as I built relationships with my new peer group.",
        author: "Maya Sanchez",
        position: "VP Engineering",
        rating: 5
      }
    ],
    location: "Boston, MA",
    remote: true
  },
  {
    id: "7",
    slug: "james-wilson",
    name: "James Wilson",
    title: "Life & Purpose Coach",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    coverImage: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "James Wilson is a life and purpose coach who helps individuals create lives of meaning, fulfillment, and authentic success. With a background in positive psychology, philosophy, and contemplative practices, James brings depth and breadth to personal development work.\n\nJames specializes in life transitions, purpose discovery, values clarification, and authentic living. He works with professionals at all stages of life who seek greater alignment between their external success and inner fulfillment.\n\nBefore establishing his coaching practice, James worked in international development and as a program director for a leadership institute. His transition from a conventional career path to purpose-driven work informs his coaching approach with real-world wisdom. He holds a master's degree in Applied Positive Psychology and has trained in various coaching and contemplative methodologies.",
    shortBio: "Purpose-focused coach helping individuals align their lives with their deepest values and create authentic success.",
    specialties: ['life-coaching', 'transition-coaching', 'work-life-balance'],
    experience: 10,
    education: [
      "M.A. Applied Positive Psychology, University of Pennsylvania",
      "B.A. Philosophy, Georgetown University"
    ],
    certifications: [
      "Certified Coach, International Coach Federation (PCC level)",
      "Designing Your Life Coach, Stanford Life Design Studio",
      "Certified Positive Psychology Practitioner"
    ],
    approach: "My coaching approach integrates evidence-based positive psychology with contemplative wisdom traditions. I believe that meaningful life design emerges from deep self-knowledge, clear values, and intentional action. I guide clients through a process of inner exploration to clarify values and purpose, followed by practical life design to align external circumstances with internal values. My coaching combines reflective exercises, structured frameworks, and accountable action to create sustainable life changes. I emphasize both being and doing - cultivating inner clarity while taking practical steps toward a more aligned life.",
    languages: ["English"],
    hourlyRate: 175,
    availability: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: false,
      saturday: true,
      sunday: false,
      evenings: true,
      weekends: true
    },
    testimonials: [
      {
        id: "1",
        text: "Working with James was transformative during my mid-career transition. Despite external success, I felt increasingly disconnected from my work and uncertain about my path forward. James guided me through a profound process of reconnecting with my values and rediscovering purpose. His approach balanced deep reflection with practical action steps. I've now transitioned to a new field that aligns with my purpose while maintaining financial stability.",
        author: "Rebecca Thompson",
        position: "Program Director",
        company: "Environmental Initiative",
        rating: 5
      },
      {
        id: "2",
        text: "After achieving the career goals I had set in my thirties, I found myself successful but unfulfilled at 45. James helped me understand that my definition of success needed to evolve. His coaching combined philosophical depth with practical exercises that led to concrete life changes. I've maintained my executive role but have restructured my life to include more of what truly matters to me. I now have greater meaning without sacrificing achievement.",
        author: "Michael Chen",
        position: "Chief Financial Officer",
        rating: 5
      }
    ],
    location: "Portland, OR",
    remote: true
  },
  {
    id: "8",
    slug: "elena-rodriguez",
    name: "Elena Rodriguez",
    title: "Diversity & Inclusion Leadership Coach",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    coverImage: "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "Elena Rodriguez is a diversity and inclusion leadership coach who helps organizations and leaders create more equitable, inclusive workplaces where all team members can thrive. With a background in organizational development, social justice, and leadership psychology, Elena brings both systemic understanding and practical strategies to diversity and inclusion work.\n\nElena specializes in inclusive leadership development, cultural competence, bias mitigation, and organizational culture change. She works with leaders at all levels who are committed to advancing equity and inclusion within their spheres of influence.\n\nBefore establishing her coaching practice, Elena served as a diversity officer for a Fortune 100 company and as a consultant for organizations implementing culture change initiatives. She holds a master's degree in Social-Organizational Psychology from Columbia University and multiple certifications in diversity, equity, and inclusion methodologies.",
    shortBio: "Equity-focused coach helping leaders and organizations create inclusive cultures where diverse teams thrive.",
    specialties: ['leadership', 'team-coaching', 'communication-skills'],
    experience: 12,
    education: [
      "M.A. Social-Organizational Psychology, Columbia University",
      "B.A. Sociology and Ethnic Studies, University of California, Berkeley"
    ],
    certifications: [
      "Certified Diversity Professional, National Diversity Council",
      "Intercultural Development Inventory (IDI) Qualified Administrator",
      "Georgetown University Certificate in Strategic Diversity and Inclusion Management"
    ],
    approach: "My coaching approach integrates evidence-based inclusion practices with adaptive leadership development. I believe effective inclusive leadership requires both systems thinking and personal growth work. I help leaders develop awareness of systemic inequities and personal biases, while building practical skills for creating inclusive environments. My coaching process often includes assessment, experiential learning, and real-world application. I emphasize both accountability and compassion, recognizing that inclusion work requires both structural change and individual development.",
    languages: ["English", "Spanish"],
    hourlyRate: 225,
    availability: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false,
      evenings: true,
      weekends: false
    },
    testimonials: [
      {
        id: "1",
        text: "Elena's coaching was transformative for our leadership team's approach to inclusion. She helped us move beyond superficial diversity initiatives to address the systemic and interpersonal dynamics affecting equity in our organization. Her coaching combined challenging conversations with practical strategies we could implement immediately. Our employee engagement scores among underrepresented groups have increased significantly since working with Elena.",
        author: "Robert Chen",
        position: "Chief People Officer",
        company: "Global Innovations",
        rating: 5
      },
      {
        id: "2",
        text: "As a senior leader committed to creating a more inclusive culture, I sought Elena's coaching to strengthen my effectiveness. She helped me recognize my blind spots and develop more inclusive leadership practices. Her approach was both supportive and challenging, providing a safe space to explore difficult topics while holding me accountable for growth. I'm now better equipped to foster belonging across differences and address inequities in our systems.",
        author: "Lakshmi Patel",
        position: "Senior Vice President",
        rating: 5
      }
    ],
    location: "Washington, DC",
    remote: true
  }
];

export const getCoachBySlug = (slug: string): Coach | undefined => {
  return coaches.find(coach => coach.slug === slug);
};

export const getCoachesBySpecialty = (specialtyId: string): Coach[] => {
  return coaches.filter(coach => coach.specialties.includes(specialtyId));
};

export const getFeaturedCoaches = (): Coach[] => {
  return coaches.filter(coach => coach.featured);
};
