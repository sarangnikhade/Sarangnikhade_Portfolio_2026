import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "@fontsource/google-sans/400.css";
import "@fontsource/google-sans/600.css";
import "@fontsource/google-sans-flex/index.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { LiquidGlassDefs } from "@/components/LiquidGlass";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic"],
  variable: "--font-cursive",
  display: "swap",
});

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
    <html lang="en" className={playfair.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.dataset.theme=t;if(t==='dark')document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');}catch(e){document.documentElement.dataset.theme='dark';document.documentElement.classList.add('dark');}})();`,
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
