"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"


export default function ModeToggle() {
  const { setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Button onClick={() => setOpen((o) => !o)} aria-label="Cambiar tema" style={{ padding: "6px 12px" }}>
        <span role="img" aria-label="theme">🌓</span>
      </Button>
      {open && (
        <div className="paper-card" style={{ position: "absolute", right: 0, top: "110%", minWidth: 120, zIndex: 10 }}>
          <button className="paper-btn" style={{ width: "100%", marginBottom: 4 }} onClick={() => { setTheme("light"); setOpen(false); }}>Claro</button>
          <button className="paper-btn" style={{ width: "100%", marginBottom: 4 }} onClick={() => { setTheme("dark"); setOpen(false); }}>Oscuro</button>
          <button className="paper-btn" style={{ width: "100%" }} onClick={() => { setTheme("system"); setOpen(false); }}>Sistema</button>
        </div>
      )}
    </div>
  );
}
