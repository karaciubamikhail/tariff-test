import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Tariff",
  description: "Tariff test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${montserrat.variable} ${raleway.variable} font-mont antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
