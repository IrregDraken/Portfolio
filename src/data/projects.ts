export type Project = {
  id: string
  name: string
  category: string
  description: string
  technologies: string[]
  highlights: string[]
  featured: boolean
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: '01',
    name: 'A.D.A.M',
    category: 'IoT Security System',
    description:
      'An IoT security system designed to monitor a remote environment, process sensor events through a Flask backend, persist activity, and deliver real-time alerts through Telegram.',
    technologies: [
      'ESP32',
      'Python',
      'Flask',
      'SQLite',
      'Telegram Bot API',
    ],
    highlights: [
      'ESP32-based physical event detection',
      'Flask backend for event processing and system control',
      'Persistent security event logging',
      'Telegram-based remote alerts and interaction',
    ],
    featured: true,
    githubUrl: '',
    liveUrl: '',
  },

  {
    id: '02',
    name: 'Rune',
    category: 'Personal AI Assistant',
    description:
      'A personal AI assistant combining conversational intelligence, speech interfaces, memory, external services, and a cross-platform application experience.',
    technologies: [
      'Python',
      'Flask',
      'Flutter',
      'SQLite',
      'Whisper',
      'AI APIs',
    ],
    highlights: [
      'Conversational AI interface',
      'Speech-to-text and voice interaction',
      'Persistent assistant memory',
      'Integration with external services',
    ],
    featured: true,
    githubUrl: '',
    liveUrl: '',
  },

  {
    id: '03',
    name: 'Adaptive Learning Platform',
    category: 'EdTech Platform',
    description:
      'An adaptive learning platform designed to personalize learning experiences through structured course content, assessment, learner performance, and AI-assisted features.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Flask',
      'PostgreSQL',
      'AI',
    ],
    highlights: [
      'Adaptive learning experience',
      'AI-assisted learning features',
      'Performance-aware assessment',
      'Structured course and learner data',
    ],
    featured: true,
    githubUrl: '',
    liveUrl: '',
  },
]