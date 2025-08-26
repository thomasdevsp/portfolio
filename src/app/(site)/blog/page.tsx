"use client"

import { useBreakpoint } from "@/hooks/useBreakpoints"
import { Stack, Typography } from "@mui/material"
import { blog } from "./data"
import useQueryParams from "@/hooks/useQueryParams"

export default function Blog() {
  const isMobile = useBreakpoint("md")
  const { setParam } = useQueryParams()

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100dvh",

        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",

      }}
    >

      <Stack
        sx={{
          gap: "1.5rem",
        }}
      >
        {blog.map((blog, index) => (
          <Stack
            component={"div"}
            key={index}
            onClick={() => setParam("modal", blog.link)}
            sx={{
              padding: "1rem",
              maxWidth: isMobile ? "340px" : "600px",

              gap: "0.875rem",

              background: "#13162D",
              borderRadius: "0.625rem",
              cursor: "pointer"
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
                {blog.date}
              </Typography>

              {blog.tags.map((tag, index) => (
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
                  {tag}
                </Typography>
              ))}
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
                {blog.title}
              </Typography>

              <Typography
                sx={{
                  color: "#E5E2E2",
                  fontSize: isMobile ? "0.625rem" : "0.875rem",
                  fontWeight: "bold",
                }}
              >
                {blog.description}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
