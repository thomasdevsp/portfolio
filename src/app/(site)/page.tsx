"use client";

import AboutMe from "@/components/pages/home/about-me";
import Hero from "@/components/pages/home/hero";
import Projects from "@/components/pages/home/projects";
import { useBreakpoint } from "@/hooks/useBreakpoints";
import { Stack } from "@mui/material";
import { sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";

export default function Home() {
  const isMobile = useBreakpoint("md");

  useEffect(() => {
    sendGAEvent("event", "Home")
  }, []);

  return (
    <Stack>
      <Hero />
      <Projects />
      <AboutMe />
    </Stack>
  );
}
