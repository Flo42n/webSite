import { cn } from "@/utils/helper";
import * as React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const BlockDefillant = ({
  children,
  className,
  nom,
  role,
}: {
  children: React.ReactNode;
  className?: string;
  nom: string;
  role: string;
}) => {
  return (
    <div
      className={cn(
        "z-10 rounded-lg shadow-lg w-96 h-56 bg-[#e4d4be] p-4 flex  flex-col gap-5 justify-center",
        className
      )}
    >
      <div className="flex flex-row ">
        <Image
          className=" "
          src="/groupe.png"
          alt="Next.js logo"
          width={100}
          height={50}
        />

        <div className="flex flex-col justify-center">
          <p className="text-lg font-semibold justify-center">{nom}</p>

          <p>{role}</p>
        </div>
      </div>
      <p className="text-center  font-medium">{children}</p>
    </div>
  );
};
