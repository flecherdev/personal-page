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
          <div className="prose max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        </div>
      </main>
    </div>
  );
}
