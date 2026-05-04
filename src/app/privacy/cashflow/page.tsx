import fs from "fs/promises";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

const languageOptions = {
  es: { label: "Español", file: "PRIVACY_POLICY.es.md" },
  en: { label: "English", file: "PRIVACY_POLICY.en.md" },
  pt: { label: "Português", file: "PRIVACY_POLICY.pt.md" },
  fr: { label: "Français", file: "PRIVACY_POLICY.fr.md" },
  it: { label: "Italiano", file: "PRIVACY_POLICY.it.md" },
  ru: { label: "Русский", file: "PRIVACY_POLICY.ru.md" },
  zh: { label: "中文", file: "PRIVACY_POLICY.zh.md" },
  ja: { label: "日本語", file: "PRIVACY_POLICY.ja.md" }
} as const;

export const metadata = {
  title: "Política de privacidad - Cash Flow",
  description: "Política de privacidad de la app Cash Flow."
};

async function getPolicyMarkdown(lang: keyof typeof languageOptions) {
  const fileName = languageOptions[lang]?.file ?? languageOptions.es.file;
  const filePath = path.join(process.cwd(), "doc/cashflow-policy", fileName);
  return fs.readFile(filePath, "utf8");
}

export default async function CashflowPrivacyPage({
  searchParams
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const langParam = (params?.lang || "es") as keyof typeof languageOptions;
  const lang = languageOptions[langParam] ? langParam : "es";
  const content = await getPolicyMarkdown(lang);

  return (
    <div className="paper" style={{ background: "#f7f7f7", minHeight: "100vh" }}>
      <main className="paper-main" style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
        <Link href="/" className="paper-btn" style={{ display: "inline-block", marginBottom: 16 }}>
          ← Volver al inicio
        </Link>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", marginBottom: 12 }}>
          <span style={{ color: "#666", fontSize: "0.95rem" }}>Idioma:</span>
          {Object.entries(languageOptions).map(([code, info]) => (
            <a
              key={code}
              href={`/privacy/cashflow?lang=${code}`}
              className="paper-btn"
              style={{ fontSize: "0.9rem", opacity: code === lang ? 0.8 : 1 }}
              aria-current={code === lang ? "page" : undefined}
            >
              {info.label}
            </a>
          ))}
        </div>
        <div className="paper-card" style={{ background: "#fff" }}>
          <div className="markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        </div>
      </main>

      <style>{`
        .markdown h1 { font-size: 2rem; margin: 0 0 12px; }
        .markdown h2 { font-size: 1.5rem; margin: 24px 0 12px; }
        .markdown h3 { font-size: 1.2rem; margin: 20px 0 10px; }
        .markdown p { margin: 10px 0; color: #333; }
        .markdown ul, .markdown ol { margin: 10px 0 10px 20px; }
        .markdown hr { margin: 24px 0; border: none; border-top: 1px solid #e5e7eb; }
        .markdown code { background: #f3f4f6; padding: 2px 6px; border-radius: 4px; }
        .markdown pre { background: #0f172a; color: #e2e8f0; padding: 12px; border-radius: 8px; overflow-x: auto; }
        .markdown a { color: #2563eb; text-decoration: underline; }
        .markdown strong { font-weight: 600; }
      `}</style>
    </div>
  );
}
