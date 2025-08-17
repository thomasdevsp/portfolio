import { createTheme } from "@mui/material/styles";
import "react-multi-carousel/lib/styles.css";
import "./globals.css";

export const EXPOFLORA_THEME_COLOR = {
  base: "#F6F1E8",
  title: "#7E1612",

  primary: {
    main: "#FF7A00",
    regular: "#ff9a36",
    medium: "#FF7A00",
    bold: "#DA5935",
    light: "#fff6e0",
  },

  secondary: {
    main: "#7E1612",
    regular: "#7E1612",
    medium: "#103F32",
    bold: "#0E2F23",
    light: "#E3F3E8",
  },

  highlight: {
    main: "#FED100",
    regular: "#f7ee6d",
    medium: "#886300",
    bold: "#301a00",
    light: "#f9fcce",
  },

  sucess: {
    main: "#89A039",
    regular: "#68B77D",
    medium: "#103F32",
    bold: "#89A039",
    light: "#E3F3E8",
  },

  background: {
    main: "#F8F8F8",
    differ: "#F6F1E8",
    primary: "#360E1A",
    secondary: "#0E1539",
    highlight: "#2C1405",
  },

  textWhite: "#FFFDF3",
  gradientButtonUpserEvent: "linear-gradient(90deg, #F26F00 1%, #E3903D 100%)",
  upsertEvent: {
    tabColor: "#F26F00",
    backgroundTabColor: "#FEF1E9",
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: EXPOFLORA_THEME_COLOR.primary.main,
      light: EXPOFLORA_THEME_COLOR.primary.light,
      dark: EXPOFLORA_THEME_COLOR.primary.bold,
    },
    secondary: {
      main: EXPOFLORA_THEME_COLOR.secondary.main,
      light: EXPOFLORA_THEME_COLOR.secondary.light,
      dark: EXPOFLORA_THEME_COLOR.secondary.bold,
      contrastText: "#FFF",
    },
    success: {
      main: EXPOFLORA_THEME_COLOR.sucess.main,
      light: EXPOFLORA_THEME_COLOR.sucess.light,
      dark: EXPOFLORA_THEME_COLOR.sucess.bold,
      contrastText: "#FFF",
    },
    background: {
      default: EXPOFLORA_THEME_COLOR.background.main,
      paper: EXPOFLORA_THEME_COLOR.background.differ,
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontFamily: "Nachoz, sans-serif",
    },
    h2: {
      fontSize: "2rem",
      fontFamily: "Nachoz , sans-serif",
    },
    h3: {
      fontSize: "1.5rem",
      fontFamily: "Nachoz, sans-serif",
    },
    h4: {
      fontSize: "1.25rem",
      fontFamily: "Nachoz, sans-serif",
    },
    h5: {
      fontSize: "1rem",
      fontFamily: "Nachoz, sans-serif",
    },
    h6: {
      fontSize: "0.875rem",
      fontFamily: "Nachoz, sans-serif",
    },
    body1: {
      fontSize: "1rem",
    },
    button: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    allVariants: {
      fontFamily: "Poppins, sans-serif",
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
            color: EXPOFLORA_THEME_COLOR.textWhite,
            background: EXPOFLORA_THEME_COLOR.primary.bold,
            "&:hover": {
              background: EXPOFLORA_THEME_COLOR.primary.bold,
            },
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            color: EXPOFLORA_THEME_COLOR.textWhite,
            background: EXPOFLORA_THEME_COLOR.secondary.main,
            "&:hover": {
              background: EXPOFLORA_THEME_COLOR.secondary.bold,
            },
          },
        },
        {
          props: { variant: "contained", color: "inherit" },
          style: {
            color: EXPOFLORA_THEME_COLOR.primary.bold,
            background: EXPOFLORA_THEME_COLOR.textWhite,
            "&:hover": {
              background: EXPOFLORA_THEME_COLOR.primary.main,
              color: EXPOFLORA_THEME_COLOR.textWhite,
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
