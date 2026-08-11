export type Project = {
  id: string
  number: string
  name: string
  category: string
  description: string
  longdescription: string
  technologies: string[]
  highlights: string[]
  featured: boolean
  githubUrl: string
  liveUrl: string
}

export const projects: Project[] = [
  {
    id: 'adam',
    number: '01',
    name: 'A.D.A.M',
    category: 'IoT Security System',

    description:
      'An IoT security system designed to monitor a remote environment, process sensor events, persist activity, and deliver real-time alerts.',

    longdescription:
      'A.D.A.M connects an ESP32-based sensing layer to a Flask backend that processes security events, stores system activity, and communicates alerts through Telegram. The system was designed as an end-to-end pipeline where physical events can move from the device layer through application logic and persistence before reaching the operator.',

    technologies: [
      'ESP32',
      'PIR Sensor',
      'Python',
      'Flask',
      'SQLite',
      'REST API',
      'Telegram Bot API',
    ],

    highlights: [
      'ESP32-based physical event detection',
      'Flask backend for event processing and system control',
      'Persistent security event logging',
      'Telegram-based remote alerts and interaction',
    ],

    featured: true,

    githubUrl: 'https://github.com/IrregDraken/A.D.A.M-V1.0',
    liveUrl: '',
  },

  {
    id: 'rune',
    number: '02',
    name: 'Rune',
    category: 'Personal AI Assistant',

    description:
      'A personal AI assistant combining conversational intelligence, speech interfaces, memory, external services, and a cross-platform application experience.',

    longdescription:
      'Rune is a personal AI assistant built around a hybrid software architecture. It combines a Flask backend with a Flutter client, persistent memory, speech interfaces, and integrations with external services. The system is designed to move beyond a simple chatbot by giving the assistant access to context, tools, and multiple interaction modes.',

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
      'Cross-platform Flutter interface',
      'External service integrations',
    ],

    featured: true,

    githubUrl: 'https://github.com/IrregDraken/Rune-OS-prototype',
    liveUrl: '',
  },

  {
    id: 'adaptive-learning',
    number: '03',
    name: 'Adaptive Learning Platform',
    category: 'EdTech Platform',

    description:
      'An adaptive learning platform designed to personalize learning through structured course content, assessment, learner performance, and AI-assisted features.',

    longdescription:
      'The Adaptive Learning Platform is an education system designed around learner performance and personalized progression. It combines a React and TypeScript frontend with a Flask backend and PostgreSQL database, while AI-assisted features support learning, assessment, and learner interaction.',

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
      'React and TypeScript frontend',
    ],

    featured: true,

    githubUrl: 'https://github.com/IrregDraken/E-learning-backend',
    liveUrl: '',
  },
]
