import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

type ContainerProps = {
  children: React.ReactNode;
  sx?: React.CSSProperties;
};

const Container: React.FC<ContainerProps> = ({ children, sx }) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      sx={{
        // margin: "0 auto",
        width: "100%",
        // maxWidth: 1200,
        minHeight: "100vh",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
