import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinBot - Your Personal Finance Assistant",
  description: "Log expenses, track budgets, and reach your savings goals with AI-powered financial assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
