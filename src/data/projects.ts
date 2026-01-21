import imgAdminify from "../assets/projects/adminify.png";
import imgConnect4 from "../assets/projects/connect4.png";
import imgPortfolio from "../assets/projects/portfolio.png";

export const projects = [
    {
        title: "NUS Adminify",
        description: "A centralized dashboard for students to raise administrative issues to staff members.",
        tags: ["Next.js", "Tailwind CSS", "Vercel", "React", "Firebase"],
        link: "https://github.com/mihirniyogi/extremeoptimists-adminify",
        image: imgAdminify
    },
    {
        title: "Connect4 AI",
        description: "An AI version of the classic board game built using game state evaluation and recursive search techniques.",
        tags: ["Python", "Pygame", "AI"],
        image: imgConnect4
    },
    {
        title: "Hosted Portfolio",
        description: "The site you are currently viewing. Self-hosted on a Raspberry Pi with automated deployment workflows.",
        tags: ["Astro", "Linux", "Nginx"],
        link: "https://github.com/mihirniyogi/PortfolioWebsite",
        image: imgPortfolio
    },
    {
        title: "Learn With RAG",
        description: "A desktop app that leverages Retrieval-Augmented Generation (RAG) and local LLMs to provide context-aware answers to students' queries.",
        tags: ["Tauri", "Rust", "Python", "LangChain", "Ollama"],
        inProgress: true,
    }
];