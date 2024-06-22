import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comision Nacional de Derechos Humanos",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body> 
    </html>
  );
}
