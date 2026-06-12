import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Master Mocks | India's 1st Performance-Based Mock Platform",
  description: "Boost your Banking & Insurance exam prep with exam-level mocks and earn cashback rewards.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}