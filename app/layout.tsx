import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import LoadingAnimation from "./components/LoadingAnimation";

export const metadata: Metadata = {
  title: "Portfolio | Yuki Kotani",
  description: "Software Engineer - Personal portfolio and introduction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <LoadingAnimation />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
