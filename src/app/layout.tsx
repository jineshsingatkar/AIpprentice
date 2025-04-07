import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: {
    templete: "AIpprentice",
    absoute: "AI-Powered Resume Builder",
},
  description: "AI Resume builder is the easiest way to create a professioanl resume",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
