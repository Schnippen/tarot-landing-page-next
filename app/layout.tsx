import "./globals.css";
import type { Metadata } from "next";
import { Inter, Cinzel, Lora } from "next/font/google";
import styles from "./App.module.css";
import Link from "next/link";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
const lora = Lora({
  subsets: ["latin"],
  weight: "400",
  variable: "--Lora",
});
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "600",
  variable: "--Cinzel",
});
export const metadata: Metadata = {
  title: "Tarot Reader App",
  description:
    "Unlock the wisdom of the tarot on your mobile device with our intuitive Tarot Reader App. Get personalized readings, insights, and guidance for all aspects of your life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${lora.variable} ${cinzel.variable}`}
      >
        <header className={styles.header}>
          <h1 className={styles.header_title}>
            <Link href="/" className={styles.headerLink}>
              Tarot Reader
            </Link>
          </h1>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
