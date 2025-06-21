export const person = {
  name: 'Sébastien Gimenez',
  alias: 'Gaba',
  role: 'Software Engineer',
  location: 'Montréal, QC',
  bio: `I write code & play games.`,
  tagline: `Building interfaces for productivity & gaming. Trying to understand what makes systems work (or fail).`,
  skills: [
    { name: 'React', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'Jakarta EE', level: 'Advanced' },
    { name: 'Symfony', level: 'Advanced' },
    { name: 'Django', level: 'Intermediate' },
    { name: 'Three.js', level: 'Intermediate' },
    { name: 'PostgreSQL', level: 'Advanced' },
    { name: 'Redis', level: 'Intermediate' },
    { name: 'Git', level: 'Advanced' },
    { name: 'IPFS', level: 'Intermediate' },
    { name: 'Unity', level: 'Beginner' }
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "Gabadev",
      duration: "2024 - Present",
      description: "Building gaming and productivity applications. Developing open source tools. Working on decentralized tech projects."
    },
    {
      title: "Software Engineer",
      company: "Xdemat",
      duration: "2019 - 2024",
      description: "Built web applications for enterprise clients. Led data management and UI/UX improvements. Implemented enterprise integration solutions."
    },
    {
      title: "Junior Developer",
      company: "Xdemat",
      duration: "2016 - 2019",
      description: "Developed web applications and contributed to various client projects. Gained expertise in modern development workflows."
    }
  ],
  education: {
    degree: "Bachelor of Computer Science",
    university: "Luminy University",
    location: "Marseille, FR",
    year: "2015"
  }
};

export const projects = [
  {
    id: 'metaforge',
    title: 'MetaForge',
    tagline: 'Prediction Competitive',
    description: 'Competitive platform for collective forecasting vs data-driven analytics. Tacticians propose and vote for comps and techs. Distinct leaderboards for LP (league-points) and PP (prediction-points).',
    longDescription: `MetaForge is a competitive prediction platform where tacticians propose compositions and vote on technologies. The platform features dual ranking systems - League Points (LP) for competitive performance and Prediction Points (PP) for forecasting accuracy.

Built with React, TypeScript, Node.js, and PostgreSQL, it provides real-time analytics and performance tracking for both gaming and prediction aspects.`,
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    link: 'https://metaforge.lol',
    github: 'https://github.com/gaba-dev-1/metaforge',
    images: [
      '/images/metaforge_screen1.png',
      '/images/metaforge_screen2.png',
      '/images/metaforge_screen3.png',
    ],
    features: [
      'Dual ranking system (LP and PP)',
      'Real-time analytics',
      'Competitive forecasting',
      'Gaming focus',
      'Performance tracking'
    ],
    color: 'primary'
  },
  {
    id: 'decibells',
    title: 'Decibells',
    tagline: 'Distributed Auditing',
    description: 'Distributed auditing with real-time visualization and economic incentives. Collective intelligence needs transparency to enable collective governance.',
    longDescription: `Decibells is a distributed verification network built on blockchain technology. It features real-time visualization of network activity, economic incentives for participation, and transparent governance systems.

Uses Node.js, Blockchain tech, IPFS for distributed storage, and GraphQL for APIs. The platform enables transparent auditing through cryptographic proofs and community consensus.`,
    tags: ['Node.js', 'Blockchain', 'IPFS', 'GraphQL'],
    link: 'https://github.com/gaba-dev-1/decibells',
    github: 'https://github.com/gaba-dev-1/decibells',
    images: [
      '/images/gaba.png',
      '/images/gaba.png',
      '/images/gaba.png',
    ],
    features: [
      'Distributed verification',
      'Real-time visualization',
      'Economic incentives',
      'Transparent governance',
      'P2P trust networks'
    ],
    color: 'purple-light'
  },
  {
    id: 'mosaik',
    title: 'Mosaïk',
    tagline: 'Adaptive Workspace',
    description: 'Adaptive workspace organizer that adapts to the user workflows. Built with React, Python, and Docker for automation and productivity.',
    longDescription: `Mosaïk is an intelligent workspace organizer that adapts to user workflows. Using pattern recognition and automation, it optimizes workspace layouts for productivity.

Built with React for the frontend, Python for workflow analysis, and Docker for containerization. The platform learns from user behavior to suggest workspace improvements.`,
    tags: ['React', 'Python', 'Docker'],
    link: 'https://github.com/gaba-dev-1/mosaik',
    github: 'https://github.com/gaba-dev-1/mosaik',
    images: [
      '/images/gaba.png',
      '/images/gaba.png',
      '/images/gaba.png',
    ],
    features: [
      'Adaptive layouts',
      'Workflow automation',
      'Productivity optimization',
      'Cross-platform support',
      'Pattern recognition'
    ],
    color: 'purple-dark'
  },
  {
    id: 'dropdate',
    title: 'Dropdate',
    tagline: 'Gaming Calendar',
    description: 'Gaming calendar tracking releases, events and community milestones. Built with Next.js, TailwindCSS, and MongoDB.',
    longDescription: `Dropdate is a comprehensive gaming calendar that tracks game releases, patches, events, and community milestones. Users can personalize their feed and get notifications for important gaming events.

Built with Next.js for performance, TailwindCSS for styling, and MongoDB for data storage. Integrates with popular calendar apps for seamless planning.`,
    tags: ['Next.js', 'TailwindCSS', 'MongoDB'],
    link: 'https://github.com/gaba-dev-1/dropdate',
    github: 'https://github.com/gaba-dev-1/dropdate',
    images: [
      '/images/gaba.png',
      '/images/gaba.png',
      '/images/gaba.png',
    ],
    features: [
      'Gaming calendar',
      'Event tracking',
      'Community milestones',
      'Notifications',
      'Calendar integration'
    ],
    color: 'purple-lighter'
  },
  {
    id: 'gameguru',
    title: 'GameGuru',
    tagline: 'Gaming Overlay',
    description: 'Customizable overlay with HUD elements and performance monitoring. Built with React and Electron for real-time gaming assistance.',
    longDescription: `GameGuru is a customizable gaming overlay that provides HUD elements and performance monitoring without disrupting gameplay. Built with React and Electron for cross-platform compatibility.

Features customizable interface elements, real-time performance metrics, and contextual gaming information. Designed to enhance the gaming experience without being intrusive.`,
    tags: ['React', 'Electron'],
    link: 'https://github.com/gaba-dev-1/gameguru',
    github: 'https://github.com/gaba-dev-1/gameguru',
    images: [
      '/images/gaba.png',
      '/images/gaba.png',
      '/images/gaba.png',
    ],
    features: [
      'Customizable HUD',
      'Performance monitoring',
      'Gaming overlay',
      'Real-time data',
      'Cross-platform'
    ],
    color: 'purple-darker'
  }
];

export const contact = {
  email: 'contact@gabadev.com',
  github: 'github.com/gaba-dev-1',
  twitter: '@MetaForgeLol',
  discord: 'https://discord.gg/gY5PsymH',
  linkedin: 'linkedin.com/in/sébastien-gimenez-ab8b9233a/',
  website: 'gabadev.com',
  location: 'Montréal, QC 🍁',
  availability: 'Open to collaborating',
  preferredContact: 'Discord'
};
