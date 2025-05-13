import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "", style, ...rest }: CardProps) {
  return <div className={`bg-[#e4d4be] shadow-md rounded-lg p-7 ${className}`}
    style={style}
    {...rest}
    >{children}
  </div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-5">{children}</div>;
}
