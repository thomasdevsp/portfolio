"use client";

import AboutMe from "@/components/pages/home/about-me";
import Hero from "@/components/pages/home/hero";
import Projects from "@/components/pages/home/projects";
import TrackerGa from "@/lib/googleAnalytics/trackerComponent";
import { Stack } from "@mui/material";


export default function Home() {
  return (
    <Stack>
      <Hero />
      <Projects />
      <AboutMe />
      <TrackerGa
        eventName="Home - Page"
        params={{
          page: "Home"
        }}
      />
    </Stack>
  );
}
