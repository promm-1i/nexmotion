import type { Metadata } from "next";
import { Inter, Noto_Sans_KR, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "넥스모션 | 산업용 로봇 자동화 시스템",
  description:
    "넥스모션은 산업용 로봇, 비전검사, 물류 및 제어시스템을 공정 조건에 맞춰 설계하고 구축합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`scroll-smooth ${inter.variable} ${notoSansKr.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-base text-primary font-sans antialiased selection:bg-accent selection:text-white">
        {children}
        <Script src="https://unpkg.com/@phosphor-icons/web" strategy="afterInteractive" />
      </body>
    </html>
  );
}
