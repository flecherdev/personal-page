"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

export interface Experience {
  role: string
  company: string
  period: string
  location: string
  description: string
  technologies?: string[]
}

export default function ExperienceTimeline({ items }: { items: Experience[] }) {
  return (
    <section id="experience" className="mb-12">
      <h3 className="mb-6 text-2xl font-bold text-content">Experiencia</h3>
      <div className="relative flex flex-col gap-4 pl-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-24px)] before:w-0.5 before:bg-border">
        {items.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative rounded-xl border border-border bg-surface-card p-5 shadow-xs before:absolute before:-left-[21px] before:top-[22px] before:h-2.5 before:w-2.5 before:rounded-full before:border-2 before:border-accent before:bg-surface-card"
          >
            <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
              <div>
                <h4 className="m-0 text-lg font-semibold text-content">{exp.role}</h4>
                <p className="m-0 text-sm font-medium text-accent">{exp.company}</p>
              </div>
              <div className="flex items-center gap-3 text-sm text-content-muted">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {exp.location}
                </span>
              </div>
            </div>
            <p className="m-0 text-sm leading-relaxed text-content-secondary">
              {exp.description}
            </p>
            {exp.technologies && exp.technologies.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-surface-secondary px-2.5 py-1 text-xs font-medium text-content-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
