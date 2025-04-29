import { cn } from "@/utils/helper";
import * as React from "react";
import { ArrowRight } from "lucide-react";

export const Button = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
    className={cn(
      "flex flex-row justify-center transition hover:scale-110 duration-500 ease-in-out px-5 py-2 text-white text-2xl rounded-full shadow-2xl w-96 -ml-5 hover:cursor-pointer select-none",
      "bg-gradient-to-r from-[#B88A44] via-[#FFD699] to-[#8B5C1E] hover:brightness-110",
      className
     )}
      onClick={onClick}
    >
      <p className="flex">{children}</p>
      <ArrowRight className="flex my-auto ml-2" />
    </button>
  );
};

export const ButtonIcon = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      className={cn(
      "flex flex-row justify-center transition hover:scale-110 duration-500 ease-in-out px-5 py-2 text-white text-2xl rounded-full shadow-2xl w-96 -ml-5 hover:cursor-pointer select-none",
      "bg-gradient-to-r from-[#B88A44] via-[#FFD699] to-[#8B5C1E] hover:brightness-110",
      className
     )}
    
    
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const ButtonProfil = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        " w-full  p-5 border dark:hover:bg-neutral-400  hover:bg-neutral-100 hover:font-semibold hover:cursor-pointer select-none  tracking-wider bg-white  border-neutral-300 py-4 px-7 flex flex-row space-x-3 text-black font-semibold text-[15px] dark:bg-neutral-300 dark:border-neutral-400",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
