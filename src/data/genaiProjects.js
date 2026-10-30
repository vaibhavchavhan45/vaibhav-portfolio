export const GEN_AI_PROJECTS = [
  {
    name: 'LLM Cost Optimization Router',
    description:
      '**LLM Cost Optimization Router** is an API and CLI that lets developers submit single or batch tasks (up to 10) and receive answers in JSON or plain text. Its **rule-based complexity-scoring engine** evaluates task complexity and compares scores against a configurable threshold to route requests to **light or heavy models** without additional LLM calls. Each response includes the routing rationale and estimated cost savings, while rule-based input validation rejects malformed requests. Built with **Python, FastAPI, LangChain, Groq, and Pydantic**, it **reduces unnecessary LLM expenditure** through complexity-aware routing.',
    image: 'images/genai/llm-cost-optimisation-router.webp',
    stack: ['Python', 'FastAPI', 'LangChain', 'Groq', 'gpt-oss-120b', 'gpt-oss-20b'],
    live: 'https://llm-cost-optimisation.onrender.com/docs',
    liveLabel: 'Live API',
    code: 'https://github.com/vaibhavchavhan45/llm-cost-optimisation',
  },
  {
    name: 'Log Intelligence Pipeline',
    description:
      '**Log Intelligence Pipeline** is an AI-powered incident triage backend that transforms raw system logs into structured reports with **severity classification**, ownership assignment, SLA mapping, and actionable **troubleshooting guidance**. Built with **Python, FastAPI, and LangChain**, it combines LLM-powered log interpretation, modular processing chains, and Pydantic validation to categorize incidents and determine response priorities. **HIGH and CRITICAL** incidents trigger automated Slack alerts with dedicated response targets of 1 hour and 15 minutes, respectively. It provides JSON and plain-text REST API endpoints, a CLI, and centralized error handling.',
    image: 'images/genai/log-intelligence-pipeline.webp',
    stack: ['Python', 'FastAPI', 'LangChain', 'Groq', 'Pydantic', 'Slack Webhook'],
    live: 'https://log-intelligence-pipeline.onrender.com/docs',
    liveLabel: 'Live API',
    code: 'https://github.com/vaibhavchavhan45/log-intelligence-pipeline',
  },
  {
    name: 'Finance Assistant Agent',
    description:
      '**Jarv45** is an AI-powered finance agent that turns natural-language requests into financial actions, enabling users to record income, track expenses, retrieve date-range spending records, and calculate balances without manually structuring transactions. Built with **JavaScript, Node.js, and Groq-SDK**, it uses LLM-driven **tool calling** to extract item names, INR amounts, and transaction details into structured operations. When requests are ambiguous, it asks for clarification. Its **multi-turn conversation loop** preserves context across interactions, feeds tool results back to the model, and **successive tool calls** until a final response is generated.',
    image: 'images/genai/jarv45.webp',
    stack: ['Node.js', 'Groq SDK', 'Llama 3.3 70B'],
    live: '',
    code: 'https://github.com/vaibhavchavhan45/Finance-AI-agent',
  },
  {
    name: 'Social Campaign Generator',
    description:
      '**Social Campaign Generator** is an AI-powered backend that transforms product details into platform-specific social media campaigns, streamlining marketing planning and content creation. Built with **Python, FastAPI, LangChain, and OpenAI LLM**, it uses prompt chaining across five LLM stages for audience profiling, strategy, copywriting, hashtags, and CTA generation, with each stage building on the previous output. Pydantic schemas guide structured parsing, while LLM validation flags invalid inputs with field-specific reason. **Sequential and LCEL pipelines** support step-by-step debugging or connected execution, with JSON and plain text REST API endpoints and a CLI.',
    image: 'images/genai/social-media-campaign.webp',
    stack: ['Python', 'FastAPI', 'LangChain', 'LCEL', 'Groq', 'Pydantic'],
    live: 'https://social-media-post-generator-yud5.onrender.com/docs',
    liveLabel: 'Live API',
    code: 'https://github.com/vaibhavchavhan45/social-media-post-generator',
  },
  {
    name: 'AI Chatbot Agent',
    description:
      '**An AI-powered research tool** that retrieves relevant web information, answers user queries, and maintains context throughout follow-up conversations. Built with **JavaScript, LangChain, and LangGraph**, it integrates **Tavily search** through LLM-powered tool calling to incorporate external information into responses. Its **conditional graph workflow** decides when to search or respond directly, while **checkpoint-based memory** preserves every message from the session. This allows users to explore topics through connected queries without repeatedly providing the same context.',
    image: 'images/genai/ai-chatbot.webp',
    stack: ['LangChain', 'LangGraph', 'Groq', 'TavilySearch', 'Bun'],
    live: '',
    code: 'https://github.com/vaibhavchavhan45/AI-chatbot/',
  },
];