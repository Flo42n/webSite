"use client";
import React, { useState, useEffect } from "react";

export default function TextRotator({
  texts,
  titles,
}: {
  texts: Array<string>;
  titles: Array<string>;
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-3 transition-opacity duration-400 ease-in-out">
        <p className="text-center text-3xl font-bold ">
          {texts[currentTextIndex]}
        </p>
        <p className="text-lg">{titles[currentTextIndex]}</p>
      </div>
      <style jsx>{`
        div {
          animation: fadeInOut 1s ease-in-out;
        }

        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
