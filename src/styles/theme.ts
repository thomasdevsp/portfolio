import { createTheme } from "@mui/material/styles";
import "react-multi-carousel/lib/styles.css";
import "./globals.css";

export const THEME_COLOR = {
  base: "",
  title: "",

  primary: {
    main: "",
    regular: "",
    medium: "",
    bold: "",
    light: "",
  },

  secondary: {
    main: "",
    regular: "",
    medium: "",
    bold: "",
    light: "",
  },

  highlight: {
    main: "",
    regular: "",
    medium: "",
    bold: "",
    light: "",
  },

  sucess: {
    main: "",
    regular: "",
    medium: "",
    bold: "",
    light: "",
  },

  background: {
    main: "#000319",
    differ: "",
    primary: "",
    secondary: "",
    highlight: "",
  },

  textWhite: "#FFFDF3",
  gradientButtonUpserEvent: "linear-gradient(90deg,  1%,  100%)",
  upsertEvent: {
    tabColor: "",
    backgroundTabColor: "",
  },
};

const theme = createTheme({
   breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontFamily: "Inter, sans-serif",
    },
    h2: {
      fontSize: "2rem",
      fontFamily: "Inter , sans-serif",
    },
    h3: {
      fontSize: "1.5rem",
      fontFamily: "Inter, sans-serif",
    },
    h4: {
      fontSize: "1.25rem",
      fontFamily: "Inter, sans-serif",
    },
    h5: {
      fontSize: "1rem",
      fontFamily: "Inter, sans-serif",
    },
    h6: {
      fontSize: "0.875rem",
      fontFamily: "Inter, sans-serif",
    },
    body1: {
      fontSize: "1rem",
    },
    button: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    allVariants: {
      fontFamily: "Inter, sans-serif",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          transition: "all 0.3s ease",
          fontWeight: "bold",
          borderRadius: "5rem",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            color: THEME_COLOR.textWhite,
            background: THEME_COLOR.primary.bold,
            "&:hover": {
              background: THEME_COLOR.primary.bold,
            },
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            color: THEME_COLOR.textWhite,
            background: THEME_COLOR.secondary.main,
            "&:hover": {
              background: THEME_COLOR.secondary.bold,
            },
          },
        },
        {
          props: { variant: "contained", color: "inherit" },
          style: {
            color: THEME_COLOR.primary.bold,
            background: THEME_COLOR.textWhite,
            "&:hover": {
              background: THEME_COLOR.primary.main,
              color: THEME_COLOR.textWhite,
            },
          },
        },
      ],
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          shrink: true,
          style: { color: "#FFF" },
        },
      },
      styleOverrides: {
        root: {
          color: "#FFF",
          borderColor: "#FFF",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "white",
        },
      },
    },
  },
});

export default theme;
