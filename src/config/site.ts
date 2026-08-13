export const siteConfig = {
  brand: 'Ð R ƛ K E N 他',

  role: 'Full-Stack Developer',

  description:
    'I build software, AI systems, and the infrastructure behind them.',

  fullName: 'Nwodim Nnamdi Obinna',

  location: 'Port Harcourt, Nigeria',

  links: {
    github: 'https://github.com/IrregDraken',
    linkedin: 'https://www.linkedin.com/in/nnamdi-nwodim-5a183425b/',
    instagram: 'https://instagram.com/irreg.draken',
    x: 'https://x.com/IrregDrak3n',
    youtube: 'https://youtube.com/@irreg.draken',
    email: 'leedax7@gmail.com',
    phone: '+234 913 215 8874',
    phoneSecondary: '+234 916 035 5431',
    resume: '/Nwodim_Nnamdi_Obinna_CV.pdf',
    /** Separate inbox for form submissions (delivered server-side via Formspree). */
    formEmail: 'imleedax7@gmail.com',
  },

  availability: {
    status: 'Available',
    label:
      'Open to full-time, freelance, and contract opportunities — remote or on-site, and open to relocation.',
  },

  /**
   * About section content, populated from the CV.
   */
  about: {
    title: 'Nwodim Nnamdi Obinna.',
    summary:
      'I am a final-year B.Sc. Computer Science student with practical experience developing AI-powered applications, backend systems, IoT solutions, workflow automation tools, and intuitive user interfaces.',
    detail:
      'I have led a seven-member remote development team while delivering end-to-end web and mobile applications. I am passionate about solving real-world problems through Artificial Intelligence, Backend Engineering, Intelligent Automation, and Embedded Systems — and I am continuously learning modern software engineering practices to build production-ready applications.',
  },

  /**
   * Technical skills grouped by domain, populated from the CV.
   */
  skills: [
    {
      label: 'Programming Languages',
      items: ['Python', 'HTML5', 'CSS3', 'Dart', 'C', 'Java'],
    },
    {
      label: 'Backend Development',
      items: [
        'Flask',
        'REST APIs',
        'Authentication',
        'SQLite',
        'API Integration',
        'Webhooks',
      ],
    },
    {
      label: 'Artificial Intelligence',
      items: [
        'OpenAI API',
        'Prompt Engineering',
        'AI Assistants',
        'AI Agents',
        'LLM Integration',
        'AI Workflow Automation',
      ],
    },
    {
      label: 'Automation',
      items: ['Google Apps Script', 'Zapier', 'n8n', 'Telegram Bot API'],
    },
    {
      label: 'IoT & Embedded Systems',
      items: ['ESP32', 'Arduino', 'Sensor Integration', 'Electronics'],
    },
    {
      label: 'UI/UX Design',
      items: ['Figma', 'UI Design', 'UX Design', 'Wireframing', 'Prototyping'],
    },
    {
      label: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Render', 'Blender'],
    },
  ],

  /**
   * Certifications from the CV.
   */
  certifications: [
    { name: 'Python Programming', issuer: 'Coursera' },
    { name: 'Flutter Development', issuer: 'Udemy' },
    { name: 'UI/UX Design', issuer: 'Udemy' },
    { name: 'Advanced UI/UX Design', issuer: 'Udemy' },
  ],

  interests: [
    'Artificial Intelligence',
    'Backend Engineering',
    'Embedded Systems',
    'Workflow Automation',
    'UI/UX Design',
    'Game Development',
    'Piano',
  ],

  social: {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    instagram: 'Instagram',
    x: 'X',
    youtube: 'YouTube',
  },
} as const