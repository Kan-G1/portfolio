// ── Central content for the portfolio ──────────────────────────────────────
export const profile = {
  name: "Kanishk Ghai",
  roles: ["Full-stack Developer", "Mobile & Cloud", "AI-powered products"],
  tagline:
    "I design and ship full-stack web, mobile, and AI products — from a live e-commerce store handling real payments to an AI pipeline that turns messy stakeholder input into structured software specs.",
  location: "Toronto, Canada",
  email: "kanishkghai343@gmail.com",
  github: "https://github.com/Kan-G1",
  linkedin: "https://www.linkedin.com/in/kanishk-g/",
  resume: "",
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
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    label: "Backend & Data",
    items: ["Node.js", "Python", "Supabase", "Firebase", "PostgreSQL", "REST APIs"],
  },
  {
    label: "Mobile",
    items: ["Kotlin", "Android SDK", "Jetpack", "Firestore"],
  },
  {
    label: "Cloud & Infra",
    items: ["Vercel", "GCP Dataflow", "Azure", "AWS S3", "Apache Beam"],
  },
  {
    label: "AI & Integrations",
    items: ["OpenAI", "Embeddings", "Razorpay", "Resend"],
  },
];

// marquee tech list
export const marquee = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Kotlin",
  "Supabase", "Firebase", "OpenAI", "GCP", "Azure", "AWS", "Tailwind", "Three.js",
];
