import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { LiquidGlassDefs } from "@/components/LiquidGlass";

export const metadata: Metadata = {
  title: "Sarang Nikhade — Sr. UI/UX & Game Designer",
  description:
    "Portfolio of Sarang Nikhade — senior UI/UX and game designer working across mobile, web, VR, and interactive systems.",
  openGraph: {
    title: "Sarang Nikhade — Sr. UI/UX & Game Designer",
    description: "Designing immersive, intuitive experiences across screens, worlds, and play.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`,
          }}
        />
      </head>
      <body className="grain">
        <LiquidGlassDefs />
        <SmoothScroll />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
