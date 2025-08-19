import { useBreakpoint } from "@/hooks/useBreakpoints";
import { Stack, Typography } from "@mui/material";

export default function AboutMe() {
  const isMobile = useBreakpoint("md")

  return (
    <Stack
      sx={{
        padding: isMobile ? "1.5rem" : "5rem 0",

        alignItems: "center",
        gap: isMobile ? "2rem" : "5rem",
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
          gap: "1.125rem",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: isMobile ? "2rem" : "3rem",
            "span": {
              color: "#CBACF9",
            }
          }}
        >
          Sobre <span>mim</span>
        </Typography>

        <Typography
          sx={{
            color: "#fff",
            fontSize: isMobile ? "2rem" : "3rem",
            fontWeight: "bold",
            "b": {
              color: "#CBACF9",
            }
          }}
        >
          Trajetória, código e <b>paixões</b>
        </Typography>
      </Stack>

      <Stack
        sx={{
          maxWidth: "1000px",
          width: "100%",

          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          gap: "3rem",
        }}
      >
        <img
          src={isMobile ?
            "/assets/img/home/about-me/me-image-mb.svg"
            :
            "/assets/img/home/about-me/me-image.svg"
          }
          alt=""
          style={{
            borderRadius: "1rem",
            objectFit: "cover",
          }}
        />

        <Stack
          sx={{
            maxWidth: "522px",

            gap: "1.5rem",

            color: "#fff",
          }}
        >
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti earum
            nobis, cumque error excepturi asperiores magni dolores aut illo quae doloribus,
            iusto in provident suscipit sed voluptas magnam fugit mollitia.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti earum
            nobis, cumque error excepturi asperiores magni dolores aut illo quae doloribus,
            iusto in provident suscipit sed voluptas magnam fugit mollitia.
          </Typography>

          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti earum
            nobis, cumque error excepturi asperiores magni dolores aut illo quae doloribus,
            iusto in provident suscipit sed voluptas magnam fugit mollitia.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti earum
            nobis, cumque error excepturi asperiores magni dolores aut illo quae doloribus,
            iusto in provident suscipit sed voluptas magnam fugit mollitia.
          </Typography>

          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti earum
            nobis, cumque error excepturi asperiores magni dolores aut illo quae doloribus,
            iusto in provident suscipit sed voluptas magnam fugit mollitia.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti earum
            nobis, cumque error excepturi asperiores magni dolores aut illo quae doloribus,
            iusto in provident suscipit sed voluptas magnam fugit mollitia.
          </Typography>
        </Stack>
      </Stack>


    </Stack>
  )
}
