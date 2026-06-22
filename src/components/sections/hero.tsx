import Image from "next/image"
import { Mail, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="about"
      className="grid items-center gap-10 md:grid-cols-[1fr_auto]"
    >
      <div>
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Disponible para proyectos
        </div>
        <h2 className="m-0 text-[clamp(2rem,5vw,2.75rem)] font-extrabold leading-tight text-content">
          Construyo productos digitales{" "}
          <span className="text-accent">end-to-end</span>
        </h2>
        <p className="mb-6 mt-3 text-lg leading-relaxed text-content-secondary">
          Soy Ezequiel, full stack engineer especializado en React, Node.js e
          iOS. Hoy integro IA generativa en productos digitales — desde agents
          y copilotos hasta orquestación de pipelines. Me gusta construir
          herramientas simples que resuelvan problemas reales.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:ezequiel.a.freire@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-content px-6 py-3 font-semibold text-surface decoration-transparent transition-transform hover:scale-[1.02] hover:shadow-lg"
          >
            <Mail size={18} />
            Contactame
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-card px-6 py-3 font-semibold text-content decoration-transparent transition-transform hover:scale-[1.02] hover:shadow-md"
          >
            Ver proyectos
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative h-[280px] w-[280px] rounded-full bg-linear-to-br from-blue-500 to-purple-600 p-1">
          <div className="h-full w-full overflow-hidden rounded-full bg-white">
            <Image
              src="/avatar.jpeg"
              alt="Ezequiel"
              width={280}
              height={280}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
