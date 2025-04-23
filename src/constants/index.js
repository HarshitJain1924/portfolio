const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Resume", // Add Resume link
    link: "#resume",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];


const abilities = [
  {
    imgPath: "/images/brainstorming.svg",
    title: "Creative Problem Solving",
    desc: "Innovative solutions to complex challenges.",
  },
  {
    imgPath: "/images/teamwork.svg",
    title: "Team Collaboration",
    desc: "Working closely with teams to achieve common goals and foster innovation.",
  },
  {
    imgPath: "/images/project.svg",
    title: "Project Management",
    desc: "Efficiently managing projects to meet deadlines and exceed expectations.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    logoPath: "/images/logos/outlier.svg",
    title: "Outlier",
    date: "December 2024 - Janaury 2025",
    responsibilities: [
      "Worked on training AI models",
      "Trained models to improve performance",
      "Collaborated with the team to enhance the overall user experience.",
    ],
  },
  {
    logoPath: "/images/logos/cp.jpg",
    title: "Multimedia Expert - Converse Plus",
    date: "September 2024 - January 2025",
    responsibilities: [
      "Worked as a multimedia expert.",
      "Created engaging multimedia content.",
      "Collaborated with the team to enhance the overall user experience.",
    ],
  },
  {
    logoPath: "/images/logos/coursera.svg",
    title: "Certified by Coursera",
    date: "March 2023- Present",
    responsibilities: [
      "Completed courses on web development and AI.",
      "Gained hands-on experience in building web applications.",
      "Learned best practices in coding and software development.",
    ],
  },
  {
    logoPath: "/images/logos/lpu.svg",
    title: "Lovely Professional University",
    date: "November 2022 - Present",
    responsibilities: [
      "Pursuing a degree in Computer Science.",
      "Engaged in various projects and research.",
      "Collaborated with peers on innovative solutions.",
    ],
  },
];


const skillSet = {
  frontend: [
    {
      name: "HTML",
      imgPath: "/images/logos/html.svg",
      learningRating: 5,
    },
    {
      name: "CSS",
      imgPath: "/images/logos/css.svg",
      learningRating: 5,
    },
    {
      name: "React",
      imgPath: "/images/logos/react.png",
      learningRating: 4,
    },
    {
      name: "Vite",
      imgPath: "/images/logos/vite.svg",
      learningRating: 4,
    },
    {
      name: "Tailwind CSS",
      imgPath: "/images/logos/tailwind.svg",
      learningRating: 4,
    },
    {
      name: "Next.js",
      imgPath: "/images/logos/nextjs.svg",
      learningRating: 4,
    },
  ],
  backend: [
    {
      name: "Python",
      imgPath: "/images/logos/python.svg",
      learningRating: 4,
    },
    {
      name: "Express.js",
      imgPath: "/images/logos/express.svg",
      learningRating: 4,
    },
    {
      name: "Node.js",
      imgPath: "/images/logos/node.png",
      learningRating: 4,
    },
    {
      name: "MongoDB",
      imgPath: "/images/logos/mongodb.svg",
      learningRating: 3,
    },
    {
      name: "MySQL",
      imgPath: "/images/logos/mysql.svg",
      learningRating: 4,
    },
  ],
  coding: [
    {
      name: "JavaScript",
      imgPath: "/images/logos/javascript.svg",
      learningRating: 4,
    },
    {
      name: "TypeScript",
      imgPath: "/images/logos/typescript.svg",
      learningRating: 0,
    },
    {
      name: "C++",
      imgPath: "/images/logos/cplusplus.svg",
      learningRating: 4,
    },
  ],
  tools: [
    {
      name: "Git",
      imgPath: "/images/logos/git.svg",
      learningRating: 4,
    },
    {
      name: "Docker",
      imgPath: "/images/logos/docker.svg",
      learningRating: 0,
    },
    {
      name: "Figma",
      imgPath: "/images/logos/figma.svg",
      learningRating: 0,
    },
    {
      name: "Postman",
      imgPath: "/images/logos/postman.svg",
      learningRating: 4,
    },
    {
      name: "VS Code",
      imgPath: "/images/logos/vs-code.svg",
      learningRating: 5,
    },
    {
      name: "Vercel",
      imgPath: "/images/logos/vercel.svg",
      learningRating: 4,
    },
    {
      name: "Netlify",
      imgPath: "/images/logos/netlify.svg",
      learningRating: 4,
    },
    {
      name: "npm",
      imgPath: "/images/logos/npm.svg",
      learningRating: 4,
    },
    {
      name: "GitHub",
      imgPath: "/images/logos/github.svg",
      learningRating: 4,
    },
    {
      name: "ChatGPT",
      imgPath: "/images/logos/chatgpt.png",
      learningRating: 4,
    },
  ],
};

const showcaseProjects = [
  {
    title: "Ryde App",
    description:
      "On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde",
    technologies: ["React Native", "Expo", "TailwindCSS"],
    liveProject: "https://rydeapp.com",
    github: "https://github.com/rydeapp",
    imgPath: "/images/project1.png",
  },
  {
    title: "Library Management Platform",
    description: "A platform to manage library resources efficiently.",
    technologies: ["React", "Node.js", "MongoDB"],
    liveProject: "https://libraryplatform.com",
    github: "https://github.com/libraryplatform",
    imgPath: "/images/project2.png",
  },
  {
    title: "YC Directory",
    description: "A Startup Showcase App for YC Companies.",
    technologies: ["Next.js", "Vercel", "TailwindCSS"],
    liveProject: "https://ycdirectory.com",
    github: "https://github.com/ycdirectory",
    imgPath: "/images/project3.png",
  },
];

const hackathonData = [
  {
    title: "GFG Hackathon",
    date: " October 2024",
    description: "Got qualified for second round and created a online courses study platform",
    images: [
      "/images/hackathon1-1.jpg",
      "/images/hackathon1-2.jpg",
      "/images/hackathon1-3.jpg",
    ],
  },
  {
    title: "Smart India Hackathon",
    date: "September 2024",
    description: "Developed an Alumni Portal using PHP and MySQL.",
    images: [
      "/images/hackathon2-1.jpg",
      "/images/hackathon2-2.jpg",
      "/images/hackathon2-4.png",
    ],
  },
];

export {
  words,
  abilities,
  expCards,
  techStackIcons,
  techStackImgs,
  navLinks,
  skillSet,
  showcaseProjects,
  hackathonData
};
