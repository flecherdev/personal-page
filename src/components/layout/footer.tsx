import { Mail, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mb-4 flex flex-wrap justify-center gap-4">
          {[
            { label: "Email", href: "mailto:ezequiel.a.freire@gmail.com", icon: Mail },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/ezequiel-alejandro-freire-6a061152/", icon: Linkedin },
            { label: "GitHub", href: "https://github.com/flecherdev", icon: Github },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-card px-4 py-2 text-sm text-content-secondary transition-colors hover:bg-surface-secondary"
            >
              <link.icon size={16} />
              {link.label}
            </a>
          ))}
        </div>
        <p className="m-0 text-sm text-content-muted">
          © {new Date().getFullYear()} Ezequiel Alejandro Freire
        </p>
      </div>
    </footer>
  )
}
