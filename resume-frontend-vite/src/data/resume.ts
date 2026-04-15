import type {
  ContactInfo,
  Education,
  Experience,
  Extracurricular,
  Project,
  SkillCategory,
} from '@/types/resume';

export const contact: ContactInfo = {
  name: 'Lance Rivera',
  location: 'Greater Sydney Area, NSW',
  residency: 'Australian Permanent Resident',
  phone: '+61 461 360 832',
  email: 'lanceriver@gmail.com',
  linkedin: 'https://linkedin.com/in/lance-rivera',
  github: 'https://github.com/lanceriver',
};

export const aboutParagraph =
  "I'm a Junior Systems Engineer at Pool Safety Solutions and a computer science student at UNSW, finishing in December 2026. Most of what I enjoy about this work sits somewhere between the two halves of that sentence — I like the parts of software engineering where a system has to survive contact with the real world: flaky networks, messy data, humans changing their minds. After two years of National Service in Singapore — a lot of spreadsheets, one Telegram bot, several VBA macros that probably shouldn't have worked — I came back to Sydney looking for problems with more moving parts, and I've been lucky enough to find them.";

export const education: Education[] = [
  {
    degree: 'Bachelor of Science (Computer Science)',
    institution: 'University of New South Wales',
    startDate: 'February 2022',
    endDate: 'December 2026',
    coursework: [
      'Discrete Mathematics',
      'Computer Systems Fundamentals',
      'Data Structures and Algorithms',
    ],
    details:
      'Took two years of program leave for full-time National Service in Singapore.',
  },
];

export const experience: Experience[] = [
  {
    title: 'Junior Systems Engineer',
    company: 'Pool Safety Solutions',
    location: 'Sydney, AU',
    startDate: 'March 2026',
    endDate: 'Present',
    highlights: [
      'Architecting and building a national real-time operations dashboard aggregating CRM and financial data across QLD, NSW, and VIC, providing C-suite visibility into lead generation, bookings, inspections, and revenue risk.',
      'Designed a serverless event-driven data pipeline on AWS (Lambda + SQS + API Gateway) with signature-verified webhook ingestion, guaranteeing zero data loss via dead-letter queue handling.',
      'Selected and justified the full production stack independently — React (Vite), Hono on Lambda, Supabase with row-level security — including documented trade-off analysis across multiple architecture pivots.',
    ],
  },
  {
    title: 'Administrative Assistant — Full-time National Service',
    company: 'Singapore Armed Forces',
    location: 'Singapore, SG',
    startDate: 'November 2022',
    endDate: 'November 2024',
    highlights: [
      'Maintained accurate training records for over 300 personnel by logging assessment outcomes in Excel, supporting data-driven tracking of completed and outstanding training requirements.',
      'Coordinated the implementation of VBA macros to automate data entry, reducing processing time and improving efficiency by 90%.',
      'Developed a Telegram chatbot to automate a previously manual communication process, utilising Google Apps Script, JavaScript and the Telegram API.',
    ],
  },
  {
    title: 'Food and Beverage Attendant',
    company: 'PARKROYAL Parramatta',
    location: 'Sydney, AU',
    startDate: 'April 2022',
    endDate: 'November 2022',
    legacy: true,
    highlights: [
      'Set up function rooms for conferences, seminars, and banquets according to client specifications, contributing to smooth event execution and high guest satisfaction.',
      'Delivered food and beverage service during events, actively attending to guest needs and maintaining a professional, welcoming atmosphere.',
      'Maintained cleanliness and readiness of dining and event spaces, contributing to overall guest comfort and smooth daily operations.',
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    label: 'Programming Languages',
    items: ['Python', 'C', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Technologies',
    items: [
      'AWS Lambda',
      'API Gateway',
      'React',
      'Next.js',
      'Hono',
      'Supabase',
      'Tailwind CSS',
    ],
  },
  {
    label: 'Developer Tools',
    items: [
      'Git',
      'GitHub Actions',
      'PostgreSQL',
      'AWS DynamoDB',
      'Vercel',
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'Airtable Clone',
    url: 'https://airtable-clone-lyra.vercel.app/',
    summary: 'A full-stack web app recreating core Airtable functionality.',
    highlights: [
      'Recreated core Airtable functionality including editable tables, views, filters, and sorting, using the T3 stack (Next.js, TypeScript, tRPC, Tailwind, Prisma, and PostgreSQL).',
      'Optimised rendering and data fetching to support 1M+ rows per table without performance degradation, using pagination, memoisation, and virtualisation techniques.',
    ],
    tech: [
      'Next.js',
      'TypeScript',
      'tRPC',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
    ],
  },
  {
    name: 'Cloud-hosted Personal Website',
    url: 'https://lanceriver.com',
    summary:
      'This site, in an earlier life — a serverless AWS stack managed with IaC and CI/CD.',
    highlights: [
      'Built with serverless infrastructure on AWS: S3 for static hosting, API Gateway, DynamoDB, and Python Lambda for the backend.',
      'Managed with SAM Infrastructure as Code and GitHub Actions CI/CD.',
    ],
    tech: [
      'AWS S3',
      'API Gateway',
      'DynamoDB',
      'Python Lambda',
      'SAM',
      'GitHub Actions',
    ],
  },
];

export const extracurriculars: Extracurricular[] = [
  {
    role: 'Marketing Subcommittee',
    organization: 'UNSW Computer Science and Engineering Society (CSESOC)',
    location: 'Kensington, AU',
    startDate: 'March 2025',
    endDate: 'Present',
    highlights: [
      'Promoted society events to over 9,000 followers by managing Instagram and Facebook accounts, increasing engagement and reach across platforms.',
      'Created and scheduled informational posts, reels, and promotional TikTok videos, leading to over 50,000 cumulative views and strong event turnouts.',
    ],
  },
];
