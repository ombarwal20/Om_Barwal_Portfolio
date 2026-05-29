export const personalInfo = {
  name: "Om Ashok Barwal",
  shortName: "Om Barwal",
  title: "MERN Stack Developer",
  tagline: "Building scalable full-stack web apps",
  email: "barwalom899@gmail.com",
  phone: "9975755709",
  location: "Chhatrapati Sambhajinagar, Maharashtra",
  github: "https://github.com/ombarwal20",
  linkedin: "https://linkedin.com/in/om-barwal",
  resumePdf: "/Om_Barwal_resume.pdf",
  resumeDocx: "/Om_Barwal_resume.docx",
  bio: "Motivated Computer Science student with a passion for building modern, scalable web applications. Skilled in the MERN stack, React.js, and problem-solving — always eager to contribute to real-world software projects.",
  dob: "20/09/2004",
  languages: ["English", "Hindi", "Marathi"],
  hobbies: ["Coding", "Reading", "Cricket"],
};

export const education = [
  {
    institution: "Vivekanand Arts, Sardar Dalipsingh Commerce & Science College",
    degree: "Bachelor of Science in Computer Science (BAMUA)",
    location: "Chhatrapati Sambhajinagar, MH",
    year: "2023 – 2026",
    subjects: ["C/C++", "Java", "Python", "Data Structures", "DBMS", "Operating Systems", "Computer Networks"],
  },
];

export const skills = {
  languages: [
    { name: "JavaScript", level: 88 },
    { name: "Python", level: 75 },
    { name: "Java", level: 70 },
    { name: "C / C++", level: 68 },
    { name: "SQL", level: 72 },
  ],
  frontend: [
    { name: "React.js", level: 90 },
    { name: "HTML5 & CSS3", level: 92 },
    { name: "Tailwind CSS", level: 85 },
    { name: "JavaScript (ES6+)", level: 88 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 78 },
    { name: "MongoDB", level: 75 },
    { name: "REST APIs", level: 82 },
  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "Netlify", level: 80 },
    { name: "GitHub Pages", level: 82 },
  ],
};

export const skillTags = [
  "React.js", "Node.js", "Express.js", "MongoDB", "JavaScript",
  "HTML5", "CSS3", "Tailwind CSS", "REST APIs", "Git",
  "Python", "Java", "C++", "SQL", "GitHub", "Netlify",
  "VS Code", "Data Structures", "DBMS", "Computer Networks",
];

export const projects = [
  {
    id: 1,
    title: "AI Resume Analyzer",
    description: "A full-stack AI-powered Resume Analyzer built with the MERN stack. Analyzes resumes, provides ATS-based feedback, and suggests targeted improvements using AI APIs.",
    longDesc: "Parses uploaded resumes, scores them against ATS criteria, highlights missing keywords, and returns actionable suggestions — all in real time.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs", "AI APIs"],
    github: "https://github.com/ombarwal20",
    live: "#",
    gradient: "from-cyan-500/20 to-violet-500/20",
    accentColor: "#00d4ff",
    icon: "🤖",
    featured: true,
  },
  {
    id: 2,
    title: "SaaS Project Management App",
    description: "A comprehensive SaaS-style project management platform with team collaboration, task boards, and real-time updates. Inspired by Jira & Linear.",
    longDesc: "Kanban boards, sprint planning, role-based access control, and a modern dashboard — built for teams that move fast.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
    github: "https://github.com/ombarwal20",
    live: "#",
    gradient: "from-violet-500/20 to-pink-500/20",
    accentColor: "#7c3aed",
    icon: "📋",
    featured: true,
  },
  {
    id: 3,
    title: "Full Stack Auth App",
    description: "Production-ready authentication system with JWT, refresh tokens, email verification, OAuth, and protected routes.",
    longDesc: "Secure login/register, access & refresh token rotation, Google OAuth, middleware-protected routes, and a clean UI.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt"],
    github: "https://github.com/ombarwal20",
    live: "#",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    accentColor: "#10b981",
    icon: "🔐",
    featured: false,
  },
  {
    id: 4,
    title: "Task Manager",
    description: "A sleek, responsive task management app with priority levels, due dates, categories, and persistent local storage.",
    longDesc: "Create, edit, delete, and filter tasks. Color-coded priorities, deadline reminders, and a clean minimal UI.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Local Storage"],
    github: "https://github.com/ombarwal20",
    live: "#",
    gradient: "from-pink-500/20 to-orange-500/20",
    accentColor: "#f472b6",
    icon: "✅",
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    role: "Front-End Development Intern",
    company: "Certified Training Program",
    type: "Internship",
    year: "2024",
    description: "Completed certified front-end training focused on HTML, CSS, and JavaScript. Built responsive web interfaces using modern frontend development practices.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    color: "#00d4ff",
  },
  {
    id: 2,
    role: "Software Engineering Virtual Experience",
    company: "Forage",
    type: "Virtual Experience",
    year: "2024",
    description: "Completed software engineering simulation tasks involving problem-solving and real-world development workflows used at top tech companies.",
    skills: ["Problem Solving", "Dev Workflows", "Engineering Practices"],
    color: "#7c3aed",
  },
  {
    id: 3,
    role: "Full Stack Web Development",
    company: "Self-Directed Learning",
    type: "Certification",
    year: "2023 – Present",
    description: "Completed comprehensive full-stack web development certification. Built and deployed responsive web applications using the MERN stack.",
    skills: ["React.js", "Node.js", "MongoDB", "Express.js", "Deployment"],
    color: "#10b981",
  },
];

export const certifications = [
  "Full Stack Web Development Certification",
  "Front-End Development Internship Certification",
  "Software Engineering Virtual Experience – Forage",
  "C, C++, and Java Certifications",
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
