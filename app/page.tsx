'use client'
import Header from "@/components/header";
import AboutMeMobile from "@/components/mobile/aboutmeMobile";
import HeroMobile from "@/components/mobile/heroMobile";
import ProjectsMobile from "@/components/mobile/projectsMobile";
import MyPlan from "@/components/MyPlan";
import PaddingAbajo from "@/components/PaddingAbajo";
import AboutMe from "@/components/pc/aboutme";
import Hero from "@/components/pc/hero";
import Projects from "@/components/pc/projects";
import Image from "next/image";
import { useEffect, useState } from "react";
import PlausibleProvider from 'next-plausible'

export default function Home() {

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    setIsLargeScreen(mediaQuery.matches);
    const listener = () => setIsLargeScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return (
    <>
        {isLargeScreen ? (
          <>
            <Header />
            <div id="home">
              <Hero />
            </div>
            <div id="about">
              <AboutMe />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <PaddingAbajo />
          </>
        ) : (
          <>
            <Header />
            <div id="home">
              <HeroMobile />
            </div>
            <div id="about">
              <AboutMeMobile />
            </div>
            <div id="projects">
              <ProjectsMobile />
            </div>
            <PaddingAbajo />
          </>
        )}
    </>
  );
}