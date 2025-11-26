import * as React from "react"




function Card({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <div className={`paper-card ${className}`.trim()} {...props} />
  );
}


function CardHeader({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <div className={`paper-card-header ${className}`.trim()} {...props} />
  );
}


function CardTitle({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <h3 className={`paper-card-title ${className}`.trim()} {...props} />
  );
}


function CardDescription({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <p className={`paper-card-description ${className}`.trim()} {...props} />
  );
}


function CardAction({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <div className={`paper-card-action ${className}`.trim()} {...props} />
  );
}


function CardContent({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <div className={`paper-card-content ${className}`.trim()} {...props} />
  );
}


function CardFooter({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <div className={`paper-card-footer ${className}`.trim()} {...props} />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
