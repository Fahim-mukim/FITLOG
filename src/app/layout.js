import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/shared/Navbar";
import Footer from "@/component/shared/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inter.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}