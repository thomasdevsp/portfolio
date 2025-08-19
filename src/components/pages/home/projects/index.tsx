import { useBreakpoint } from "@/hooks/useBreakpoints";
import { Stack, Typography } from "@mui/material";
import { Project } from "./data";
import { RxArrowTopRight } from "react-icons/rx";

export default function Projects() {
  const isMobile = useBreakpoint("md")

  return (
    <Stack
      sx={{
        width: "100%",

        alignItems: "center",
        gap: "3rem",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontSize: isMobile ? "2rem" : "3rem",
          "b": {
            color: "#CBACF9",
          },
        }}
      >
        Projetos e <b>trampos</b> 🏃🏽‍️‍
      </Typography>

      <Stack
        sx={{
          padding: isMobile ? "0 1.5rem" : "0",
          maxWidth: "1300px",
          width: "100%",

          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem",

        }}
      >
        {Project.map((project, index) => (
          <Stack
            key={index}
            sx={{
              padding: isMobile ? "1.5rem 1.25rem" : "2rem 1.5rem",
              maxWidth: "560px",
              width: "100%",

              gap: "2rem",

              background: "linear-gradient(#04071D, #0C0E23)",
              borderRadius: "1.5rem",
            }}
          >
            <Stack
              sx={{
                width: "100%",
                minHeight: isMobile ? "220px" : "330px",

                background: "#13162D",
                borderRadius: "0.9rem",
              }}
            />

            <Stack
              sx={{
                gap: "1.125rem",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: isMobile ? "1.75rem" : "2rem",
                  fontWeight: "bold",
                }}
              >
                {project.title} {index}
              </Typography>

              <Typography
                sx={{
                  color: "#BEC1DD",
                  fontSize: isMobile ? "1rem" : "1.25rem",
                }}
              >
                {project.description}
              </Typography>
            </Stack>

            <Stack
              sx={{
                width: "100%",

                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "flex-start" : "center",
                justifyContent: "space-between",
                gap: "2rem",
              }}
            >
              <Stack
                sx={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                {project.icons.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt=""
                    style={{
                      maxWidth: "2rem",
                    }}
                  />
                ))}
              </Stack>

              <Typography
                component={"a"}
                sx={{
                  margin: isMobile ? "0 auto" : "",

                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",

                  color: "#CBACF9",
                  cursor: "pointer",
                  transition: "all 0.2s ease",

                  ":hover": {
                    transition: "all 0.2s ease",
                    color: "#b88bfc",
                  }
                }}
              >
                Check Live Site <RxArrowTopRight />
              </Typography>
            </Stack>

          </Stack>
        ))}
      </Stack>


    </Stack>
  )
}
