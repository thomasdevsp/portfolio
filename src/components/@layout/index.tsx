"use client";

import Footer from "@/components/@layout/footer";
import Navigation from "@/components/@layout/navigation";
import { Box } from "@mui/material";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
      <Navigation />
      <Box sx={{
        // marginTop: {
        //   xs: "130px",
        //   sm: "86px",
        // }
      }}>
        {children}
      </Box>
      <Footer />
    </body>
  );
}
