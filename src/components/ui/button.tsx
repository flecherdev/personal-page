
import * as React from "react"

function Button({ className = "", ...props }: React.ComponentProps<"button">) {
  return (
    <button
      className={`paper-btn ${className}`.trim()}
      {...props}
    />
  );
}

export { Button }
