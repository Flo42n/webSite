// components/DownloadButton.tsx

"use client"; // Ensure it runs on the client-side in Next.js

import { useEffect, useState } from "react";

export default function DownloadButton() {
  const [screenSize, setScreenSize] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getFontSize = (): string => {
    if (screenSize < 768) return "14px";
    if (screenSize < 1024) return "16px";
    return "18px";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={() => window.location.href = "/api/download"}
        style={{
          fontSize: getFontSize(),
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download File
      </button>
    </div>
  );
}
