import {
  Binary,
  BookOpen,
  Braces,
  Code2,
  Coffee,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Monitor,
  Sparkles,
  Table2,
  Target,
  Terminal,
  Wrench,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'

export const profile = {
  name: 'Nazeer Ahmed',
  firstName: 'Nazeer',
  role: 'Computer Science Student',
  university: 'Sukkur IBA University',
  degree: 'BS Computer Science',
  location: 'Pakistan',
  github: 'https://github.com/nazeer-ahmed-cs',
  linkedin: 'https://www.linkedin.com/in/nazeer-ahmed-971382327/',
  githubPages: 'https://nazeer-ahmed-cs.github.io',
  email: 'nazeerahmedkhaskhelin51l@gmail.com',
  headline: 'Hi, I\u2019m Nazeer Ahmed',
  subtitle:
    'Computer Science Student | Aspiring Software Engineer | Exploring AI & Machine Learning',
  description:
    'I\u2019m a Computer Science student at Sukkur IBA University passionate about building software, solving problems, and exploring emerging technologies. I\u2019m continuously learning and working on projects to turn ideas into practical solutions.',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const roles = [
  'Aspiring Software Engineer',
  'Exploring AI & Machine Learning',
  'Full-Stack Developer',
  'Problem Solver',
]

export const interests = [
  'Artificial Intelligence',
  'Machine Learning',
  'Data Science',
  'Full-Stack Development',
  'Software Engineering',
  'Problem Solving',
  'Data Structures & Algorithms',
]

export const stats = [
  { value: 'BS', label: 'Computer Science', icon: GraduationCap },
  { value: 'Sukkur IBA', label: 'University', icon: BookOpen },
  { value: 'Pakistan', label: 'Based in', icon: MapPin },
]

export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: Code2,
    description: 'Core languages I use to build and solve problems.',
    skills: [
      { name: 'C++', icon: Binary },
      { name: 'Java', icon: Coffee },
      { name: 'Python', icon: Terminal },
      { name: 'JavaScript', icon: Braces },
    ],
  },
  {
    title: 'Frontend',
    icon: Layers,
    description: 'Creating clean, responsive interfaces for the web.',
    skills: [
      { name: 'HTML', icon: FileCode2 },
      { name: 'CSS', icon: Braces },
      { name: 'React', icon: Code2 },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    description: 'Working with structured data and relational models.',
    skills: [
      { name: 'SQL', icon: Database },
      { name: 'MySQL', icon: Table2 },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    description: 'The everyday tools behind my development workflow.',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: GithubIcon },
      { name: 'VS Code', icon: Monitor },
    ],
  },
]

export const strengths = [
  {
    title: 'Problem-solving mindset',
    description:
      'I enjoy breaking complex problems into smaller, testable pieces and learning through the process.',
    icon: Target,
  },
  {
    title: 'Continuous learning',
    description:
      'I am always exploring new ideas, tools, and techniques to become a better engineer.',
    icon: Lightbulb,
  },
  {
    title: 'Build to understand',
    description:
      'Projects are how I turn concepts into something practical, useful, and easier to reason about.',
    icon: Sparkles,
  },
]

export const projects = [
  {
    title: 'Semester Manager',
    category: 'Productivity',
    year: 'Project',
    description:
      'A student productivity and semester management application designed to organize courses, tasks, and the rhythm of a busy academic term.',
    longDescription:
      'Semester Manager brings courses, deadlines, and daily tasks into one focused workspace. The goal is simple: make a demanding semester feel smaller, clearer, and easier to navigate.',
    technologies: ['React', 'FastAPI', 'Python', 'SQLAlchemy', 'SQLite'],
    image: '/project-semester-manager.svg',
    alt: 'Semester Manager dashboard preview with course cards, a weekly schedule, and task progress',
    github: null,
    live: null,
    featured: true,
  },
  {
    title: 'SysMonitor',
    category: 'Systems',
    year: 'Project',
    description:
      'A Linux system call and process monitoring system built to understand how programs interact with the operating system at a lower level.',
    technologies: ['C', 'Linux', 'Operating Systems'],
    image: '/project-sysmonitor.svg',
    alt: 'SysMonitor terminal preview showing process activity and system call traces',
    github: null,
    live: null,
  },
  {
    title: 'Personal Portfolio',
    category: 'Frontend',
    year: 'Project',
    description:
      'A responsive personal portfolio that brings together my background, skills, and selected work in a fast, accessible React experience.',
    technologies: ['React', 'JavaScript', 'CSS'],
    image: '/project-portfolio.svg',
    alt: 'Personal portfolio preview with a dark hero section and project cards',
    github: 'https://github.com/nazeer-ahmed-cs/nazeer-ahmed-portfolio',
    live: null,
  },
]

export const education = {
  degree: 'BS Computer Science',
  university: 'Sukkur IBA University',
  location: 'Pakistan',
  status: 'In progress',
  focus: [
    'Data Structures & Algorithms',
    'Software Engineering',
    'Databases',
    'Operating Systems',
    'Artificial Intelligence',
    'Machine Learning',
  ],
}

export const socials = [
  { label: 'GitHub', href: profile.github, icon: GithubIcon },
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedinIcon },
  { label: 'GitHub Pages', href: profile.githubPages, icon: Globe },
]

export const contactChannels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'Connect with me',
    href: profile.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    value: '@nazeer-ahmed-cs',
    href: profile.github,
    icon: GithubIcon,
  },
  {
    label: 'Location',
    value: profile.location,
    href: null,
    icon: MapPin,
  },
]
