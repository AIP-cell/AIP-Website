import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/_layout/header/Header";
import Footer from "@/app/_layout/footer/Footer";
import localFont from "next/font/local";
import QueryProvider from "../providers/QueryProviderClient";
import { Toaster } from "react-hot-toast";
import ProgressProvider from "../providers/ProgressProvider";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const playfairDisplay = localFont({
  src: "./../fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf",
  variable: "--playfairDisplay",
});
const playfairDisplayItalic = localFont({
  src: "./../fonts/Playfair_Display/static/PlayfairDisplay-Italic.ttf",
  variable: "--playfairDisplayItalic",
});

export const metadata: Metadata = {
  title:
    "Empowering Indian Philanthropy | Give More, Give Faster, Give Smarter",
  description:
    "Empowering Indian Philanthropy (AIP) is a collaborative network created by philanthropists to enhance and support impactful giving.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${playfairDisplayItalic.variable} !overflow-y-auto bg-bgLightPeach font-inter no-scrollbar overflow-x-hidden  `}
      >
        <ProgressProvider>
          <QueryProvider>
            <Toaster position="top-right" containerClassName="mt-4" />
            <Header />
            {children}
            <Footer />
          </QueryProvider>
        </ProgressProvider>
      </body>
    </html>
  );
}
