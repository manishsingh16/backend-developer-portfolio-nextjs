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
    image: "https://picsum.photos/seed/meditation/800/600"
  },
  {
    id: "highway",
    title: "Highway Transit Logic",
    category: "Logistics & Transport",
    description: "Complex fare calculation engine for inter-state transit. Handles dynamic pricing based on distance, vehicle type, and toll taxes in real-time.",
    tech: ["Laravel", "MySQL", "Google Maps API", "Redis"],
    image: "https://picsum.photos/seed/highway/800/600"
  },
  {
    id: "aaranya",
    title: "Aaranya Health Platform",
    category: "Healthcare",
    description: "Telemedicine platform backend enabling video consultations, prescription management, and secure patient history storage.",
    tech: ["Node.js", "PostgreSQL", "WebRTC", "Socket.io"],
    image: "https://picsum.photos/seed/health/800/600"
  },
  {
    id: "service",
    title: "Handy Service Provider",
    category: "On-Demand Marketplace",
    description: "Hyper-local marketplace connecting users with service professionals. Includes geolocation matching and automated booking flows.",
    tech: ["PHP", "Laravel", "MySQL", "Stripe API"],
    image: "https://picsum.photos/seed/service/800/600"
  },
  {
    id: "edu",
    title: "EduTech Learning API",
    category: "Education",
    description: "Scalable API infrastructure for an online learning management system (LMS), supporting video streaming and quiz engines.",
    tech: ["Node.js", "Express", "AWS S3", "MongoDB"],
    image: "https://picsum.photos/seed/edu/800/600"
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
