export interface Project {
  title: string;
  slug: string;
  date: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  image_alt?: string;
  content: string;
}

const projects: Project[] = [
  {
    title: "InternTrackr",
    slug: "interntrackr",
    date: "January 15, 2025",
    description: "Full-stack internship management web app with real-time updates and a Spring Boot microservice for job-fit scoring.",
    tech: ["React", "TypeScript", "Node.js", "AWS Lambda"],
    github: "",
    demo: "",
    image: "/images/portfolio.svg",
    image_alt: "InternTrackr project screenshot",
    content: "InternTrackr is a comprehensive full-stack application designed to help students manage their internship applications and track their progress. The application features real-time updates and includes a Spring Boot microservice that provides intelligent job-fit scoring to help users identify the best opportunities for their skills and experience."
  },
  {
    title: "2-D Ising Model Simulation",
    slug: "2d-ising-model-simulation",
    date: "December 10, 2024",
    description: "Monte Carlo simulation of magnetic phase transitions using Metropolis–Hastings algorithm; analyzed critical temperature via Binder cumulant crossings.",
    tech: ["Python", "NumPy", "Numba", "Matplotlib"],
    github: "",
    demo: "",
    image: "/images/analytics.svg",
    image_alt: "2-D Ising Model visualization",
    content: "This project implements a Monte Carlo simulation of the 2-D Ising model to study magnetic phase transitions. Using the Metropolis-Hastings algorithm, I simulated spin configurations and analyzed critical temperature behavior through Binder cumulant crossings. The simulation provides insights into statistical mechanics and phase transition phenomena."
  },
  {
    title: "Amazon FBA Profit Predictor",
    slug: "amazon-fba-profit-predictor",
    date: "January 20, 2025",
    description: "SaaS tool forecasting product ROI, accounting for Amazon fees and shipping costs — designed for automated e-commerce analysis. Separate from my high school arbitrage business. (In Progress)",
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    github: "",
    demo: "",
    image: "/images/amazon-fba.svg",
    image_alt: "Amazon FBA Profit Predictor dashboard",
    content: "The Amazon FBA Profit Predictor is a SaaS tool that helps e-commerce sellers forecast product ROI by accurately accounting for Amazon fees and shipping costs. Built with FastAPI and PostgreSQL, this tool is designed for automated e-commerce analysis and decision-making. This project is separate from my high school arbitrage business and is currently in progress."
  },
  {
    title: "Credit Card Management App",
    slug: "credit-card-management-app",
    date: "November 5, 2024",
    description: "Desktop app managing card types and transactions using abstraction, inheritance, and reporting tools with JavaFX GUI.",
    tech: ["Java", "JavaFX", "SQL", "OOP"],
    github: "",
    demo: "",
    image: "/images/portfolio.svg",
    image_alt: "Credit Card Management App interface",
    content: "A desktop application built with Java and JavaFX that helps users manage different credit card types and track transactions. The application demonstrates object-oriented programming principles including abstraction and inheritance, and includes comprehensive reporting tools for financial analysis."
  }
];

export default projects;

