import Image from "next/image"
import { NavResponsive } from "./nav"
import ModeToggle from "../mode-toggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-3 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-border shadow-xs animate-avatar-bounce">
            <Image src="/avatar.jpeg" alt="Avatar" width={44} height={44} className="h-full w-full object-cover" />
          </div>
          <div className="leading-tight">
            <h1 className="m-0 text-lg font-bold text-content">Ezequiel Freire</h1>
            <p className="m-0 text-xs text-content-muted">Full Stack Engineer</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <NavResponsive />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
