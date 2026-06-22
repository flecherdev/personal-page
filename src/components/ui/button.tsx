import * as React from "react"

function Button({ className = "", ...props }: React.ComponentProps<"button">) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:opacity-80 focus:outline-hidden ${className}`.trim()}
      {...props}
    />
  );
}

export { Button }
