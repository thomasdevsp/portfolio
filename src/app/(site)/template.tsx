"use client";

import Footer from "@/components/@layout/footer";
import Navigation from "@/components/@layout/navigation";
import { Box } from "@mui/material";
import { ReactNode } from "react";

interface TemplateProps {
  children: ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return (
    <body>
      <Navigation />
      <Box
        sx={{
          background: "#000319",
        }}
      >
        {children}
      </Box>
      <Footer />
    </body>
  );
}
