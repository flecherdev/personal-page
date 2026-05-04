"use client";

import ModeToggle from "../components/mode-toggle";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "../components/ui/card";

import * as React from "react";
import {
  Mail,
  Linkedin,
  Github,
  Smartphone,
  Globe,
  Code2,
  Database,
  Server,
  Apple,
  Gamepad2,
  ArrowRight,
  ExternalLink,
  Calendar,
  MapPin
} from "lucide-react";

const cashflowScreenshots = [
  "gastos.png",
  "ingresos.png",
  "estadistica-inicio.png",
  "estadisticas-grafica.png",
  "estadisticas-detalle.png",
  "presupuesto.png",
  "more-inicio.png",
  "metas-ahorro.png",
  "compartidos.png",
  "ajustes.png",
  "ajustes-moneda.png"
];

const skills = [
  { name: "React", icon: Code2, color: "#61DAFB" },
  { name: "Next.js", icon: Globe, color: "#000000" },
  { name: "Node.js", icon: Server, color: "#339933" },
  { name: "PostgreSQL", icon: Database, color: "#336791" },
  { name: "iOS/Swift", icon: Apple, color: "#FA7343" },
  { name: "TypeScript", icon: Code2, color: "#3178C6" },
  { name: "Three.js", icon: Gamepad2, color: "#000000" },
];

const experience = [
  {
    role: "Full Stack Engineer",
    company: "Freelance / Proyectos Personales",
    period: "2022 - Actualidad",
    location: "Remoto",
    description: "Desarrollo de productos digitales end-to-end. Enfocado en crear herramientas simples que mejoren la vida diaria."
  },
];

function formatScreenshotLabel(fileName: string) {
  return fileName
    .replace(/\.png$/i, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

function NavResponsive() {
  const [open, setOpen] = React.useState(false);
  const isMobile = useIsMobile();
  const navItems = [
    { href: "#about", label: "Sobre mí" },
    { href: "#experience", label: "Experiencia" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Proyectos" },
  ];

  return (
    <nav aria-label="Secciones principales">
      {isMobile ? (
        <>
          <Button
            onClick={() => setOpen((o) => !o)}
            aria-label="Abrir menú"
            style={{ padding: "8px 12px", display: "flex", alignItems: "center", gap: 6 }}
          >
            <span style={{ fontSize: "1.2rem" }}>☰</span>
            <span>Menú</span>
          </Button>
          {open && (
            <div
              className="paper-card"
              style={{
                position: "absolute",
                left: 0,
                top: "110%",
                minWidth: 180,
                zIndex: 100,
                padding: "12px 0"
              }}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="paper-btn"
                  style={{ display: "block", padding: "10px 16px", margin: 0 }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </>
      ) : (
        <div style={{ display: "flex", gap: 8 }}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="paper-btn">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function SkillBadge({ name, icon: Icon, color }: { name: string; icon: React.ElementType; color: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 14px",
        background: "rgba(255,255,255,0.6)",
        borderRadius: 8,
        border: "1px solid #e5e7eb",
        fontSize: "0.9rem",
        fontWeight: 500,
        color: "#374151"
      }}
    >
      <Icon size={18} color={color} />
      <span>{name}</span>
    </div>
  );
}

export default function Home() {
  const isMobileValue = useIsMobile();

  return (
    <div className="paper" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)", minHeight: "100vh" }}>
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #e5e7eb",
          padding: "16px 24px"
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              className="avatar-animate"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "2px solid #e5e7eb",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                overflow: "hidden"
              }}
            >
              <Image src="/avatar.jpeg" alt="Avatar" width={44} height={44} style={{ objectFit: "cover" }} />
            </div>
            <div>
              <h1 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0, color: "#111827" }}>Ezequiel Freire</h1>
              <p style={{ fontSize: "0.8rem", color: "#6b7280", margin: 0 }}>Full Stack Engineer</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <NavResponsive />
            <ModeToggle />
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
        {/* Hero Section */}
        <section
          id="about"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
            alignItems: "center",
            marginBottom: 56
          }}
        >
          <div style={{ order: isMobileValue ? 1 : 0 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 12px",
                background: "#EFF6FF",
                borderRadius: 20,
                fontSize: "0.85rem",
                color: "#1D4ED8",
                fontWeight: 500,
                marginBottom: 16
              }}
            >
              <span style={{ width: 8, height: 8, background: "#10B981", borderRadius: "50%" }}></span>
              Disponible para proyectos
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 2.75rem)",
                fontWeight: 800,
                margin: "0 0 12px",
                color: "#111827",
                lineHeight: 1.2
              }}
            >
              Construyo productos digitales{" "}
              <span style={{ color: "#3B82F6" }}>end-to-end</span>
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#4B5563",
                lineHeight: 1.7,
                marginBottom: 24
              }}
            >
              Soy Ezequiel, full stack engineer con enfoque en crear productos personales simples y útiles.
              Trabajo con tecnologías web y mobile, y me gusta cuidar cada detalle de la experiencia de usuario.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a
                href="mailto:ezequiel.a.freire@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  background: "#111827",
                  color: "#fff",
                  borderRadius: 10,
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "transform 0.2s, box-shadow 0.2s"
                }}
              >
                <Mail size={18} />
                Contactame
              </a>
              <a
                href="#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  background: "#fff",
                  color: "#111827",
                  border: "1px solid #e5e7eb",
                  borderRadius: 10,
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "transform 0.2s, box-shadow 0.2s"
                }}
              >
                Ver proyectos
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", order: isMobileValue ? 0 : 1 }}>
            <div
              style={{
                position: "relative",
                width: 280,
                height: 280,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
                padding: 4
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  background: "#fff"
                }}
              >
                <Image
                  src="/avatar.jpeg"
                  alt="Ezequiel"
                  width={280}
                  height={280}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "40px 0" }} />

        {/* Experience Section */}
        <section id="experience" style={{ marginBottom: 48 }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 24, color: "#111827" }}>
            Experiencia
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {experience.map((exp, idx) => (
              <Card
                key={idx}
                style={{
                  padding: 20,
                  borderRadius: 12,
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 600, margin: "0 0 4px", color: "#111827" }}>
                      {exp.role}
                    </h4>
                    <p style={{ fontSize: "0.95rem", color: "#3B82F6", margin: 0, fontWeight: 500 }}>
                      {exp.company}
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#6b7280", fontSize: "0.9rem" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: "0.95rem", color: "#4B5563", margin: 0, lineHeight: 1.6 }}>
                  {exp.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "40px 0" }} />

        {/* Skills Section */}
        <section id="skills" style={{ marginBottom: 48 }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 24, color: "#111827" }}>
            Habilidades
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {skills.map((skill) => (
              <SkillBadge key={skill.name} {...skill} />
            ))}
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "40px 0" }} />

        {/* Projects Section */}
        <section id="projects" style={{ marginBottom: 48 }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 24, color: "#111827" }}>
            Proyectos
          </h3>
          <Card
            style={{
              padding: 0,
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid #e5e7eb",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
            }}
          >
            <div style={{ padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <h4 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: "#111827" }}>
                      Cash Flow
                    </h4>
                    <span
                      style={{
                        padding: "4px 10px",
                        background: "#FEF3C7",
                        color: "#D97706",
                        borderRadius: 12,
                        fontSize: "0.75rem",
                        fontWeight: 600
                      }}
                    >
                      En desarrollo
                    </span>
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "#6b7280", margin: "4px 0 0" }}>
                    App de finanzas personales para iOS
                  </p>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <span
                    style={{
                      padding: "6px 12px",
                      background: "#F3F4F6",
                      borderRadius: 6,
                      fontSize: "0.85rem",
                      color: "#374151",
                      fontWeight: 500
                    }}
                  >
                    <Smartphone size={14} style={{ marginRight: 4, verticalAlign: "middle" }} />
                    iOS
                  </span>
                  <span
                    style={{
                      padding: "6px 12px",
                      background: "#F3F4F6",
                      borderRadius: 6,
                      fontSize: "0.85rem",
                      color: "#374151",
                      fontWeight: 500
                    }}
                  >
                    Swift
                  </span>
                </div>
              </div>

              <p style={{ fontSize: "0.95rem", color: "#4B5563", lineHeight: 1.6, marginBottom: 16 }}>
                App de gestión de gastos e ingresos personales. Nació de la necesidad de tener una herramienta
                simple y sin complejidades innecesarias. Enfoque en usabilidad y control financiero consciente.
              </p>

              <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                <a
                  href="/privacy/cashflow"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "8px 14px",
                    background: "#EFF6FF",
                    color: "#1D4ED8",
                    borderRadius: 8,
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    textDecoration: "none"
                  }}
                >
                  <ExternalLink size={16} />
                  Política de privacidad
                </a>
              </div>

              <div>
                <p style={{ fontSize: "0.85rem", color: "#6b7280", marginBottom: 12, fontWeight: 500 }}>
                  Capturas de pantalla
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    overflowX: "auto",
                    paddingBottom: 12,
                    scrollSnapType: "x mandatory"
                  }}
                >
                  {cashflowScreenshots.slice(0, 5).map((name) => (
                    <div
                      key={name}
                      style={{
                        minWidth: 180,
                        borderRadius: 12,
                        overflow: "hidden",
                        border: "1px solid #e5e7eb",
                        background: "#fff",
                        scrollSnapAlign: "center"
                      }}
                    >
                      <div style={{ padding: 10, background: "linear-gradient(180deg, #f8fafc 0%, #fff 100%)" }}>
                        <Image
                          src={`/assets/cashflow/screenshots/${encodeURIComponent(name)}`}
                          alt={formatScreenshotLabel(name)}
                          width={160}
                          height={345}
                          style={{ width: "100%", height: "auto", borderRadius: 8 }}
                        />
                      </div>
                      <p style={{ padding: "8px 10px", fontSize: "0.75rem", color: "#6b7280", margin: 0 }}>
                        {formatScreenshotLabel(name)}
                      </p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: "0.8rem", color: "#9CA3AF", marginTop: 8 }}>
                  Deslizá horizontalmente para ver más →
                </p>
              </div>
            </div>
          </Card>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "40px 0" }} />

        {/* Footer */}
        <footer style={{ textAlign: "center", padding: "24px 0" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
            <a
              href="mailto:ezequiel.a.freire@gmail.com"
              className="paper-btn"
              style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
              aria-label="Email"
            >
              <Mail size={16} />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/ezequiel-alejandro-freire-6a061152/"
              className="paper-btn"
              style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/flecherdev"
              className="paper-btn"
              style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
          <p style={{ fontSize: "0.9rem", color: "#9CA3AF", margin: 0 }}>
            © {new Date().getFullYear()} Ezequiel Alejandro Freire
          </p>
        </footer>
      </main>
    </div>
  );
}