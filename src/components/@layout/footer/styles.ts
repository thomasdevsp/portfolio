import { Container, styled } from "@mui/material";
import Link from "next/link";

export const ContainerFooter = styled('footer')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  width: '100%',
  padding: '2rem 0',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  backgroundColor: theme.palette.background.paper,
  boxShadow: "-2px -2px 4px rgba(0, 0, 0, 0.25)",

  [theme.breakpoints.down('sm')]: {
    padding: '2rem 0 1rem',
  },
}));

export const ContentFooter = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
}))

export const ButtonLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: '0.5rem',
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem",
  transition: "color 0.3s",

  '&:hover': {
    color: theme.palette.primary.main,
  }
}));


