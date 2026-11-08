import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: "Ella | Virtual Assistant & Digital Support",
  description: "Ella provides professional virtual assistance, email and calendar management, research, travel planning, proofreading, and digital support.",
  openGraph: { title: "Ella Virtual Services", description: "Thoughtful support. Seamless workdays.", type: "website" },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body className={`${sans.variable} ${display.variable}`}>{children}</body></html>;
}
