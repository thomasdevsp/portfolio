import { useBreakpoint } from "@/hooks/useBreakpoints";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import useQueryParams from "@/hooks/useQueryParams";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 40,
  },
};

const backgroundVariants = {
  initial: { width: 0 },
  hover: {
    width: "100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: { color: "#000" },
  hover: {
    color: "#fff",
    transition: {
      delay: 0.5,
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const overlayVariants = {
  initial: { opacity: 0, display: "none" },
  hover: {
    opacity: 1,
    display: "block",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

function AnimatedCard({ item, onClick }) {
  const { setParam } = useQueryParams();
  return (
    <Stack
      component={motion.div}
      whileHover="hover"
      initial="initial"
      sx={{
        width: "100%",
        maxWidth: 320,
        margin: "auto",
        // borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        height: "100%",
      }}
      onClick={() => setParam("modal", item.link)}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "16px 16px 0 0",
          border: "2px solid #DA5935",
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{
            display: "block",
            width: "105%",
            height: "auto",
            objectFit: "cover",
            objectPosition: "center",
            maxHeight: "240px",
            marginLeft: "-2.5%",
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "#fff",
            padding: "1rem",
            zIndex: 100,
            height: "100%",
          }}
          variants={overlayVariants}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Typography
              variant="body2"
              sx={{ margin: "0.5rem 0" }}
              fontSize="0.7rem"
              textAlign="center"
            >
              {item?.description}
            </Typography>

            {item?.link && item?.link !== "#" && item?.link !== "" && (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  if (item.external) {
                    window.open(item.link, "_blank");
                  } else if (onClick) {
                    onClick(item.link);
                  }
                }}
                style={{
                  width: "100%",
                  backgroundColor: "#fff",
                  color: "#DA5935",
                  fontSize: "0.8rem",
                  padding: "0.25rem 0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                SAIBA MAIS
              </Button>
            )}
          </Stack>
        </motion.div>
      </div>
      <Box
        style={{
          alignItems: "center",
          padding: "0.5rem",
          display: "flex",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component={motion.div}
          variants={backgroundVariants}
          sx={{
            position: "absolute",
            borderRadius: "0 0 16px 16px",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#DA5935",
            minWidth: "5px",
          }}
        />

        <Typography
          component={motion.div}
          variants={textVariants}
          fontSize="0.9rem"
          fontWeight={600}
          sx={{
            position: "relative",
            zIndex: 1,
          }}
        >
          {item.title}
        </Typography>
      </Box>
    </Stack>
  );
}

export default function GridContent({
  data,
  onClick,
  webUseGrid,
  shadow,
  isNatal,
}: {
  data: {
    title: string | React.ReactNode;
    image: string;
    imageMobile: string;
    link?: string;
    color: string;
    grid: number;
    description?: string;
    external?: boolean;
    noTarget?: boolean;
  }[];
  onClick?: (link: string) => void;
  webUseGrid?: boolean;
  shadow?: boolean;
  isNatal?: boolean;

}) {
  const isMobile = useBreakpoint("sm");
  const router = useRouter();
  const { setParam } = useQueryParams();

  if (!isMobile && !webUseGrid) {
    return (
      <Stack
        sx={{
          position: "relative",
          width: "100%",
          paddingLeft: "5%",
        }}
      >
        <Carousel
          responsive={responsive}
          infinite
          // autoPlaySpeed={5000}
          // autoPlay
          ssr
          arrows={true}
          showDots={isMobile}
          partialVisible
        // customDot={<CustomDots color={color} />}
        // afterChange={(previousSlide, { currentSlide }) =>
        //   setCurrentIndex(currentSlide)
        // }
        >
          {data.map((item, index) => (
            <Stack
              key={index}
              sx={{
                padding: "0 0.5rem 2rem",
                width: "100%",
                height: "100%",
              }}
            >
              <AnimatedCard item={item} onClick={onClick} />
            </Stack>
          ))}
        </Carousel>
      </Stack>
    );
  }

  return (
    <Grid container spacing={1} justifyContent="center">
      {data.map((item, index) => (
        <Grid
          item
          key={index}
          xs={item.grid}
          sm={item.grid}
          md={4}
          lg={4}
        >
          <Card
            sx={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "2px solid",
              borderColor: item.color,
              position: "relative",
              boxShadow: "none",
            }}
          >
            <CardActionArea
              sx={{
                ...(shadow && {
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))",
                    zIndex: 1,
                  },
                }),
              }}
              onClick={() => {
                if (!item.link) return;

                if (item.external) {
                  if (item.noTarget) {
                    router.push(item.link);

                    return;
                  }
                  window.open(item.link, "_blank");
                } else {
                  if (onClick) {
                    onClick(item.link);
                  } else {
                    setParam("modal", item.link);
                  }
                }
              }}

            >
              <CardMedia
                component="img"
                height="170"
                image={!isMobile ? item.image : item.imageMobile}
                alt={`imagem ${!isMobile ? item.image : item.imageMobile}`}
              />
              <CardContent
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  color: "#fff",
                  maxWidth: "calc(100% - 24px)",
                  padding: "12px",
                  zIndex: 2,
                }}
              >
                <Typography fontSize="1.25em" fontWeight={600}>
                  {item.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))
      }
    </Grid >
  );
}
