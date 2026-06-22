"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Globe,
  Server,
  Database,
  Apple,
  Cpu,
  GitBranch,
  Smartphone,
  type LucideIcon,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Server,
  Database,
  Apple,
  Cpu,
  GitBranch,
  Smartphone,
}

export interface Skill {
  name: string
  icon: string
  category: string
}

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  ai: "AI / Gen AI",
  mobile: "Mobile",
  tools: "Herramientas",
}

const categoryOrder = ["frontend", "backend", "ai", "mobile", "tools"]

export default function SkillsGrid({ skills }: { skills: Skill[] }) {
  const grouped = skills.reduce(
    (acc, skill) => {
      ;(acc[skill.category] ??= []).push(skill)
      return acc
    },
    {} as Record<string, Skill[]>
  )

  return (
    <section id="skills" className="mb-12">
      <h3 className="mb-6 text-2xl font-bold text-content">Habilidades</h3>
      <div className="flex flex-col gap-8">
        {categoryOrder
          .filter((cat) => grouped[cat])
          .map((cat, catIdx) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
            >
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-content-muted">
                {categoryLabels[cat]}
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {grouped[cat].map((skill, idx) => {
                  const Icon = iconMap[skill.icon] || Code2
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: idx * 0.05 }}
                      className="flex items-center gap-2 rounded-lg border border-border bg-surface-card/60 px-3.5 py-2 text-sm font-medium text-content-secondary shadow-xs"
                    >
                      <Icon size={18} className="shrink-0" />
                      <span>{skill.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  )
}
