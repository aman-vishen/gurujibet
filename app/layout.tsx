"use client";
import { GoogleAnalytics } from '@next/third-parties/google'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Providers } from "./providers";



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">

      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {/* <head>
      </head> */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
      <GoogleAnalytics gaId="G-WZT0ZDZHJQ" />
        
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <FloatingWhatsApp phoneNumber="8336000089"
        accountName="Mahadevbook online gaming"
        allowEsc
        avatar="/images/logo/logo.png"
        allowClickAway={false}
        notification
        notificationSound/>
        </Providers>
      </body>
    </html>
  );
}



