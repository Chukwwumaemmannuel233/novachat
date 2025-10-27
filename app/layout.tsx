import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Nova Chat",
  description: "Your AI-powered chat assistant built with Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100">
        {children}
      </body>
    </html>
  );
}
