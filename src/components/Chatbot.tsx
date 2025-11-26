
"use client";
import React from "react";
import { useTheme } from "next-themes";

export default function Chatbot() {
  const { theme } = useTheme();
  const [minimized, setMinimized] = React.useState(true);
  const [messages, setMessages] = React.useState([
    { from: "bot", text: "¡Hola! Pregúntame sobre la experiencia profesional de Ezequiel." }
  ]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setLoading(true);
    setMessages((msgs) => [...msgs, { from: "bot", text: "Pensando..." }]);
    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input })
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs.slice(0, -1), { from: "bot", text: data.answer }]);
    } catch {
      setMessages((msgs) => [...msgs.slice(0, -1), { from: "bot", text: "Hubo un error generando la respuesta." }]);
    }
    setLoading(false);
    setInput("");
  }

  return (
    <>
      {/* Botón flotante para minimizar/restaurar */}
      {minimized ? (
        <button
          className="paper-btn paper-fab paper-primary"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 10000,
            borderRadius: "50%",
            width: 56,
            height: 56,
            boxShadow: "0 2px 12px #0002",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0
          }}
          onClick={() => setMinimized(false)}
          aria-label="Abrir chat"
          title="Chat IA: haz clic para conversar"
        >
          <span style={{ fontSize: 30, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>💬</span>
        </button>
      ) : (
        <div style={{ position: "fixed", bottom: 24, right: 24, width: 370, maxWidth: "95vw", zIndex: 9999 }}>
          <div
            className="paper-card"
            style={{
              boxShadow: "0 2px 12px #0002",
              borderRadius: 16,
              overflow: "hidden",
              padding: 0,
              background: theme === "dark" ? "#23272f" : "#fff"
            }}
          >
            {/* Header simple sin avatar y botón minimizar */}
            <div
              className="paper"
              style={{
                padding: "12px 16px",
                borderBottom: theme === "dark" ? "1px solid #444" : "1px solid #e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: theme === "dark" ? "#23272f" : "#f5f5f5"
              }}
            >
              <div>
                <h4 style={{ margin: 0, color: theme === "dark" ? "#fff" : undefined }}>Asistente IA</h4>
                <p style={{ margin: 0, color: theme === "dark" ? "#bbb" : "#888", fontSize: "0.95rem" }}>Pregúntame sobre Ezequiel</p>
              </div>
              <button
                className="paper-btn paper-sm"
                style={{ borderRadius: "50%", width: 32, height: 32, fontSize: 18, marginLeft: 8 }}
                onClick={() => setMinimized(true)}
                aria-label="Minimizar chat"
              >–</button>
            </div>
            {/* Mensajes tipo conversación */}
            <div
              className="paper"
              style={{
                maxHeight: 260,
                minHeight: 120,
                overflowY: "auto",
                padding: "16px 12px",
                background: theme === "dark" ? "#23272f" : "#fafbfc",
                display: "flex",
                flexDirection: "column"
              }}
            >
              {messages.map((msg, i) => (
                <div key={i} style={{ display: "flex", justifyContent: msg.from === "bot" ? "flex-start" : "flex-end", marginBottom: 10 }}>
                  <span
                    className={msg.from === "bot" ? "paper" : "paper-primary"}
                    style={{
                      background:
                        msg.from === "user"
                          ? theme === "dark"
                            ? "#2a3b4d"
                            : "#d0f0ff"
                          : theme === "dark"
                            ? "#23272f"
                            : undefined,
                      color: theme === "dark" ? "#fff" : "#222",
                      padding: "8px 14px",
                      borderRadius: msg.from === "bot" ? "16px 16px 16px 4px" : "16px 16px 4px 16px",
                      boxShadow: "0 1px 4px #0001",
                      maxWidth: "80%",
                      fontSize: "1rem",
                      wordBreak: "break-word",
                      display: "inline-block"
                    }}
                  >{msg.text}</span>
                </div>
              ))}
              {loading && (
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
                  <span
                    className="paper"
                    style={{
                      color: theme === "dark" ? "#bbb" : "#888",
                      fontStyle: "italic",
                      padding: "8px 14px",
                      borderRadius: 8,
                      background: theme === "dark" ? "#23272f" : undefined
                    }}
                  >Escribiendo respuesta...</span>
                  <span className="paper-loader" style={{ width: 18, height: 18, border: theme === "dark" ? "2px solid #444" : "2px solid #e0e0e0", borderTop: theme === "dark" ? "2px solid #bbb" : "2px solid #888", borderRadius: "50%", display: "inline-block", animation: "spin 1s linear infinite" }}></span>
                </div>
              )}
            </div>
            {/* Input */}
            <form
              onSubmit={handleSend}
              className="paper-form"
              style={{
                display: "flex",
                gap: 8,
                padding: "12px 16px",
                borderTop: theme === "dark" ? "1px solid #444" : "1px solid #e0e0e0",
                background: theme === "dark" ? "#23272f" : "#f5f5f5"
              }}
            >
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Escribe tu pregunta..."
                className="paper-input"
                style={{ flex: 1, fontSize: "1rem", background: theme === "dark" ? "#23272f" : undefined, color: theme === "dark" ? "#fff" : undefined }}
                autoFocus
                disabled={loading}
              />
              <button type="submit" className="paper-btn paper-primary" disabled={loading} style={{ fontWeight: "bold", fontSize: "1rem" }}>Enviar</button>
            </form>
            <style>{`
              @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            `}</style>
          </div>
        </div>
      )}
    </>
  );
}
