"use client";

import React, { useState } from "react";
import { Divider, Stack, Typography } from "@mui/material";
import { useBreakpoint } from "@/hooks/useBreakpoints";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const isMobile = useBreakpoint("md");

  const handleCopyClick = () => {
    navigator.clipboard.writeText("thomasdevsp@gmail.com")
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <>

      <Stack
        sx={{
          width: "100%",
          padding: isMobile ? "2rem 1.25rem" : "1.25rem",

          alignItems: "center",

          background: "#000319",
        }}
      >
        <Stack
          sx={{
            gap: "1rem",
          }}
        >
          <Stack>
            <Typography
              sx={{
                color: "#fff",
                fontSize: isMobile ? "3.125rem" : "4.75rem",
                fontWeight: "bold",
                "span": {
                  color: "#CBACF9",
                }
              }}
            >
              Vamos desenvolver <br />
              sua <span>ideia</span>
            </Typography>
          </Stack>

          <Stack
            sx={{
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              gap: "2rem",
              justifyContent: "space-between",
            }}
          >
            <Stack
              onClick={handleCopyClick}
              sx={{
                maxWidth: isMobile ? "270px" : copied ? "190px" : "330px",
                cursor: "pointer",
                "&:hover .divider-hover": {
                  transition: "all 0.5s ease",
                  width: 0,
                },
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: isMobile ? "1.375rem" : "1.75rem",
                }}
              >
                {copied ? "email copiado!" : "thomasdevsp@gmail.com"}
              </Typography>
              <Divider
                className="divider-hover"
                sx={{
                  width: "100%",
                  height: "3px",

                  background: "#fff",
                  borderRadius: "6px",
                  transition: "all 0.6s ease",

                }}
              />
            </Stack>

            <Stack
              sx={{
                flexDirection: "row",
                gap: "0.5rem",
              }}
            >
              <Stack
                component={"a"}
                href="https://github.com/thomasdevsp"
                target="_blank"
                sx={{
                  padding: "0.625rem",

                  background: "#A265FB",
                  borderRadius: "0.5rem",
                  color: "#fff",
                  transition: "all 0.2s ease",
                  ":hover": {
                    transition: "all 0.2s ease",
                    background: "#8034F2",
                    scale: 1.1,
                  }
                }}
              >
                <FaGithub
                  size={24}
                />
              </Stack>

              <Stack
                component={"a"}
                href="https://www.linkedin.com/in/thomas-sampaio/"
                target="_blank"
                sx={{
                  padding: "0.625rem",

                  background: "#A265FB",
                  borderRadius: "0.5rem",
                  color: "#fff",
                  transition: "all 0.2s ease",
                  ":hover": {
                    transition: "all 0.2s ease",
                    background: "#8034F2",
                    scale: 1.1,
                  }
                }}
              >
                <FaLinkedin
                  size={24}
                />
              </Stack>

            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* Desenvolvido por */}
      < Stack
        sx={{
          background: "#000319",
          padding: isMobile ? "1rem 1rem " : "1rem",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }
        }
      >
        <Typography
          variant="body2"
          sx={{
            "b": {
              color: "#CBACF9",
            }
          }}
        >
          Developed and Design by me(Thomas <b>Fernando</b>)
        </Typography>
      </Stack >
    </>
  );
};

