import Header from "../components/layout/header"
import Footer from "../components/layout/footer"
import Hero from "../components/sections/hero"
import ExperienceTimeline from "../components/sections/experience-timeline"
import type { Experience } from "../components/sections/experience-timeline"
import SkillsGrid from "../components/sections/skills-grid"
import type { Skill } from "../components/sections/skills-grid"
import ProjectsShowcase from "../components/sections/projects-showcase"
import type { Project } from "../components/sections/projects-showcase"

const experience: Experience[] = [
  {
    role: "Backend NestJS - Banco Galicia",
    company: "Accenture",
    period: "2024 - Actualidad",
    location: "Híbrido",
    description:
      "Desarrollo backend con NestJS para productos bancarios: onboarding digital y flujos de asociación (Hacete Galicia). Integración con sistemas legacy, APIs REST y microservicios en arquitectura cloud.",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    role: "Full Stack Developer",
    company: "UNX Digital",
    period: "2022 - 2024",
    location: "Remoto",
    description:
      "Desarrollo y mantenimiento de producto web y mobile full stack. Metodología ágil con Scrum y Jira. Manejo de repositorio Git/Bitbucket.",
    technologies: ["React", "React Native", "NestJS", "TypeScript"],
  },
  {
    role: "Full Stack Engineer",
    company: "Treggo Argentina",
    period: "2020 - 2022",
    location: "Remoto",
    description:
      "Desarrollo y mantenimiento de app web y panel administrativo. Metodología ágil Scrum con ClickUp. Mantenimiento de repositorios GitHub.",
    technologies: ["Node.js", "Express", "MongoDB", "Angular", "React", "Flutter"],
  },
  {
    role: "Full Stack Developer",
    company: "NCR Corporation",
    period: "2019 - 2020",
    location: "Buenos Aires",
    description:
      "Desarrollo y mantenimiento de SPA para ATM. Trabajo con Angular, Django y PWAs en entorno corporativo.",
    technologies: ["Angular", "Django", "JavaScript", "PWA", "SQL"],
  },
  {
    role: "Full Stack Engineer",
    company: "Freelance / Proyectos Personales",
    period: "2018 - Actualidad",
    location: "Remoto",
    description:
      "Desarrollo de productos digitales end-to-end. Enfocado en crear herramientas simples que mejoren la vida diaria, explorando iOS nativo e integraciones con IA.",
    technologies: ["React", "Next.js", "iOS/Swift", "Node.js", "AI Agents"],
  },
]

const skills: Skill[] = [
  { name: "React", icon: "Code2", category: "frontend" },
  { name: "Next.js", icon: "Globe", category: "frontend" },
  { name: "TypeScript", icon: "Code2", category: "frontend" },
  { name: "Tailwind CSS", icon: "Code2", category: "frontend" },
  { name: "Three.js", icon: "Cpu", category: "frontend" },
  { name: "Node.js", icon: "Server", category: "backend" },
  { name: "NestJS", icon: "Server", category: "backend" },
  { name: "PostgreSQL", icon: "Database", category: "backend" },
  { name: "MongoDB", icon: "Database", category: "backend" },
  { name: "AI Agents", icon: "Cpu", category: "ai" },
  { name: "Copilot Extensions", icon: "Cpu", category: "ai" },
  { name: "Orchestration", icon: "Cpu", category: "ai" },
  { name: "RAG / LLM", icon: "Cpu", category: "ai" },
  { name: "iOS/Swift", icon: "Apple", category: "mobile" },
  { name: "React Native", icon: "Smartphone", category: "mobile" },
  { name: "Git", icon: "GitBranch", category: "tools" },
  { name: "Docker", icon: "Server", category: "tools" },
]

const projects: Project[] = [
  {
    name: "Cash Flow",
    description: "App de finanzas personales para iOS",
    status: "En desarrollo",
    statusColor: "#D97706",
    technologies: ["iOS", "Swift"],
    screenshots: [
      "gastos.png",
      "ingresos.png",
      "estadistica-inicio.png",
      "estadisticas-grafica.png",
      "estadisticas-detalle.png",
    ],
    links: [
      { label: "Política de privacidad", href: "/privacy/cashflow" },
    ],
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main className="mx-auto max-w-[1100px] px-6 py-10">
        <Hero />
        <hr className="my-10 border-border" />
        <ExperienceTimeline items={experience} />
        <hr className="my-10 border-border" />
        <SkillsGrid skills={skills} />
        <hr className="my-10 border-border" />
        <ProjectsShowcase projects={projects} />
      </main>
      <Footer />
    </div>
  )
}
