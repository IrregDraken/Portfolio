export const adamCaseStudy = {
  id: '01',
  name: 'A.D.A.M',
  title: 'IoT security system for remote monitoring',
  category: 'IoT / Backend / Systems',

  overview:
    'A.D.A.M is an IoT security system built around an ESP32 sensor device, a Flask backend, persistent event logging, and Telegram-based alerts.',

  problem:
    'Remote environments need a way to detect physical activity, record what happened, and notify an operator without requiring constant manual monitoring.',

  solution:
    'A.D.A.M connects an ESP32-based sensing layer to a Flask backend that receives and processes events, stores them in a database, and sends alerts through Telegram.',

  architecture: [
    {
      name: 'Sensing Layer',
      technology: 'ESP32 + PIR Sensor',
      description:
        'Detects physical movement and generates security events at the edge.',
    },
    {
      name: 'Application Layer',
      technology: 'Python + Flask',
      description:
        'Receives device events, exposes API endpoints, processes commands, and coordinates the system.',
    },
    {
      name: 'Persistence Layer',
      technology: 'SQLite',
      description:
        'Stores security events and system activity for later inspection.',
    },
    {
      name: 'Notification Layer',
      technology: 'Telegram Bot',
      description:
        'Delivers security alerts and supports remote interaction with the system.',
    },
  ],

  technologies: [
    'ESP32',
    'PIR Sensor',
    'Python',
    'Flask',
    'SQLite',
    'REST API',
    'Telegram Bot API',
  ],

  decisions: [
    {
      title: 'Separate sensing from application logic',
      description:
        'The ESP32 handles physical sensing while the backend handles persistence, processing, and external communication.',
    },
    {
      title: 'Persist security events',
      description:
        'Events are stored instead of relying exclusively on real-time notifications, allowing activity to be inspected after it occurs.',
    },
    {
      title: 'Use Telegram for notifications',
      description:
        'Telegram provides a practical communication channel for delivering alerts without requiring a dedicated mobile notification system.',
    },
  ],

  result:
    'The system provides an end-to-end security pipeline from physical detection to backend processing, persistent logging, and remote notification.',

  links: {
    github: '',
    live: '',
  },
} as const