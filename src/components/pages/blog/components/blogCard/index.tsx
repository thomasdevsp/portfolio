"use client"

import { useBreakpoint } from "@/hooks/useBreakpoints";
import { Stack, Typography } from "@mui/material";


export default function BlogCard({ title, dateDisplay, description, slug, tags }) {
  const isMobile = useBreakpoint("md")


  return (
    <Stack
      component={"a"}
      href={`/blog/${slug}`}
      sx={{
        padding: "1rem",
        maxWidth: isMobile ? "340px" : "600px",

        gap: "0.875rem",

        background: "#13162D",
        borderRadius: "0.625rem",
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      <Stack
        sx={{
          width: "100%",

          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#E5E2E2",
            fontSize: isMobile ? "0.75rem" : "0.875rem",
            fontWeight: "bold",
            opacity: 0.6,
          }}
        >
          {dateDisplay}
        </Typography>

        <Stack
          sx={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {tags.map((tag, index) => (
            <Typography
              key={index}
              sx={{
                padding: "0.25rem 0.5rem",

                background: "#202448",
                borderRadius: "1rem",
                color: "#fff",
                fontSize: isMobile ? "0.75rem" : "0.875rem",
                fontWeight: "bold",

              }}
            >
              {tag.name}
            </Typography>
          ))}
        </Stack>
      </Stack>

      <Stack
        sx={{
          gap: "0.5rem"
        }}
      >
        <Typography
          sx={{
            color: "#CBACF9",
            fontSize: isMobile ? "1rem" : "1.25rem",
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: "#E5E2E2",
            fontSize: isMobile ? "0.625rem" : "0.875rem",
            fontWeight: "bold",
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Stack>
  )
}
