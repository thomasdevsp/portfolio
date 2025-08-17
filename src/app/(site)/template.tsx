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
      {/* <Navigation /> */}
      <Box
      // sx={{
      //   marginTop: {
      //     xs: "130px",
      //     sm: "86px",
      //   },
      // }}
      >
        {children}
      </Box>
      {/* <Footer /> */}
    </body>
  );
}
