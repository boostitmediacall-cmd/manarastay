"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
import { useState } from "react";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
};

export function Photo({
  src,
  alt,
  className,
  imageClassName,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  objectPosition,
}: PhotoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-navy", className)}>
      {failed ? (
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-soft" />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
          style={objectPosition ? { objectPosition } : undefined}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
