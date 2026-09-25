import type { Metadata } from "next";
import { Providers } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Okky Robbyanto - Web Developer",
  description: "Personal portfolio of Okky Robbyanto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
