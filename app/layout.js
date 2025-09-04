import { Fira_Sans } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "LYSTRA",
  description: "Официальный сайт LYSTRA",
  keywords: "LYSTRA, инновации, технологии, проекты, решения, TheHub",
  authors: [{ name: "LYSTRA Team" }],
  icons: {
    icon: [
      // { url: '/Logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/Logo.png', sizes: '32x32', type: 'image/png' },
      // { url: '/Logo.png', sizes: '48x48', type: 'image/png' },
      // { url: '/Logo.png', sizes: '64x64', type: 'image/png' },
      // { url: '/Logo.png', sizes: '128x128', type: 'image/png' },
      // { url: '/Logo.png', sizes: '256x256', type: 'image/png' },
    ],
    shortcut: '/Logo.png',
    apple: [
      { url: '/Logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "LYSTRA",
    description: "LYSTRA",
    type: "website",
    locale: "ru_RU",
    siteName: "LYSTRA",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${firaSans.variable} bg-[#2a2a2a] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
