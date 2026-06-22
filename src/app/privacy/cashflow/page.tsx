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
    <div className="min-h-screen bg-surface dark:bg-surface">
      <main className="mx-auto max-w-[900px] px-4 py-8">
        <Link
          href="/"
          className="mb-4 inline-block rounded-lg border border-border bg-surface-card px-4 py-2 text-sm text-content-secondary transition-colors hover:bg-surface-secondary"
        >
          ← Volver al inicio
        </Link>

        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="text-sm text-content-muted">Idioma:</span>
          {Object.entries(languageOptions).map(([code, info]) => (
            <a
              key={code}
              href={`/privacy/cashflow?lang=${code}`}
              className={`inline-block rounded-lg border border-border px-3 py-1.5 text-sm text-content-secondary transition-colors hover:bg-surface-secondary ${
                code === lang ? "opacity-80" : ""
              }`}
              aria-current={code === lang ? "page" : undefined}
            >
              {info.label}
            </a>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-surface-card p-6">
          <div className="markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        </div>
      </main>

      <style>{`
        .markdown h1 { font-size: 2rem; margin: 0 0 12px; color: var(--color-content); }
        .markdown h2 { font-size: 1.5rem; margin: 24px 0 12px; color: var(--color-content); }
        .markdown h3 { font-size: 1.2rem; margin: 20px 0 10px; color: var(--color-content); }
        .markdown p { margin: 10px 0; color: var(--color-content-secondary); line-height: 1.7; }
        .markdown ul, .markdown ol { margin: 10px 0 10px 20px; color: var(--color-content-secondary); }
        .markdown li { margin: 4px 0; }
        .markdown hr { margin: 24px 0; border: none; border-top: 1px solid var(--color-border); }
        .markdown code { background: var(--color-surface-secondary); padding: 2px 6px; border-radius: 4px; font-size: 0.9em; color: var(--color-content); }
        .markdown pre { background: #0f172a; color: #e2e8f0; padding: 12px; border-radius: 8px; overflow-x: auto; }
        .markdown pre code { background: none; padding: 0; color: inherit; }
        .markdown a { color: var(--color-accent); text-decoration: underline; }
        .markdown a:hover { opacity: 0.8; }
        .markdown strong { font-weight: 600; color: var(--color-content); }
        .markdown blockquote { border-left: 3px solid var(--color-accent); padding-left: 16px; margin: 16px 0; color: var(--color-content-secondary); }
        .markdown table { width: 100%; border-collapse: collapse; margin: 16px 0; }
        .markdown th, .markdown td { border: 1px solid var(--color-border); padding: 8px 12px; text-align: left; color: var(--color-content-secondary); }
        .markdown th { background: var(--color-surface-secondary); font-weight: 600; color: var(--color-content); }
      `}</style>
    </div>
  );
}
