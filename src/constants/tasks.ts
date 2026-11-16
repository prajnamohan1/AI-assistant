import { Task } from "../types";

export const fallbackTasks: Task[] = [
  {
    id: "rewrite",
    title: "Rewrite",
    description: "Improve your writing while keeping your meaning.",
    placeholder: "Paste or write something...",
    options: {
      tone: [
        { id: "natural", label: "Natural" },
        { id: "professional", label: "Professional" },
        { id: "friendly", label: "Friendly" },
        { id: "direct", label: "Direct" },
      ],
      level: [
        { id: "light", label: "Light" },
        { id: "medium", label: "Medium" },
        { id: "strong", label: "Strong" },
      ],
    },
  },

  {
    id: "summarize",
    title: "Summarize",
    description: "Turn long content into something easy to understand.",
    placeholder: "Paste text to summarize...",
    options: {
      length: [
        { id: "short", label: "Short" },
        { id: "medium", label: "Medium" },
        { id: "detailed", label: "Detailed" },
      ],
      format: [
        { id: "paragraph", label: "Paragraph" },
        { id: "bullets", label: "Bullets" },
      ],
    },
  },

  {
    id: "explain",
    title: "Explain",
    description: "Understand difficult topics in a way that works for you.",
    placeholder: "What do you want explained?",
    options: {
      level: [
        { id: "simple", label: "Simple" },
        { id: "intermediate", label: "Intermediate" },
        { id: "expert", label: "Expert" },
      ],
      format: [
        { id: "paragraph", label: "Paragraph" },
        { id: "steps", label: "Steps" },
        { id: "examples", label: "Examples" },
      ],
    },
  },

  {
    id: "brainstorm",
    title: "Brainstorm",
    description: "Generate useful ideas for almost any topic.",
    placeholder: "What do you need ideas for?",
    options: {
      quantity: [
        { id: "5", label: "5 ideas" },
        { id: "10", label: "10 ideas" },
        { id: "20", label: "20 ideas" },
      ],
      style: [
        { id: "practical", label: "Practical" },
        { id: "creative", label: "Creative" },
        { id: "bold", label: "Bold" },
      ],
    },
  },

  {
    id: "translate",
    title: "Translate",
    description: "Translate your text naturally and accurately.",
    placeholder: "Type or paste text...",
    options: {
      language: [
        { id: "english", label: "English" },
        { id: "spanish", label: "Spanish" },
        { id: "french", label: "French" },
        { id: "german", label: "German" },
        { id: "dutch", label: "Dutch" },
      ],
      style: [
        { id: "natural", label: "Natural" },
        { id: "literal", label: "Literal" },
        { id: "professional", label: "Professional" },
      ],
    },
  },

  {
    id: "email",
    title: "Email",
    description: "Create clear and professional emails in seconds.",
    placeholder: "What should the email say?",
    options: {
      recipient: [
        { id: "client", label: "Client" },
        { id: "boss", label: "Boss" },
        { id: "colleague", label: "Colleague" },
        { id: "friend", label: "Friend" },
        { id: "other", label: "Other" },
      ],
      tone: [
        { id: "professional", label: "Professional" },
        { id: "friendly", label: "Friendly" },
        { id: "direct", label: "Direct" },
        { id: "persuasive", label: "Persuasive" },
      ],
      length: [
        { id: "short", label: "Short" },
        { id: "medium", label: "Medium" },
        { id: "detailed", label: "Detailed" },
      ],
    },
  },

  {
    id: "social",
    title: "Social Media",
    description: "Create engaging posts for your audience.",
    placeholder: "What is your post about?",
    options: {
      platform: [
        { id: "instagram", label: "Instagram" },
        { id: "linkedin", label: "LinkedIn" },
        { id: "x", label: "X" },
        { id: "facebook", label: "Facebook" },
      ],
      tone: [
        { id: "professional", label: "Professional" },
        { id: "friendly", label: "Friendly" },
        { id: "exciting", label: "Exciting" },
        { id: "minimal", label: "Minimal" },
      ],
      length: [
        { id: "short", label: "Short" },
        { id: "medium", label: "Medium" },
        { id: "long", label: "Long" },
      ],
    },
  },
];