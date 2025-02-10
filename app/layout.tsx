import type { Metadata } from "next";
import "./globals.css";
import Header from "./Components/Header";
import { roboto } from "./fonts";
import LoadingBar from "./Components/LoadingBar";
import Aside from "./Components/Aside";

export const metadata: Metadata = {
  title: "Youtube Clon",
  description: "This is a youtube clon made with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>

      <body className={`${roboto.className} antialiased`}>
        <LoadingBar />

        <Header />

        <Aside />

        {children}
      </body>
    </html>
  );
}
