"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"




function Avatar({ className = "", ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      className={`avatar ${className}`.trim()}
      {...props}
    />
  );
}


function AvatarImage({ className = "", ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      className={`avatar-img ${className}`.trim()}
      {...props}
    />
  );
}


function AvatarFallback({ className = "", ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      className={`avatar-fallback ${className}`.trim()}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback }
