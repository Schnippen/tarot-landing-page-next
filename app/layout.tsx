import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./App.module.css";
import Link from "next/link";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import Script from "next/script";
import { AnalyticsEvent } from "@/utils/constants";

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
      <body className={`${inter.className} ${styles.someOtherClass}`}>
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
