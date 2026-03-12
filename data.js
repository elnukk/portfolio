const portfolioData = {

  // --- HIGHLIGHTS (featured work, shown first) ---
  highlights: [
    {
      title: "MCP for Digital Green",
      tech: "FastAPI • Docker • HuggingFace",
      image: "src/mcp1.png",
      bullets: [
        "Built Model Context Protocol server for accessing farm advisory data across 38+ regions",
        "Deployed on HuggingFace Spaces with Docker for scalable access",
        "Open-sourced and integrated with Claude Desktop for developer usage"
      ],
      link: "https://huggingface.co/spaces/elanuk/mcp-hf"
    },
    {
      title: "ChatLab: AI Experimentation Platform",
      tech: "Next.js • FastAPI • PostgreSQL • Qualtrics",
      image: "src/chatlab.png",
      bullets: [
        "Built full-stack platform for controlled human-LLM interaction studies",
        "Designed PostgreSQL schema and Python pipelines for multi-session chat data analysis",
        "Engineered backend to dynamically switch between memory-enabled and stateless AI agents"
      ],
      link: "https://www.chat2survey.com/"
    },
    {
      title: "Planet Labs Data Tools",
      tech: "Python • APIs • Data Pipelines",
      image: "src/planet.png",
      bullets: [
        "Leading technical direction to build satellite data access tools for partner organizations",
        "Architecting APIs and data workflows to translate complex geospatial data into usable interfaces",
        "Mentoring student teams on system design, deployment, and production best practices"
      ],
      link: null
    }
  ],

  // --- PROFESSIONAL EXPERIENCE ---
  experience: [
    {
      role: "Research Assistant",
      company: "Stanford Graduate School of Business",
      date: "09/2025 – Present",
      description: "Building full-stack experimentation platform to study human-LLM interaction, memory effects, and AI agent design. PostgreSQL, FastAPI, Next.js."
    },
    {
      role: "Product & Software Intern",
      company: "Digital Green",
      date: "06 – 09/2025",
      description: "Shipped LLM-based features to 5M+ farmers across 38+ regions. Built prompt-driven chatbot, notification system, and open-sourced MCP advisory tool."
    },
    {
      role: "Project Lead, Teaching Assistant",
      company: "Planet Labs, CS51/52",
      date: "09/2025 – Present",
      description: "Leading technical direction for satellite data tools serving biodiversity organizations. Architecting APIs, mentoring student teams on system design and deployment."
    },
    {
      role: "AI Developer",
      company: "Marketecture",
      date: "03 – 05/2025",
      description: "Built RAG system integrating SQL + GPT for content workflows. Automated processes across 10+ client accounts, reducing manual work by 50%."
    }
  ],

  // --- PROJECTS & EXPERIMENTS ---
  projects: [
    {
      title: "MCP Benchmark Suite",
      tech: "Python • Packages • Evaluation",
      image: "src/mcpbench.png",
      bullets: [
        "Built evaluation framework for testing Model Context Protocol implementations",
        "Open-sourced benchmarking tools for MCP server quality and performance"
      ],
      link: "https://github.com/elnukk/mcpbench"
    },
    {
      title: "Docs2Notion",
      tech: "Node.js • Vercel",
      image: "src/docs2notion.png",
      bullets: [
        "Built and launched converter tool for migrating Google Docs to Notion workspaces",
        "Deployed serverless on Vercel with 400+ monthly active users",
        "Sustained organic adoption through product-market fit and word-of-mouth"
      ],
      link: "https://docs2notion.com/"
    },
    {
      title: "Beeline Reader x CS51",
      tech: "MongoDB • Express • React • Node • Claude API",
      image: "src/cs51.png",
      bullets: [
        "Built real-time collaborative reading platform with shared state and live interaction",
        "Integrated AI-generated readings and quizzes for adaptive learning flows",
        "Designed REST APIs for session management and multi-user synchronization"
      ],
      link: null
    },
    {
      title: "CESTA Digital Restoration",
      tech: "QGIS • React",
      image: "src/cesta.png",
      bullets: [
        "Created digital restoration of historical map using georeferencing and geospatial analysis",
        "Built interactive web interface for exploring historical data",
        "Applied computational methods to historical research and preservation"
      ],
      link: "https://colonial-map.vercel.app/"
    }
  ],

  // --- HONORS ---
  honors: [
    {
      name: "TreeHacks Sustainability Winner",
      description: "Won one of 4 track prizes among 1000 participants with a marketplace prototype connecting farmers and buyers."
    },
    {
      name: "Rise Fellowship",
      description: "One of 100 students selected globally among 15k+ applications."
    },
    {
      name: "Earth Prize Scholar",
      description: "North America Finalist for climate innovation project."
    },
    {
      name: "Moonshot Pirates Winner",
      description: "Won Shape the Future Challenge for climate tech prototype."
    },
    {
      name: "Kode With Klossy x Estée Lauder Finalist",
      description: "One of 5 finalists selected to demo web design project to Estée Lauder team."
    }
  ],

  // --- FEATURES (podcasts, press, talks) ---
  features: [
    {
      name: "UN STEM4ALL Podcast",
      description: "Discussed supporting girls in STEM and Gen Z engagement with emerging technologies."
    },
    {
      name: "This Week in Voice",
      description: "Spoke about AI and labor, conversational AI, and Gen Z voice AI adoption patterns."
    },
    {
      name: "Another Climate Tech Podcast",
      description: "Featured for youth climate innovation and Aeifloria project."
    }
  ]

};