export interface Project {
  id: string
  number: string
  name: string
  category: string
  description: string
  longDescription: string
  technologies: string[]
  highlights: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'rune',
    number: '01',
    name: 'Rune',
    category: 'PERSONAL AI ASSISTANT',
    description:
      'An AI assistant built around voice interaction, memory, and personal automation.',
    longDescription:
      'Rune is a personal AI assistant designed to combine conversational AI with voice interaction, persistent memory, and practical automation. The system brings together a Python backend, mobile interface, speech technologies, and external APIs into one ecosystem.',
    technologies: [
      'Python',
      'Flask',
      'Flutter',
      'AI APIs',
      'Whisper',
      'ElevenLabs',
      'SQLite',
    ],
    highlights: [
      'Voice-first interaction',
      'Persistent assistant memory',
      'AI-powered conversations',
      'External API integrations',
    ],
    featured: true,
  },

  {
    id: 'adam',
    number: '02',
    name: 'A.D.A.M.',
    category: 'IOT SECURITY SYSTEM',
    description:
      'An IoT monitoring and alert system designed for real-world farm security.',
    longDescription:
      'A.D.A.M. combines an ESP32-based hardware system with a Python backend to monitor activity and trigger alerts. Events are recorded and communicated through a backend service and messaging integration.',
    technologies: [
      'ESP32',
      'Python',
      'Flask',
      'SQLite',
      'Sensors',
      'Telegram Bot API',
    ],
    highlights: [
      'Real-time event detection',
      'Hardware-to-backend communication',
      'Automated security alerts',
      'Persistent event logging',
    ],
    featured: true,
  },

  {
    id: 'adaptive-learning',
    number: '03',
    name: 'Adaptive Learning Platform',
    category: 'EDTECH / AI',
    description:
      'An adaptive learning platform designed to personalize learning and assessment.',
    longDescription:
      'A full-stack educational platform built around adaptive learning, AI-assisted study experiences, and personalized assessment. The system combines a React frontend with a Flask backend and PostgreSQL-based data infrastructure.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Flask',
      'PostgreSQL',
      'Supabase',
      'AI APIs',
    ],
    highlights: [
      'Adaptive quiz engine',
      'AI learning assistant',
      'Personalized learning experience',
      'Full-stack architecture',
    ],
    featured: true,
  },
]