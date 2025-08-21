import { Project, Skill, Experience, Testimonial } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include product management, cart functionality, and secure payments.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true
  },
  {
    id: '3',
    title: 'AI Dashboard',
    description: 'Analytics dashboard with machine learning insights, data visualization, and predictive analytics for business intelligence.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500',
    technologies: ['React', 'Python', 'TensorFlow', 'D3.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true
  },
  {
    id: '4',
    title: 'Social Media App',
    description: 'Modern social media platform with real-time messaging, story features, and advanced privacy controls.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=500',
    technologies: ['React Native', 'GraphQL', 'AWS', 'Redis'],
    githubUrl: 'https://github.com',
    featured: false
  }
];

export const skills: Skill[] = [
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Python', level: 80, category: 'backend' },
  { name: 'AWS', level: 75, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'Figma', level: 85, category: 'design' },
  { name: 'MongoDB', level: 80, category: 'backend' }
];

export const experiences: Experience[] = [
  {
    id: '1',
    position: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    duration: '2022 - Present',
    description: [
      'Led development of micro-services architecture serving 1M+ users',
      'Mentored junior developers and conducted code reviews',
      'Implemented CI/CD pipelines reducing deployment time by 60%'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker']
  },
  {
    id: '2',
    position: 'Frontend Developer',
    company: 'Digital Solutions Co.',
    duration: '2020 - 2022',
    description: [
      'Developed responsive web applications using React and TypeScript',
      'Collaborated with design team to implement pixel-perfect UIs',
      'Optimized application performance resulting in 40% faster load times'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Jest']
  },
  {
    id: '3',
    position: 'Junior Developer',
    company: 'StartUp Hub',
    duration: '2019 - 2020',
    description: [
      'Built and maintained company website and internal tools',
      'Participated in agile development process and daily standups',
      'Learned modern web development practices and best practices'
    ],
    technologies: ['JavaScript', 'HTML/CSS', 'WordPress', 'MySQL']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'CEO',
    company: 'TechStart Inc.',
    content: 'Exceptional developer who delivered our project ahead of schedule. The attention to detail and code quality exceeded our expectations.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '2',
    name: 'Michael Chen',
    position: 'CTO',
    company: 'Innovation Labs',
    content: 'Working with this developer was a game-changer for our project. Professional, skilled, and always available for support.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    position: 'Product Manager',
    company: 'Digital Dynamics',
    content: 'Outstanding work ethic and technical expertise. The final product was exactly what we envisioned and more.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '4',
    name: 'David Thompson',
    position: 'Founder',
    company: 'Creative Solutions',
    content: 'Highly recommend! Great communication, timely delivery, and exceptional problem-solving skills.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];