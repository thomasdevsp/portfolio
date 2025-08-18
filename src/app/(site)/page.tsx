"use client";

import Hero from "@/components/pages/home/hero";
import { useBreakpoint } from "@/hooks/useBreakpoints";
import { Stack } from "@mui/material";
import { sendGTMEvent } from "@next/third-parties/google";
import { useEffect } from "react";

export default function Home() {
  const isMobile = useBreakpoint("md");

  useEffect(() => {
    sendGTMEvent({
      event: "page_view",
      page_title: "Home",
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }, []);

  return (
    <Stack>
      <Hero />
    </Stack>
  );
}
