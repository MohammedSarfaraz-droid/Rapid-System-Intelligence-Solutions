import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Rapid System Intelligence Solutions | AI, Automation, and Digital Transformation",
  description: "Discover innovative AI, automation, and digital transformation solutions for your business. Partner with Rapid System Intelligence Solutions for cutting-edge technology and expert support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Rapid System Intelligence Solutions | AI, Automation, and Digital Transformation</title>
        <meta name="description" content="Discover innovative AI, automation, and digital transformation solutions for your business. Partner with Rapid System Intelligence Solutions for cutting-edge technology and expert support." />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
