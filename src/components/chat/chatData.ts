export interface ChatMessage {
  id: string;
  role: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

export interface FAQ {
  keywords: string[];
  response: string;
}

export const INITIAL_MESSAGE =
  `👋 Hi there! I'm **Rajesh's AI assistant**. I can tell you about his experience, skills, and projects.\n\nFeel free to ask me anything, like:\n• *"Tell me about your TCS experience"*\n• *"What are your core skills?"*\n• *"Describe the OmniSaina project"*\n• *"I'd like to schedule an interview"*`;

export const CONTACT_TRIGGER_KEYWORDS = [
  'interview', 'hire', 'hiring', 'contact', 'reach', 'connect', 'feedback',
  'schedule', 'talk', 'meet', 'collaborate', 'opportunity', 'available',
];

export const FAQ_DATA: FAQ[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'greet'],
    response: `Hello! 👋 Great to meet you! I'm here to answer questions about Rajesh Kuna — his experience as a Java Backend & PL/SQL Developer at TCS, skills, projects, and more. What would you like to know?`,
  },
  {
    keywords: ['name', 'who', 'about', 'introduce', 'yourself'],
    response: `I'm representing **Rajesh Kuna** — a Java Backend & PL/SQL Developer with 3+ years at Tata Consultancy Services (TCS). He progressed from an offshore contributor to an **onsite technical lead** in Johannesburg, South Africa, specializing in scalable microservices, Oracle PL/SQL stored procedures & packages, database query optimization, and GenAI.`,
  },
  {
    keywords: ['plsql', 'pl/sql', 'oracle', 'procedure', 'stored procedure', 'trigger', 'package', 'cursor'],
    response: `Rajesh is an experienced **PL/SQL Developer** with extensive production expertise:\n\n• 🗄️ Engineered **100+ high-performance PL/SQL stored procedures**, packages, functions, and triggers in Oracle DB\n• ⚡ Managed **50K+ daily high-concurrency transactions** for Banking & Insurance clients at TCS\n• 🚀 PL/SQL & Query Tuning: Achieved **30% query throughput gain** via execution plan analysis, indexing, cursors, and PL/SQL refactoring\n• 🤖 Built an **Oracle Database AI Agent** using Spring AI for schema-aware natural language diagnostics and PL/SQL optimization\n• 🔗 Seamlessly integrated PL/SQL persistence layers with Spring Boot microservices & Spring Data JPA`,
  },
  {
    keywords: ['tcs', 'experience', 'work', 'job', 'company', 'career', 'professional'],
    response: `At **TCS (June 2023 – Present)**, Rajesh works as a System Engineer — Java Backend & PL/SQL Developer:\n\n• 🚀 Achieved **70% reduction** in API response time across 5+ insurance modules\n• 🏗️ Architected scalable Spring Boot components reducing review cycles by 40%\n• 🗄️ Engineered **100+ PL/SQL stored procedures** handling 50K+ daily transactions\n• 🤖 Built an Oracle Database AI Agent, achieving **30% query throughput optimization**\n• 🌍 Led onsite deployment in **Johannesburg** with 4+ zero-downtime releases\n• 🏆 Won **Star of the Month** and **Spot on the Team Award**`,
  },
  {
    keywords: ['skill', 'tech', 'technology', 'stack', 'know', 'expertise', 'language', 'framework'],
    response: `Rajesh's technical arsenal spans:\n\n**Core Backend & PL/SQL:** Java 8/17/21, Spring Boot 3, PL/SQL Developer, Oracle PL/SQL, Spring Security, Spring MVC, JPA/Hibernate, Spring WebFlux, REST API, Multithreading\n\n**Databases & PL/SQL:** Oracle DB (100+ Stored Procedures, Packages, Triggers), PL/SQL Query Tuning, PostgreSQL, Redis, Cursors & Indexing\n\n**Architecture & AI:** Microservices, Apache Kafka, gRPC + Protobuf, Spring AI, AI Agents, JWT, OAuth 2.0, RBAC, GitHub Copilot\n\n**DevOps:** Docker, Jenkins, AWS, GCP, Git`,
  },
  {
    keywords: ['java', 'spring', 'springboot', 'spring boot', 'microservice', 'backend'],
    response: `Rajesh is a **Spring Boot & PL/SQL expert** with 3+ years of production experience. He has:\n\n• Architected microservices with **Spring Cloud Gateway + Eureka** (99.9% uptime)\n• Integrated Oracle PL/SQL stored procedures with Spring JPA repositories\n• Implemented **Spring Security** with JWT, OAuth 2.0, RBAC, and custom filter chains\n• Used **Spring WebFlux** Scatter-Gather pattern reducing latency by 45%\n• Integrated **Spring AI** to build conversational bots and AI agents\n• Applied patterns: Factory, Builder, Singleton for clean architecture`,
  },
  {
    keywords: ['kafka', 'grpc', 'protobuf', 'event', 'streaming', 'messaging'],
    response: `Rajesh has production experience with event-driven architecture:\n\n• **Apache Kafka**: Asynchronous event streaming for order processing pipelines in OmniSaina\n• **gRPC + Protobuf**: High-speed inter-service RPC achieving **30% serialization speedup** vs REST\n• Both technologies were used in OmniSaina's distributed microservices architecture`,
  },
  {
    keywords: ['omnisaina', 'omni', 'food', 'project', 'aggregator', 'saina'],
    response: `**OmniSaina** is Rajesh's flagship personal project — a Real-Time Multi-Vendor Food Aggregator & AI Engine:\n\n🍱 **Tech Stack:** Java 21, Spring Boot 3, Oracle PL/SQL, Spring Security, Spring AI, Spring Cloud, Spring WebFlux, Kafka, gRPC, Protobuf, Redis, PostgreSQL, React.js, Tailwind CSS, Docker\n\n**Key Achievements:**\n• Built **Saina Bot** — AI chatbot for real-time food queries using Spring AI\n• Spring Security + JWT with stateless session management and RBAC\n• **99.9% availability** with Spring Cloud Gateway + Eureka\n• **45% latency reduction** via WebFlux Scatter-Gather vs synchronous calls\n• **30% serialization speedup** using gRPC + Protobuf`,
  },
  {
    keywords: ['ai', 'genai', 'llm', 'artificial intelligence', 'copilot', 'bot'],
    response: `Rajesh has hands-on GenAI integration experience:\n\n• **Spring AI** — Built production AI agents and conversational bots\n• **AI Agents** — Oracle Database AI Agent with schema-aware natural language querying & PL/SQL analysis\n• **GitHub Copilot** — Integrated into TCS development workflows, accelerating issue resolution\n• **Prompt Engineering** — Structured prompts for domain-specific AI responses`,
  },
  {
    keywords: ['security', 'oauth', 'jwt', 'authentication', 'authorization'],
    response: `Security is one of Rajesh's core specializations:\n\n• **Spring Security** — Custom filter chains, stateless JWT sessions, OAuth 2.0\n• **RBAC** — Role-based access control across all microservice endpoints\n• **API Gateway** — Spring Cloud Gateway as the single entry point with rate limiting\n• **Insurance domain** — 3+ years securing enterprise financial applications at TCS`,
  },
  {
    keywords: ['database', 'sql', 'oracle', 'postgresql', 'redis', 'postgres'],
    response: `Rajesh has deep database & PL/SQL expertise:\n\n• **PL/SQL & Oracle DB** — Engineered 100+ stored procedures, functions, triggers, and packages handling 50K+ daily transactions\n• **PL/SQL Query Optimization** — Complex query optimization & index tuning achieving **30% throughput improvement**\n• **PostgreSQL** — Primary relational DB in OmniSaina microservices\n• **Redis** — Caching layer for session management and frequent queries`,
  },
  {
    keywords: ['docker', 'devops', 'cloud', 'aws', 'gcp', 'jenkins', 'deploy'],
    response: `Rajesh's DevOps experience:\n\n• **Docker & Docker Compose** — Containerized all OmniSaina microservices\n• **Jenkins** — CI/CD pipelines at TCS for automated build and deployment\n• **AWS** — AWS Cloud Foundations + Machine Learning certified (2023)\n• **GCP** — Google Cloud Ready Facilitator certified (2023)\n• **Zero-downtime deployments** — Led 4+ production releases at TCS onsite`,
  },
  {
    keywords: ['education', 'college', 'degree', 'study', 'qualification', 'cgpa', 'gpa'],
    response: `📚 **Education:**\n\n• **B.Tech in Computer Science Engineering** — SRKR Engineering College (2019–2023) — CGPA: **8.72/10**\n• **Senior Secondary (XII) MPC** — Narayana Junior College (2017–2019) — Score: **100%**\n\n**Certifications:**\n• GCP — Google Cloud Ready Facilitator (2023)\n• AWS Cloud Foundations (2023)\n• AWS Machine Learning (2023)`,
  },
  {
    keywords: ['award', 'recognition', 'achievement', 'star', 'honor'],
    response: `Rajesh has been recognized at TCS:\n\n⭐ **Star of the Month** — Awarded for resolving a critical production outage affecting **5,000+ policyholders** within SLA\n\n🏆 **Spot on the Team Award** — Recognized for driving consecutive **zero-downtime releases** across 4+ production deployments`,
  },
  {
    keywords: ['location', 'where', 'city', 'country', 'india', 'hyderabad', 'relocation', 'remote'],
    response: `Rajesh is currently based in **Hyderabad, India**. He has onsite international experience in **Johannesburg, South Africa** and is open to:\n• Remote roles worldwide\n• Relocation opportunities\n• Hybrid positions`,
  },
  {
    keywords: ['react', 'frontend', 'javascript', 'ui', 'tailwind'],
    response: `While primarily a backend engineer, Rajesh is full-stack capable:\n\n• **React.js** — Built the complete frontend for OmniSaina food aggregator\n• **Tailwind CSS** — Used for responsive UI design in projects\n• **JavaScript/TypeScript** — Proficient for frontend development\n\nHis primary strength remains **Java backend & microservices architecture**.`,
  },
  {
    keywords: ['salary', 'pay', 'compensation', 'ctc', 'package'],
    response: `I'm not able to share compensation details directly, but I'd recommend connecting with Rajesh directly via email at **rajeshkuna70@gmail.com** or LinkedIn (**linkedin.com/in/kuna-rajesh**) to discuss specifics.\n\nWould you like to leave your contact info so Rajesh can reach out to you? 😊`,
  },
];

export function getBotResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase();

  // Check contact triggers
  if (CONTACT_TRIGGER_KEYWORDS.some((k) => lower.includes(k))) {
    return '__SHOW_CONTACT_FORM__';
  }

  // FAQ matching
  for (const faq of FAQ_DATA) {
    if (faq.keywords.some((k) => lower.includes(k))) {
      return faq.response;
    }
  }

  // Default fallback
  return `That's a great question! I don't have a specific answer for that right now. Here's what I can help with:\n\n• Rajesh's TCS experience and achievements\n• Technical skills (Java, Spring Boot, Kafka, gRPC, AI)\n• The OmniSaina project\n• Education and certifications\n• Scheduling an interview 📅\n\nWhat would you like to know?`;
}
