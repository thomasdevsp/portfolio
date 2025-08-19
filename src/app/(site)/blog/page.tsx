"use client"

import { useBreakpoint } from "@/hooks/useBreakpoints"
import { Stack, Typography } from "@mui/material"

export default function Blog() {
  const isMobile = useBreakpoint("md")

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100dvh",

        alignItems: "center",
        justifyContent: "center",

      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "#fff",
          fontWeight: "bold",
          "b": {
            color: "#CBACF9",
          }
        }}
      >
        Em <b>Obras</b>
      </Typography>
    </Stack>
  )
}
