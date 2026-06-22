"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Monitor } from "lucide-react"

const themes = [
  { label: "Claro", value: "light" as const, icon: Sun },
  { label: "Oscuro", value: "dark" as const, icon: Moon },
  { label: "Sistema", value: "system" as const, icon: Monitor },
]

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => { setMounted(true) }, [])

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const currentIcon = themes.find(t => t.value === theme)

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 rounded-lg border border-border bg-surface-card px-3 py-2 text-sm text-content-muted transition-colors hover:bg-surface-secondary"
        aria-label="Cambiar tema"
      >
        {mounted && currentIcon ? <currentIcon.icon size={16} /> : <Sun size={16} />}
      </button>
      {open && (
        <div className="absolute right-0 top-[110%] min-w-[140px] z-50 rounded-lg border border-border bg-surface-card py-1 shadow-lg">
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => { setTheme(t.value); setOpen(false) }}
              className={`flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-surface-secondary ${
                theme === t.value ? "text-accent" : "text-content-secondary"
              }`}
            >
              <t.icon size={16} />
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
