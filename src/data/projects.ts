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
  backendUrl?: string
  image: string
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
    image: '/images/adam.jpg',
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
    image: '/images/rune.jpg',
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
    image: '/images/adaptive.jpg',
  },

  {
    id: 'medical-appointment',
    number: '04',
    name: 'Medical Appointment System',
    category: 'Healthcare Platform',

    description:
      'A healthcare management system that handles patient appointments, scheduling, and medical records through a web dashboard.',

    longdescription:
      'The Medical Appointment System is a two-part healthcare platform with a React and TypeScript dashboard frontend and a Flask and PostgreSQL backend. It covers the core clinical workflow: patient registration, appointment booking and scheduling, and secure access to records, with JWT-based authentication protecting the API layer.',

    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Flask',
      'PostgreSQL',
      'JWT Auth',
    ],

    highlights: [
      'Patient registration and profile management',
      'Appointment booking and scheduling',
      'JWT-secured REST API',
      'React TypeScript dashboard frontend',
    ],

    featured: true,

    githubUrl: 'https://github.com/IrregDraken/Medical_system.Frontend',
    backendUrl: 'https://github.com/IrregDraken/Medical_system.Backend',
    liveUrl: '',
    image: '/images/medical.jpg',
  },
]
