// "use client"
import Link from "next/link"
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahadevbook online gaming - Online Betting | Online Casino ID | Cricket Betting ID",
  description: "IPL Betting Id provider",
  keywords: "Mahadevbook online gaming, Betting id, ipl betting id, cricket betting id, sport betting, Online Casino ID"
  // other metadata
};

export default function Home() {
  
  return (
    <>
      
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      {/* <Pricing /> */}
      <Blog />
      {/* <Contact /> */}
    </>
  );
}
