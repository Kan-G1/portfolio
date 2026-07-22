// ── Central content for the portfolio ──────────────────────────────────────
export const profile = {
  name: "Kanishk Ghai",
  roles: ["Full-stack Developer", "Mobile & Cloud", "AI-powered products"],
  tagline:
    "Hey — I'm a recent Software Engineering grad from Ontario Tech University in Canada. I design and ship full-stack web, mobile, and AI products — from a live e-commerce store handling real payments to an AI pipeline that turns messy stakeholder feedback into clean, structured software specs.",
  location: "Toronto, Canada",
  email: "kanishkghai343@gmail.com",
  github: "https://github.com/Kan-G1",
  linkedin: "https://www.linkedin.com/in/kanishk-g/",
  // drop a photo at public/me.jpg and set this to "/me.jpg" for the hex portrait
  photo: "",
  resume: "/resume.pdf",
  available: true,
};

export const stats = [
  { value: "2", label: "products live in production" },
  { value: "6+", label: "shipped projects" },
  { value: "5", label: "languages & platforms" },
];

// order = display order. `featured: true` gets the large treatment.
export const projects = [
  {
    id: "mobsmart",
    name: "Mobsmart",
    kicker: "Live E-commerce · Real Business",
    year: "2025",
    featured: true,
    accent: "#f5a623",
    blurb:
      "A full-stack e-commerce platform for a Delhi smartphone retailer — genuine, IMEI-verified phones sold online and in-store. “Smart phones. Smart deals.”",
    detail:
      "Built end-to-end in Next.js: product catalog, cart & checkout, Razorpay payments, order emails, and an admin flow — backed by Supabase and S3, with Three.js for 3D product moments.",
    tags: ["Next.js", "TypeScript", "Supabase", "Razorpay", "AWS S3", "Three.js"],
    live: "https://mobsmart.in",
    repo: null,
    repoPrivate: true,
    emoji: "🛒",
  },
  {
    id: "checklist",
    name: "Checklist",
    kicker: "Live · AI Requirements Engineering",
    year: "2025",
    featured: true,
    accent: "#ff6a4d",
    blurb:
      "An AI pipeline that turns raw stakeholder feedback into structured, prioritized, conflict-aware software requirements — my capstone project.",
    detail:
      "Stakeholders submit needs via shareable links; the system clusters them with embeddings, mines opposing opinions, detects conflicts, generates ISO-25010 NFRs, and ranks everything with a multi-criteria scorer.",
    tags: ["React", "Vite", "Serverless", "Supabase", "OpenAI", "D3"],
    live: "https://capstone-checklist.vercel.app",
    repo: "https://github.com/Kan-G1/Capstone_Checklist",
    emoji: "✅",
  },
  {
    id: "smart-home",
    name: "Smart Home",
    kicker: "Android App",
    year: "2025",
    featured: false,
    accent: "#ffce7a",
    blurb:
      "A native Android app to control and monitor smart devices in real time — with live power usage and location-based geofencing.",
    detail:
      "Kotlin + Firebase (Auth & Firestore), a room-grouped device grid, a live camera view, a real-time power meter, and Google Maps geofencing that reacts when you leave home.",
    tags: ["Kotlin", "Firebase", "Firestore", "Google Maps", "Coroutines"],
    live: null,
    repo: "https://github.com/Kan-G1/Smart_Home_app",
    image: "/smart-home-dashboard.png",
    emoji: "🏠",
  },
  {
    id: "dataflow",
    name: "Streaming Data Pipelines",
    kicker: "Data Engineering · GCP",
    year: "2024",
    featured: false,
    accent: "#ff8a3d",
    blurb:
      "Batch and streaming data-processing pipelines on Google Cloud Dataflow — from word counts to real-time smart-meter and MNIST inference.",
    detail:
      "Apache Beam pipelines deployed on GCP Dataflow, processing bounded and unbounded sources with Pub/Sub, windowing, and autoscaling workers.",
    tags: ["Python", "Apache Beam", "GCP Dataflow", "Pub/Sub"],
    live: null,
    repo: "https://github.com/Kan-G1/SOFE4630U-MS3",
    emoji: "🌊",
  },
  {
    id: "observability",
    name: "Azure Observability Demo",
    kicker: "Cloud · Monitoring",
    year: "2024",
    featured: false,
    accent: "#f5a623",
    blurb:
      "A Node.js service instrumented with Azure Application Insights to demonstrate request, performance, exception, and custom-event telemetry.",
    detail:
      "Four purpose-built endpoints light up different monitoring blades — request tracking, latency, handled exceptions, and trace volume — visualized live in Azure.",
    tags: ["Node.js", "Express", "Azure App Insights", "Telemetry"],
    live: null,
    repo: "https://github.com/Kan-G1/Tech-demo--tool",
    emoji: "📊",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Python", "Kotlin", "C++", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Framer Motion"],
  },
  {
    label: "Backend & Data",
    items: ["Node.js", "Spring Boot", "Supabase", "Firebase", "PostgreSQL", "REST APIs"],
  },
  {
    label: "Mobile",
    items: ["Android (Kotlin)", "Swift (iOS)", "Firestore", "Jetpack"],
  },
  {
    label: "Cloud & Tools",
    items: ["AWS", "GCP", "Azure", "Vercel", "Git", "Agile"],
  },
];

// marquee tech list
export const marquee = [
  "React", "Next.js", "TypeScript", "Node.js", "Java", "Python", "Kotlin",
  "Swift", "Supabase", "Firebase", "OpenAI", "GCP", "Azure", "AWS", "Tailwind",
];

// ── Education, experience & leadership (from résumé) ────────────────────────
export const education = {
  school: "Ontario Tech University",
  degree: "B.Eng — Software Engineering",
  period: "2022 – 2026",
  location: "Oshawa, Canada",
  coursework: [
    "Data Structures & Algorithms",
    "Machine Learning",
    "Artificial Intelligence",
    "Object-Oriented Programming",
    "Computer Organization",
    "Statistics",
  ],
};

export const experience = [
  {
    role: "Full Stack Engineer",
    org: "Urbania Fashion (Mobsmart)",
    period: "2026 – Present",
    location: "New Delhi, India",
    points: [
      "Architected and built the Mobsmart e-commerce platform from the ground up with React.js, Node.js, SQL and a responsive UI.",
      "Designed RESTful APIs, database integrations and secure authentication for accounts and order processing.",
      "Applied technical SEO, structured metadata and performance work — lifting organic traffic by ~40%.",
    ],
  },
  {
    role: "Operational Head",
    org: "New Excellent Televentures",
    period: "2026 – Present",
    location: "Whitby, Canada",
    points: [
      "Lead daily operations for a 5-person team across Amazon, Flipkart and Shopsee marketplaces.",
      "Own listings, pricing, inventory sync, promotions and fulfillment, and analyze marketplace metrics for growth.",
    ],
  },
  {
    role: "Customer Service Associate",
    org: "Walmart",
    period: "2021 – 2026",
    location: "Whitby, Canada",
    points: [
      "Partnered with department managers on retail operations, merchandising and customer experience.",
      "Supported inventory audits, price checks and promotions; resolved issues and drove process improvements.",
    ],
  },
];

export const leadership = [
  {
    role: "Planning Executive",
    org: "Hindu Student Association",
    period: "Aug 2023 – Present",
    point:
      "Lead planning for a 30+ member organization — running events, coordinating a board of executives, and community outreach.",
  },
  {
    role: "Student Fundraising Associate",
    org: "TNI — The Network Inc.",
    period: "May – Jul 2023",
    point:
      "Ran fundraising campaigns with the Red Cross and UNICEF, exceeding targets by 15% through planning and execution.",
  },
];
