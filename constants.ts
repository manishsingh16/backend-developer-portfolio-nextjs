import { Experience, Project, SkillCategory } from './types';

export const EMAIL = "manishsj97@gmail.com";
export const PHONE = "+91-8958272723";
export const LINKEDIN = "https://www.linkedin.com/in/manish-kumar-singh-757";
export const LOCATION = "Aligarh, Uttar Pradesh";

export const EXPERIENCES: Experience[] = [
  {
    id: "mamily",
    company: "Mamily",
    role: "Backend Developer",
    period: "Feb 2024 – Present",
    description: "Spearheading the backend architecture for a high-traffic health-tech platform. Focused on system resilience, data integrity, and microservices optimization.",
    achievements: [
      "Optimized API response times by 40% through efficient caching strategies (Redis) and database indexing.",
      "Automated deployment pipelines using CI/CD, reducing deployment time by 60%.",
      "Designed scalable schema for patient health records, ensuring HIPAA compliance and data security.",
      "Integrated complex third-party payment gateways and health data providers."
    ],
    tech: ["Node.js", "Express", "MongoDB", "Redis", "AWS"]
  },
  {
    id: "jpr",
    company: "JPR Technosoft LLP",
    role: "Backend Developer & Team Lead",
    period: "Feb 2021 – Feb 2024",
    description: "Led a team of developers in building enterprise-grade software solutions. Transitioned from junior developer to team lead through consistent delivery of critical modules.",
    achievements: [
      "Architected the core backend logic for the 'Highway App', handling complex fare calculations and geospatial data.",
      "Mentored 5 junior developers, conducting code reviews and enforcing best practices.",
      "Developed RESTful APIs for 'Aaranya Health', serving 10,000+ active users.",
      "Reduced server costs by 25% by optimizing query performance and resource allocation."
    ],
    tech: ["Laravel", "PHP", "MySQL", "Socket.io", "Docker"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "meditation",
    title: "ZenMind Meditation App",
    category: "Mobile Backend",
    description: "A robust backend system for a mindfulness application. Features include real-time session tracking, user progress analytics, and premium subscription management.",
    tech: ["Node.js", "MongoDB", "Express", "JWT Auth"],
    images: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "highway",
    title: "Highway Transit Logic",
    category: "Logistics & Transport",
    description: "Complex fare calculation engine for inter-state transit. Handles dynamic pricing based on distance, vehicle type, and toll taxes in real-time.",
    tech: ["Laravel", "MySQL", "Google Maps API", "Redis"],
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "aaranya",
    title: "Aaranya Health Platform",
    category: "Healthcare",
    description: "Telemedicine platform backend enabling video consultations, prescription management, and secure patient history storage.",
    tech: ["Node.js", "PostgreSQL", "WebRTC", "Socket.io"],
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "service",
    title: "Handy Service Provider",
    category: "On-Demand Marketplace",
    description: "Hyper-local marketplace connecting users with service professionals. Includes geolocation matching and automated booking flows.",
    tech: ["PHP", "Laravel", "MySQL", "Stripe API"],
    images: [
      "https://images.unsplash.com/photo-1581578014828-44da14db6d34?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "edu",
    title: "EduTech Learning API",
    category: "Education",
    description: "Scalable API infrastructure for an online learning management system (LMS), supporting video streaming and quiz engines.",
    tech: ["Node.js", "Express", "AWS S3", "MongoDB"],
    images: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Core",
    skills: ["Node.js", "Laravel (PHP)", "Express.js", "Python", "Microservices"],
    icon: null
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "ElasticSearch"],
    icon: null
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "AWS (EC2, S3)", "Git/GitHub", "CI/CD Pipelines", "Nginx"],
    icon: null
  },
  {
    title: "API Ecosystem",
    skills: ["RESTful APIs", "GraphQL", "WebSockets", "gRPC", "Swagger/OpenAPI"],
    icon: null
  }
];