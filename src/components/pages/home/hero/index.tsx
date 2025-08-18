import { useBreakpoint } from "@/hooks/useBreakpoints";
import { Stack, Typography } from "@mui/material";

export default function Hero() {
  const isMobile = useBreakpoint("md")

  return (
    <Stack
      sx={{
        minHeight: "900px",
        padding: "2rem",

        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: "center",
        gap: isMobile ? "1.5rem" : "2.5rem",

      }}
    >
      <Stack
        sx={{
          color: "#fff",
          fontSize: "1.875rem",
          fontWeight: 800,
        }}
      >
        <Typography
          sx={{
            fontSize: "inherit",
            fontWeight: 200,
          }}
        >
          Oi!, sou
        </Typography>



        <Typography
          sx={{
            fontSize: "inherit",
            "b": {
              color: "#CBACF9",

            }
          }}
        >
          Thomas{" "}{!isMobile && <br />} <b>Fernando</b>
        </Typography>

      </Stack>

      <Typography
        sx={{
          color: "#fff",
          fontSize: isMobile ? "2.625rem" : "4rem",
          fontWeight: "bold",
          "b": {
            color: "#CBACF9",
          }
        }}
      >
        Dev Front End  <b>&</b> <br />
        Pessoa <b>curiosa</b>

      </Typography>



    </Stack>
  )
}
