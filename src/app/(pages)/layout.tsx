import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./../globals.css";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Header from "@/components/shared/Header";

const inter = Roboto({ weight: ["300", "400","500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kushagra Rai - Portfolio",
  description: "Kushagra Rai is a Full-stack software developer specialized in MERN. He generally focuses on cost effective, scalable, high performing solutions.",
  authors:[{name:"Kushfagra Rai"}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-Charcoal`}>
        <Header/>
        <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
