import "./globals.css";
import type { Metadata } from "next";
import IconLogo from '~/components/atoms/IconLogo'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trade Tracker - Next generation investment journal and analysis | Login",
  description: "Trade Tracker - next generation investment journal and analysis. Boost consistency and gain insights specific to your trading style.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <nav>
          <IconLogo className="p-4"/>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
