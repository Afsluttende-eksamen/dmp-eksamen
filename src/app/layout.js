import { Archivo, Newsreader } from "next/font/google";
import "./globals.css";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export const metadata = {
  title: "Danser Med Piger",
  description: "Officielle hjemmeside for Danser Med Piger",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${newsreader.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
