import type { Metadata } from "next";
import { Playfair_Display, Quicksand, Dancing_Script } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sabores Caseros - Delicias hechas con amor",
  description: "Medialunas, tortas y dulces irresistibles directamente a tu mesa. Productos de panadería y pastelería casera elaborados con ingredientes frescos y recetas tradicionales.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${quicksand.variable} ${playfair.variable} ${dancingScript.variable}`}>
      <body className="font-sans bg-cream-50">{children}</body>
    </html>
  );
}
