import { Container, styled } from "@mui/material";
import Link from "next/link";

export const ContainerHeader = styled("header")(({ theme }) => ({
  width: "100%",
  zIndex: 200,
  background: "transparent",
  position: "fixed",
  top: 0,

  [theme.breakpoints.up("sm")]: {
    background: "transparent",
    boxShadow: theme.shadows[5],
  },
}));

export const ContainerNavigation = styled(Container)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(0, 3),
  },
}));

export const ContentNavigation = styled("nav")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(8),
}));

export const NextLinkStyle = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontSize: "0.9rem",
  fontWeight: 500,
  transition: "color 0.3s",
  color: "white",

  "&:hover": {
    color: theme.palette.primary.light,
  },
}));
