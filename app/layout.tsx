import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-jp",
  display: "swap",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://yukikotani231.github.io"),
  title: "Yuki Kotani — Software Engineer",
  description:
    "エンタープライズSaaSの複雑な技術課題を解くフルスタックエンジニア / テックリード、Yuki Kotani のポートフォリオ。",
  openGraph: {
    title: "Yuki Kotani — Software Engineer",
    description: "Fullstack Engineer / Tech Lead. Building enterprise SaaS at 燈株式会社.",
    url: "/",
    siteName: "Yuki Kotani",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={`${inter.variable} ${notoSansJp.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
