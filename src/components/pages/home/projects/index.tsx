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
        padding: isMobile ? "3rem 0" : "5rem 0",

        alignItems: "center",
        gap: "3rem",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontSize: isMobile ? "2rem" : "3rem",
          textAlign: "center",
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
          gap: isMobile ? "1rem" : "2rem",

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
              justifyContent: "space-between",

              background: "linear-gradient(#04071D, #0C0E23)",
              border: "1px solid transparent",
              borderRadius: "1.5rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              ":hover": {
                transition: "all 0.5s ease",
                scale: 1.01,
                boxShadow: " 0 0 8px 1px rgba(255, 255, 255, 0.4);",
              }
            }}
          >
            <Stack
              sx={{
                width: "100%",
                minHeight: isMobile ? "220px" : "330px",

                background: project.image ? `url(${project.image})` : "#13162D",
                backgroundSize: "cover",
                backgroundPosition: "center",
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
                {project.title}
              </Typography>

              <Typography
                sx={{
                  color: "#BEC1DD",
                  fontSize: isMobile ? "0.9rem" : "1.125rem",
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
                      maxWidth: "1.75rem",
                      objectFit: "cover",
                    }}
                  />
                ))}
              </Stack>

              <Typography
                component={"a"}
                href={project.liveLink}
                target="_blank"
                sx={{
                  margin: isMobile ? "0 auto" : "",

                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",

                  color: "#CBACF9",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "all 0.2s ease",

                  ":hover": {
                    transition: "all 0.2s ease",
                    color: "#b88bfc",
                  }
                }}
              >
                Veja o site<RxArrowTopRight />
              </Typography>
            </Stack>

          </Stack>
        ))}
      </Stack>


    </Stack>
  )
}
