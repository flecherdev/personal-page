# Copilot Instructions

- This is a Next.js App Router project with TypeScript, React 19, and Tailwind-free PaperCSS styling.
- Prefer small, direct changes. Do not introduce extra abstractions unless they remove real duplication.
- Keep components and pages in `src/app` and shared UI in `src/components/ui`.
- Use `next/link` for internal navigation and `next/image` for local/static images.
- Keep client components only when hooks or browser APIs are needed.
- Prefer ASCII unless a file already uses non-ASCII text.
- Match the existing style: simple JSX, inline styles when already used, and minimal helper functions.
- Do not add new dependencies unless the change clearly requires them.
- For public content or SEO, update `metadata` in the relevant `layout.tsx` or page.
- Keep copy concise and in the same language as the surrounding file.
