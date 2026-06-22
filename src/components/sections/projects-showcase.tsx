"use client"

import Image from "next/image"
import { Smartphone, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  name: string
  description: string
  status: string
  statusColor: string
  technologies: string[]
  screenshots?: string[]
  links: ProjectLink[]
}

function formatScreenshotLabel(fileName: string) {
  return fileName
    .replace(/\.png$/i, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase())
}

function ScreenshotCarousel({ screenshots }: { screenshots: string[] }) {
  return (
    <div>
      <p className="mb-3 text-xs font-medium text-content-muted">
        Capturas de pantalla
      </p>
      <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory">
        {screenshots.slice(0, 5).map((name) => (
          <div
            key={name}
            className="min-w-[180px] snap-center overflow-hidden rounded-xl border border-border bg-surface-card"
          >
            <div className="bg-linear-to-b from-surface to-surface-card p-2.5">
              <Image
                src={`/assets/cashflow/screenshots/${encodeURIComponent(name)}`}
                alt={formatScreenshotLabel(name)}
                width={160}
                height={345}
                className="h-auto w-full rounded-lg"
              />
            </div>
            <p className="m-0 px-2.5 py-2 text-xs text-content-muted">
              {formatScreenshotLabel(name)}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-content-muted/60">
        Deslizá horizontalmente para ver más &rarr;
      </p>
    </div>
  )
}

export default function ProjectsShowcase({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="mb-12">
      <h3 className="mb-6 text-2xl font-bold text-content">Proyectos</h3>
      <div className="flex flex-col gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
            className="overflow-hidden rounded-2xl border border-border bg-surface-card shadow-sm"
          >
            <div className="p-6">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h4 className="m-0 text-xl font-bold text-content">
                      {project.name}
                    </h4>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                      style={{
                        backgroundColor: project.statusColor + "20",
                        color: project.statusColor,
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="m-0 mt-1 text-sm text-content-muted">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 rounded-md bg-surface-secondary px-2.5 py-1 text-xs font-medium text-content-secondary"
                    >
                      {tech === "iOS" && <Smartphone size={12} />}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.links.length > 0 && (
                <div className="mb-5 flex gap-2.5">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-3.5 py-2 text-sm font-medium text-blue-700 decoration-transparent transition-colors hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50"
                    >
                      <ExternalLink size={16} />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              {project.screenshots && project.screenshots.length > 0 && (
                <ScreenshotCarousel screenshots={project.screenshots} />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
