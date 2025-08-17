"use client";

import React from "react";
import { ContainerFooter, ContentFooter, ButtonLink } from "./styles";
import { Container, Divider, Link, Stack, Typography } from "@mui/material";
import { useBreakpoint } from "@/hooks/useBreakpoints";
import Logo from "../logo";

const sections = [
  {
    title: "Navegação",
    links: [
      { label: "Atrações", href: "/#" },
      { label: "Sua Festa", href: "/#" },
      { label: "Informações", href: "/#" },
      { label: "Preços e Promoções", href: "/#" },
    ],
  },
];

const contactInfo = [
  {
    icon: <img src="/assets/img/footer/icons/location.svg" />,
    text: "Av. Presidente Kennedy, 1500 – Ribeirânia",
  },
  {
    icon: <img src="/assets/img/footer/icons/tell.svg" />,
    text: (
      <>
        (16) 3013-0022 / 3013-7722
      </>
    ),
  },
  {
    icon: <img src="/assets/img/footer/icons/mail.svg" />,
    text: (
      <>
        festa@gorilao.com.br
      </>
    ),
  },
  {
    icon: <img src="/assets/img/footer/icons/time.svg" />,
    text: (
      <>
        Segunda a Sábado das 15h às 22h, Domingo: 15h às 21h
      </>
    ),
  },

];

export default function Footer() {
  const year = new Date().getFullYear();
  const isMobile = useBreakpoint("md");

  return (
    <>
      <ContainerFooter
        sx={{
          background: "#3CA956",
          color: "#fff",
        }}
      >
        <img
          src="/assets/img/footer/footer-top-left.svg"
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />

        <img
          src="/assets/img/footer/footer-top-right.svg"
          alt=""
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
        />

        <Container maxWidth="lg"
          sx={{
            padding: "1rem 1rem 0",
          }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={isMobile ? 4 : 1}
            justifyContent="space-between"
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            {/* Logo */}
            <Stack
              sx={{
                width: "100%",
                margin: "auto 0",

                alignItems: isMobile ? "center" : "flex-start",
                justifyContent: "center",
              }}

            >
              <Logo
                height={80}
              />
            </Stack>


            {/* Seções de Links */}
            {sections.map((section, index) => (
              <Stack
                key={index}
                sx={{
                  width: "100%",
                  gap: "0.5rem",

                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: "bold"
                  }}
                >
                  {section.title}
                </Typography>

                {
                  section.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      underline="none"
                      target={undefined}
                      sx={{
                        maxWidth: "180px",

                        color: "#fff",
                        cursor: "pointer",
                        fontSize: "0.875rem",
                      }}
                    >
                      {link.label}
                    </Link>
                  ))
                }
              </Stack>
            ))}

            {/* Contato */}
            <Stack
              sx={{
                width: "100%",
                gap: "1rem",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "bold"
                }}
              >
                CONTATO
              </Typography>
              {contactInfo.map((item, index) => (
                <Stack
                  key={index}
                  direction="row"
                  gap={1}
                  alignItems="flex-start"
                  color="primary.dark"
                  fontSize="0.875rem"
                >
                  {item.icon}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#fff",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>

        </Container>

      </ContainerFooter >

      {/* Desenvolvido por */}
      < Stack
        sx={{
          background: "#3CA956",
          padding: isMobile ? "1rem 1rem 6rem" : "1rem",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }
        }
      >
        <Typography variant="body2">
          Desenvolvido por <Link href="https://www.summusmarketing.com.br/" target="_blank"
            sx={{
              color: "white",
              textDecoration: "underline",
            }}
          >Summus Marketing</Link>
        </Typography>
      </Stack >
    </>
  );
};

