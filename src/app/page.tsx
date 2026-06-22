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
    role: "Fullstack · Altas Onboarding",
    company: "Accenture — Banco Galicia",
    period: "jun 2025 - Actualidad",
    location: "Remoto",
    description:
      "Desarrollo y despliegue del Back Office para la trazabilidad del onboarding de nuevos clientes. Arquitectura fullstack con NestJS, Next.js y MongoDB, integración con Jenkins para CI/CD.",
    technologies: ["Next.js", "NestJS", "MongoDB", "Jenkins", "TypeScript"],
  },
  {
    role: "Frontend Developer · Haberes",
    company: "Accenture — Banco Galicia",
    period: "jul 2024 - jun 2025",
    location: "Remoto",
    description:
      "Desarrollo frontend para la gestión de haberes bancarios. Stack basado en Next.js con backend en NestJS.",
    technologies: ["Next.js", "NestJS", "TypeScript"],
  },
  {
    role: "Backend NestJS · Hacete Galicia",
    company: "Accenture — Banco Galicia",
    period: "feb 2024 - abr 2025",
    location: "Remoto",
    description:
      "Desarrollo backend con NestJS para el flujo de asociación de nuevos clientes (Hacete Galicia). APIs REST, microservicios e integración con sistemas legacy bancarios.",
    technologies: ["NestJS", "Next.js", "TypeScript", "APIs REST"],
  },
  {
    role: "Full-stack Developer CIO",
    company: "Accenture — Banco Galicia",
    period: "ago 2022 - ene 2024",
    location: "Argentina",
    description:
      "Desarrollo full stack dentro de la unidad CIO del banco. Construcción de soluciones internas con tecnologías modernas.",
    technologies: ["NestJS", "Next.js", "TypeScript", "MongoDB"],
  },
  {
    role: "Full Stack Developer",
    company: "UNX Digital",
    period: "2022 - 2024",
    location: "Remoto",
    description:
      "Desarrollo y mantenimiento de producto web y mobile full stack. Participación en todo el ciclo de vida del producto, desde requerimientos hasta deploy. Metodología ágil con Scrum y Jira.",
    technologies: ["React", "React Native", "NestJS", "TypeScript", "Node.js"],
  },
  {
    role: "Full Stack Engineer",
    company: "Treggo Argentina",
    period: "2020 - 2022",
    location: "Remoto",
    description:
      "Desarrollo y mantenimiento de app web y panel administrativo. Stack variado cubriendo frontend, backend y mobile con Flutter. Metodología ágil Scrum con ClickUp.",
    technologies: ["Node.js", "Express", "MongoDB", "Angular", "React", "Flutter"],
  },
  {
    role: "Full Stack Developer",
    company: "NCR Corporation",
    period: "2019 - 2020",
    location: "Buenos Aires",
    description:
      "Desarrollo y mantenimiento de aplicaciones web para ATM y soluciones corporativas. Trabajo con Angular, Django y PWAs en entorno de soporte técnico nivel 1 y gestión de incidencias.",
    technologies: ["Angular", "Django", "JavaScript", "PWA", "SQL", "Scrum"],
  },
  {
    role: "Full Stack Engineer",
    company: "Freelance / Proyectos Personales",
    period: "2018 - Actualidad",
    location: "Remoto",
    description:
      "Desarrollo de productos digitales end-to-end. Enfocado en crear herramientas simples que mejoren la vida diaria. Exploración activa de iOS nativo, integraciones con IA generativa, agents y copilotos.",
    technologies: ["React", "Next.js", "iOS/Swift", "Node.js", "AI Agents", "RAG/LLM"],
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
  { name: "Jenkins", icon: "Server", category: "tools" },
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
