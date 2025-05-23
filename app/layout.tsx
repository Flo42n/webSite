import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Back Two EPITA",
  description: "Back Two EPITA: A co-op puzzle adventure through time.",
  icons: {
    icon: "/BTE_favicon-2.png",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex flex-col">
      <body className="bg-[#d5bea1]">{children}</body>
    </html>
  );
}
