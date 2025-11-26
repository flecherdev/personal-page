
"use client";

import ModeToggle from "../components/mode-toggle";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "../components/ui/card";

import * as React from "react";
import Chatbot from "../components/Chatbot";

function useIsMobile(breakpoint = 700) {
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
  return (
    <nav aria-label="Secciones principales" style={{ position: "relative" }}>
      {isMobile ? (
        <>
          <Button onClick={() => setOpen((o) => !o)} aria-label="Abrir menú" style={{ marginRight: 8 }}>
            <span role="img" aria-label="menu">☰</span>
          </Button>
          {open && (
            <div className="paper-card" style={{ position: "absolute", left: 0, top: "110%", minWidth: 160, zIndex: 10 }}>
              <a href="#about" className="paper-btn" style={{ display: "block", marginBottom: 4 }} onClick={() => setOpen(false)}>Quién soy</a>
              <a href="#experience" className="paper-btn" style={{ display: "block", marginBottom: 4 }} onClick={() => setOpen(false)}>Trayectoria</a>
              <a href="#education" className="paper-btn" style={{ display: "block" }} onClick={() => setOpen(false)}>Educación</a>
            </div>
          )}
        </>
      ) : (
        <div className="paper-nav">
          <a href="#about" className="paper-btn">Quién soy</a>
          <a href="#experience" className="paper-btn">Trayectoria</a>
          <a href="#education" className="paper-btn">Educación</a>
        </div>
      )}
    </nav>
  );
}


export default function Home() {
  return (
    <div className="paper" style={{ background: "#f7f7f7", minHeight: "100vh" }}>
      <header className="paper-header" style={{ position: "relative", borderBottom: "2px solid #e0e0e0", paddingBottom: 12 }}>
        <div style={{ position: "absolute", top: 12, right: 16, zIndex: 1000 }}>
          <ModeToggle />
        </div>
        <div className="flex-row flex-space-between flex-align-center" style={{ flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            <div className="avatar-animate" style={{
              width: "56px",
              height: "56px",
              minWidth: "48px",
              minHeight: "48px",
              borderRadius: "50%",
              border: "2px solid #e0e0e0",
              boxShadow: "0 2px 8px #ccc",
              background: "#fff",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "12px"
            }}>
              <Image src="/avatar.jpeg" alt="Avatar" width={56} height={56} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </div>
            <div style={{ minWidth: 0 }}>
              <h1 className="paper-title" style={{ fontSize: "clamp(1.3rem, 5vw, 2.2rem)", fontWeight: "bold", margin: 0 }}>Ezequiel</h1>
              <p className="paper-subtitle" style={{ fontSize: "clamp(0.9rem, 3vw, 1.1rem)", color: "#666", margin: 0 }}>Frontend Engineer</p>
            </div>
          </div>
          <div className="flex-row flex-align-center" style={{ gap: 16, flexWrap: "wrap" }}>
            <NavResponsive />
          </div>
        </div>
      </header>

      <main className="paper-main" style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
        {/* Hero */}
        <section className="paper-section" style={{ marginBottom: 32, display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center" }}>
          <div style={{ flex: "1 1 260px", minWidth: "220px" }}>
            <h2 className="paper-title" style={{ fontSize: "clamp(1.1rem, 5vw, 2rem)", fontWeight: "bold", margin: 0 }}>Ezequiel Alejandro Freire</h2>
            <p className="paper-subtitle" style={{ fontSize: "clamp(0.9rem, 3vw, 1.1rem)", color: "#444", margin: 0 }}>Full Stack Engineer (Node, MongoDB, PostgreSQL, Angular, React)</p>
            <p className="paper-desc" style={{ marginTop: 16 }}>Hola, mi nombre es Ezequiel y concluí la carrera de Técnico Superior en Programación en la Universidad Tecnológica Nacional. Me describo como curioso: siempre estoy aprendiendo algo nuevo. Actualmente me centro en entornos web y mobile (Angular, React) y exploro el desarrollo de juegos 2D con Godot, pixel art y GDScript.</p>
            <div className="flex-row" style={{ gap: 12, marginTop: 24, flexWrap: "wrap" }}>
              <Button>
                <span role="img" aria-label="email" style={{ marginRight: 6 }}>✉️</span>
                <a href="mailto:ezequiel.a.freire@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>Contactame</a>
              </Button>
              <a href="#experience" className="paper-btn" style={{ marginLeft: 8 }}>
                <span role="img" aria-label="trayectoria" style={{ marginRight: 4 }}>🗂️</span>
                Ver trayectoria
              </a>
            </div>
          </div>
          <div style={{ flex: "1 1 180px", minWidth: "160px", display: "flex", justifyContent: "center" }}>
            <div className="paper-card" style={{ width: "min(220px, 60vw)", height: "min(220px, 60vw)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #e0e0e0", background: "#fff" }}>
              <Image src="/avatar.jpeg" alt="Ezequiel" width={200} height={200} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </div>
          </div>
        </section>
        <hr className="paper-hr" />

        {/* About */}
        <section id="about" className="paper-section" style={{ marginBottom: 32 }}>
          <Card>
            <CardHeader>
              <CardTitle>Quién soy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Soy desarrollador frontend con experiencia en construir aplicaciones escalables usando Next.js y TypeScript. Me apasiona crear componentes reutilizables, mejorar la accesibilidad y reducir el tiempo de carga.</p>
            </CardContent>
          </Card>
        </section>
        <hr className="paper-hr" />

        {/* Experience */}
        <section id="experience" className="paper-section" style={{ marginBottom: 32 }}>
          <h3 className="paper-title" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Trayectoria profesional</h3>
          <div className="flex-col" style={{ gap: 20 }}>
            <article className="paper-card" style={{ borderLeft: "4px solid #e0e0e0", paddingLeft: 16 }}>
              <div className="flex-row flex-space-between">
                <div>
                  <h4 className="paper-card-title">Backend - NestJS (Banco Galicia) — Altas onboarding</h4>
                  <p className="paper-card-desc">jun. 2025 - actualidad · En remoto</p>
                </div>
                <div className="paper-card-desc">NestJS, Jenkins</div>
              </div>
              <p className="paper-card-desc">Trabajo en módulos de backend con NestJS para procesos de onboarding y altas, integrando con pipelines y herramientas CI/CD.</p>
            </article>

            <article className="paper-card" style={{ borderLeft: "4px solid #e0e0e0", paddingLeft: 16 }}>
              <div className="flex-row flex-space-between">
                <div>
                  <h4 className="paper-card-title">Frontend Developer — Banco Galicia (Haberes)</h4>
                  <p className="paper-card-desc">jul. 2024 - jun. 2025 · En remoto</p>
                </div>
                <div className="paper-card-desc">Next.js, NestJS</div>
              </div>
              <p className="paper-card-desc">Desarrollo de interfaces y features del área de haberes con Next.js, trabajando en colaboración con equipos backend para integraciones.</p>
            </article>

            <article className="paper-card" style={{ borderLeft: "4px solid #e0e0e0", paddingLeft: 16 }}>
              <div className="flex-row flex-space-between">
                <div>
                  <h4 className="paper-card-title">Backend - NestJS (Hacete Galicia)</h4>
                  <p className="paper-card-desc">feb. 2024 - abr. 2025 · En remoto</p>
                </div>
                <div className="paper-card-desc">NestJS, Next.js</div>
              </div>
              <p className="paper-card-desc">Desarrollo backend con NestJS complementando features para productos internos y onboarding.</p>
            </article>

            <article className="paper-card" style={{ borderLeft: "4px solid #e0e0e0", paddingLeft: 16 }}>
              <div className="flex-row flex-space-between">
                <div>
                  <h4 className="paper-card-title">Full Stack Developer Javascript — UNX Digital</h4>
                  <p className="paper-card-desc">nov. 2021 - jul. 2022 · En remoto</p>
                </div>
                <div className="paper-card-desc">React, React Native, NestJS</div>
              </div>
              <p className="paper-card-desc">Desarrollo y mantenimiento de productos web y mobile, y tareas de backend con NestJS. Trabajo con metodologías ágiles (Scrum).</p>
            </article>
          </div>
        </section>
        <hr className="paper-hr" />

        {/* Education */}
        <section id="education" className="paper-section" style={{ marginBottom: 32 }}>
          <h3 className="paper-title" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Educación</h3>
          <div className="flex-row" style={{ gap: 20 }}>
            <div className="paper-card" style={{ background: "#fff" }}>
              <h4 className="paper-card-title">Licenciatura en Ciencias de la Computación</h4>
              <p className="paper-card-desc">Universidad Ejemplo — 2015 — 2019</p>
            </div>
            <div className="paper-card" style={{ background: "#fff" }}>
              <h4 className="paper-card-title">Certificación React Avanzado</h4>
              <p className="paper-card-desc">Platzi — 2021</p>
            </div>
          </div>
        </section>
        <hr className="paper-hr" />

        {/* Footer */}
        <footer className="paper-footer" style={{ textAlign: "center", marginTop: 32, padding: "24px 0", borderTop: "2px solid #e0e0e0", color: "#888" }}>
          <div style={{ marginBottom: 8 }}>
            <a href="mailto:ezequiel.a.freire@gmail.com" className="paper-btn" style={{ marginRight: 8 }} aria-label="Email">
              <span role="img" aria-label="email">✉️</span> Email
            </a>
            <a href="https://www.linkedin.com/in/ezequiel-alejandro-freire-6a061152/" className="paper-btn" style={{ marginRight: 8 }} aria-label="LinkedIn" target="_blank" rel="noopener">
              <span role="img" aria-label="linkedin">🔗</span> LinkedIn
            </a>
            <a href="https://github.com/flecherdev" className="paper-btn" aria-label="GitHub" target="_blank" rel="noopener">
              <span role="img" aria-label="github">🐙</span> GitHub
            </a>
          </div>
          <small>© {new Date().getFullYear()} Ezequiel Alejandro Freire. Todos los derechos reservados.</small>
        </footer>
      </main>
      <Chatbot />
    </div>
  );
}
