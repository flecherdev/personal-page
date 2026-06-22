"use client"

import * as React from "react"

const navItems = [
  { href: "#about", label: "Sobre mí" },
  { href: "#experience", label: "Experiencia" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Proyectos" },
]

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(false)
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [breakpoint])
  return isMobile
}

export function NavResponsive() {
  const [open, setOpen] = React.useState(false)
  const isMobile = useIsMobile()

  return (
    <nav aria-label="Secciones principales">
      {isMobile ? (
        <>
          <button
            onClick={() => setOpen(o => !o)}
            className="flex items-center gap-1.5 rounded-lg border border-border bg-surface-card px-3 py-2 text-sm text-content-secondary"
            aria-label="Abrir menú"
          >
            <span className="text-lg leading-none">☰</span>
            <span>Menú</span>
          </button>
          {open && (
            <div className="absolute left-0 top-[110%] z-50 min-w-[180px] rounded-lg border border-border bg-surface-card py-1 shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2.5 text-sm text-content-secondary transition-colors hover:bg-surface-secondary"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="flex gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-content-muted transition-colors hover:bg-surface-secondary hover:text-content"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
