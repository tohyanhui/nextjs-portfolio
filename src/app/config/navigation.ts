export const navigationLinks = [
  { href: "#features", label: "Showcase" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export const socialLinks = {
  github: "https://github.com/tohyanhui",
  linkedin: "https://www.linkedin.com/in/tohyanhui/",
  twitter: "https://x.com/tohyanhui01",
} as const;

export const contactInfo = {
  email: "yanhuiphone@gmail.com",
  location: "Bukit Panjang",
} as const;

export const projects = [
  {
    id: "momo",
    title: "Momo",
    description: "A task management system with a GUI optimized for command-line style interactions.",
    image: "/item-1.png",
    alt: "Momo task management system interface with command-line style GUI",
    technologies: ["Java", "JavaFX", "CSS", "Gradle"],
    github: "https://github.com/tohyanhui/ip",
  },
  {
    id: "toktok",
    title: "TokTok",
    description: "A machine learning–based system using DeBERTa to classify online reviews automatically.",
    image: "/item-2.png",
    alt: "TokTok machine learning review classification system using DeBERTa",
    technologies: ["Python", "PyTorch", "Hugging Face", "Pandas", "Scikit-learn", "Streamlit", "Google Colab"],
    github: "https://github.com/tohyanhui/TikTokTechJam2025",
  },
  {
    id: "linkedpair",
    title: "LinkedPair",
    description: "A React Native app using natural language processing with OpenAI embeddings to match NUS students.",
    image: "/item-3.png",
    alt: "LinkedPair student matching app using OpenAI embeddings and NLP",
    technologies: ["React Native", "JavaScript", "Firebase", "OpenAI API", "Expo"],
    github: "https://github.com/tohyanhui/linkedpair",
  },
] as const;
