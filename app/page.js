"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tagline from "@/components/Tagline";
import Community from "@/components/Community";
import About from "@/components/About";
import Services from "@/components/Services";
import StandoutTools from "@/components/StandoutTools";
import Transformations from "@/components/Transformations";
import Qualification from "@/components/Qualification";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <PageTransition>
        <Navbar />
        <main>
          <Hero />
          <Tagline />
          <Community />
          <About />
          <Services />
          <StandoutTools />
          <Transformations />
          <Qualification />
          <Contact />
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
