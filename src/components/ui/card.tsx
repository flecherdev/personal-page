import * as React from "react"

function Card({ className = "", ...props }: React.ComponentProps<"div">) {
  return <div className={`rounded-xl border border-border bg-surface-card ${className}`.trim()} {...props} />;
}

function CardHeader({ className = "", ...props }: React.ComponentProps<"div">) {
  return <div className={`px-6 pt-6 ${className}`.trim()} {...props} />;
}

function CardTitle({ className = "", ...props }: React.ComponentProps<"h3">) {
  return <h3 className={`text-lg font-semibold text-content ${className}`.trim()} {...props} />;
}

function CardContent({ className = "", ...props }: React.ComponentProps<"div">) {
  return <div className={`px-6 pb-6 ${className}`.trim()} {...props} />;
}

export { Card, CardHeader, CardTitle, CardContent }
