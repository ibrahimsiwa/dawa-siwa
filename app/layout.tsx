import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "دعوة | خلّي دعوتك توصل لأهلها",
    template: "%s | دعوة",
  },
  description:
    "دعوة منصة رقمية من سيوة لتنظيم بيانات أبناء الواحة والمساعدة مستقبلًا في إيصال الدعوات.",
  keywords: [
    "دعوة",
    "سيوة",
    "دعوات الأفراح",
    "أبناء سيوة",
    "منصة دعوة",
  ],
  applicationName: "دعوة",
  authors: [{ name: "منصة دعوة" }],
  creator: "منصة دعوة",
  openGraph: {
    title: "دعوة | خلّي دعوتك توصل لأهلها",
    description:
      "منصة رقمية من سيوة لتنظيم بيانات أبناء الواحة والمساعدة في إيصال الدعوات.",
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}  