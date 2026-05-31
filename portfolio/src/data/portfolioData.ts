/**
 * Static portfolio data for Kidist Mulualem.
 * All data is strictly typed using the interfaces defined in types/index.ts.
 */

import {
  Experience,
  Education,
  PersonalInfo,
  Project,
  Skill,
  NavItem,
  TechCategory,
  ProjectStatus,
} from '../types';

// ─── Personal Info ────────────────────────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name: 'Kidist Mulualem',
  title: 'Software Engineer & AI Enthusiast',
  tagline: 'Building intelligent systems at the intersection of software engineering and AI.',
  bio: [
    'I am a software engineer passionate about artificial intelligence, machine learning, and AGI research. Currently contributing to cutting-edge AI projects at iCog Labs in Addis Ababa, where I work alongside world-class researchers pushing the boundaries of artificial general intelligence.',
    'With a strong foundation in TypeScript, React, and modern web technologies, I bridge the gap between robust software engineering and intelligent systems. I believe the future belongs to engineers who can build production-grade software AND think deeply about AI.',
    'Through the 10 Academy training program, I have sharpened my data science and ML skills, working on real-world problems that matter. I am actively seeking roles as a Software Engineer, AI Trainer, or ML Engineer.',
  ],
  location: 'Addis Ababa, Ethiopia',
  email: 'kidistmulualem18@gmail.com',
  resumeUrl: '/resume.pdf',
  avatarUrl: '/kidist.jpg',
  socials: [
    {
      platform: 'github',
      label: 'GitHub',
      url: 'https://github.com/Kidist-c',
      icon: 'github',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/kidist-mulualem',
      icon: 'linkedin',
    },
    {
      platform: 'email',
      label: 'Email',
      url: 'mailto:kidistmulualem18@gmail.com',
      icon: 'mail',
    },
  ],
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  // Languages
  { name: 'TypeScript', category: TechCategory.Language, level: 88 },
  { name: 'JavaScript', category: TechCategory.Language, level: 90 },
  { name: 'Python', category: TechCategory.Language, level: 82 },
  { name: 'HTML5', category: TechCategory.Language, level: 93 },
  { name: 'CSS3', category: TechCategory.Language, level: 88 },
  // Frontend
  { name: 'React', category: TechCategory.Frontend, level: 85 },
  { name: 'Next.js', category: TechCategory.Frontend, level: 75 },
  { name: 'Tailwind CSS', category: TechCategory.Frontend, level: 84 },
  { name: 'Framer Motion', category: TechCategory.Frontend, level: 72 },
  // AI / ML
  { name: 'Machine Learning', category: TechCategory.AI_ML, level: 78 },
  { name: 'TensorFlow', category: TechCategory.AI_ML, level: 68 },
  { name: 'scikit-learn', category: TechCategory.AI_ML, level: 75 },
  { name: 'NumPy / Pandas', category: TechCategory.AI_ML, level: 80 },
  { name: 'NLP', category: TechCategory.AI_ML, level: 70 },
  // Tools
  { name: 'Git & GitHub', category: TechCategory.Tools, level: 88 },
  { name: 'VS Code', category: TechCategory.Tools, level: 92 },
  { name: 'Docker', category: TechCategory.Tools, level: 62 },
  { name: 'Linux / Bash', category: TechCategory.Tools, level: 74 },
  { name: 'Vite', category: TechCategory.Tools, level: 82 },
  // Testing
  { name: 'Jest', category: TechCategory.Testing, level: 74 },
  { name: 'React Testing Library', category: TechCategory.Testing, level: 70 },
  { name: 'ESLint', category: TechCategory.Testing, level: 85 },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    id: 'icog-labs',
    role: 'Software Engineer & AI Contributor',
    organization: 'iCog Labs',
    organizationUrl: 'https://icog-labs.com',
    startDate: '2023-06',
    endDate: 'Present',
    location: 'Addis Ababa, Ethiopia',
    type: 'work',
    description:
      'Contributing to AI and AGI-related research and engineering projects at one of Africa\'s leading AI research labs, known globally for work on humanoid robots like Sophia.',
    highlights: [
      {
        text: 'Contributed to AGI research projects exploring cognitive architectures and reasoning systems.',
        tags: ['AGI', 'Research', 'Cognitive AI'],
      },
      {
        text: 'Developed and maintained web interfaces for AI-powered tools using React and TypeScript.',
        tags: ['React', 'TypeScript', 'Frontend'],
      },
      {
        text: 'Collaborated with cross-functional teams on machine learning model evaluation and AI training data workflows.',
        tags: ['ML', 'AI Training', 'Collaboration'],
      },
      {
        text: 'Participated in code reviews, debugging sessions, and technical documentation to ensure code quality.',
        tags: ['Code Review', 'Debugging', 'Documentation'],
      },
      {
        text: 'Worked on NLP pipelines and data annotation processes supporting LLM fine-tuning efforts.',
        tags: ['NLP', 'LLM', 'Data Annotation'],
      },
    ],
    technologies: ['Python', 'TypeScript', 'React', 'Machine Learning', 'NLP', 'Git'],
  },
  {
    id: '10academy',
    role: 'AI & Data Science Trainee',
    organization: '10 Academy',
    organizationUrl: 'https://10academy.org',
    startDate: '2023-01',
    endDate: '2023-06',
    location: 'Remote / Addis Ababa',
    type: 'training',
    description:
      'Intensive data science and AI training program focused on real-world problem solving, collaborative projects, and industry-standard practices.',
    highlights: [
      {
        text: 'Completed rigorous 6-month AI/ML training covering supervised learning, deep learning, and data engineering.',
        tags: ['Machine Learning', 'Deep Learning'],
      },
      {
        text: 'Built end-to-end ML pipelines including data collection, preprocessing, modeling, and evaluation.',
        tags: ['ML Pipeline', 'Data Engineering'],
      },
      {
        text: 'Worked on team projects simulating real industry workflows with weekly deliverables and peer review.',
        tags: ['Teamwork', 'Agile', 'Peer Review'],
      },
      {
        text: 'Gained proficiency in Python-based data science stack: NumPy, Pandas, Matplotlib, scikit-learn.',
        tags: ['Python', 'NumPy', 'Pandas', 'scikit-learn'],
      },
    ],
    technologies: ['Python', 'scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'SQL', 'Git'],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 'dog-breed-classification',
    title: 'Multi-Class Dog Breed Classification',
    description:
      'A deep learning project that classifies dog breeds from images using a multi-class neural network trained on a real-world image dataset — built with TensorFlow and Jupyter Notebook.',
    longDescription:
      'End-to-end image classification pipeline using convolutional neural networks to identify dog breeds from photos. Covers data preprocessing, model architecture design, training, and evaluation.',
    technologies: ['Python', 'TensorFlow', 'Jupyter Notebook', 'CNN', 'Image Classification'],
    category: 'ai-ml',
    status: ProjectStatus.Completed,
    githubUrl: 'https://github.com/Kidist-c/MultiClassDogBreedClassification',
    featured: true,
    highlights: [
      'Built a multi-class CNN classifier for dog breed identification',
      'Full ML pipeline: data loading, augmentation, training, and evaluation',
      'Jupyter Notebook with detailed step-by-step analysis and visualizations',
    ],
  },
  {
    id: 'solar-challenge',
    title: 'Solar Energy Data Analysis',
    description:
      'A data science challenge project analyzing solar radiation and weather datasets from multiple African countries to surface insights for renewable energy investment decisions.',
    longDescription:
      'Week 1 challenge from 10 Academy — exploratory data analysis, statistical profiling, and visualization of solar farm data from Benin, Sierra Leone, and Togo. Includes a Streamlit dashboard app.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Streamlit', 'Jupyter Notebook', 'CI/CD'],
    category: 'ai-ml',
    status: ProjectStatus.Completed,
    githubUrl: 'https://github.com/Kidist-c/solar-challenge-week1',
    featured: true,
    highlights: [
      'Analyzed solar & meteorological data across 3 African countries',
      'Built a Streamlit dashboard for interactive data exploration',
      'Implemented GitHub Actions CI/CD pipeline with automated tests',
      'Full EDA with outlier detection, correlation analysis, and Z-score profiling',
    ],
  },
  {
    id: 'leetcode-problems',
    title: 'LeetCode Problem Solutions',
    description:
      'A structured collection of LeetCode algorithm and data structure problems solved in Python — covering arrays, strings, binary search, SQL joins, and more.',
    technologies: ['Python', 'Algorithms', 'Data Structures', 'SQL', 'Problem Solving'],
    category: 'algorithm',
    status: ProjectStatus.InProgress,
    githubUrl: 'https://github.com/Kidist-c/LeetcodeProblem',
    featured: true,
    highlights: [
      'Solutions to 23+ problems including Two Sum, Palindrome, Median of Two Sorted Arrays',
      'Covers arrays, strings, binary search, and SQL (JOIN, WHERE)',
      'Clean Python implementations with focus on optimal time complexity',
    ],
  },
  {
    id: 'dynamic-todo-list',
    title: 'Dynamic To-Do List App',
    description:
      'A responsive browser-based task management application built with vanilla JavaScript, HTML, and CSS — featuring add, complete, and delete functionality with localStorage persistence.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'localStorage', 'DOM Manipulation'],
    category: 'web',
    status: ProjectStatus.Completed,
    githubUrl: 'https://github.com/Kidist-c/dynamic-to-do-list-js',
    featured: false,
    highlights: [
      'Dynamic task creation and deletion via DOM manipulation',
      'Persistent task state using browser localStorage',
      'Responsive design with clean CSS styling',
    ],
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description:
      'This portfolio — a production-grade React + TypeScript application with dark/light mode, smooth animations, and fully responsive design.',
    technologies: ['React 19', 'TypeScript', 'Vite', 'Framer Motion', 'CSS Variables'],
    category: 'web',
    status: ProjectStatus.Live,
    githubUrl: 'https://github.com/Kidist-c',
    featured: false,
    highlights: [
      'Strict TypeScript with zero "any" usage across entire codebase',
      'Custom hooks: useTheme, useScrollProgress, useIntersectionObserver, useLocalStorage',
      'WCAG 2.1 accessibility with proper ARIA labels throughout',
    ],
  },
];

// ─── Education ───────────────────────────────────────────────────────────────

export const education: Education[] = [
  {
    id: 'university',
    institution: 'Addis Ababa University',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startYear: 2019,
    endYear: 2023,
    description:
      'Studied core computer science fundamentals including algorithms, data structures, operating systems, databases, and software engineering.',
    achievements: [
      'Graduated with Distinction',
      'Final year project on neural network optimization',
      'Active member of the CS student society',
    ],
  },
  {
    id: '10academy-cert',
    institution: '10 Academy',
    degree: 'Certificate',
    field: 'Artificial Intelligence & Data Science',
    startYear: 2023,
    endYear: 2023,
    description:
      'Intensive program covering end-to-end machine learning workflows, data engineering, and collaborative AI project development.',
    achievements: [
      'Completed all weekly challenges with high scores',
      'Led team project on real-world NLP dataset',
    ],
  },
];
