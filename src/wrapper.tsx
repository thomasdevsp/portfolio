"use client";

import { SnackbarProvider, closeSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import { Suspense } from "react";
import ThemeRegistry from "./styles/theme-registry";
import { SessionProvider } from "next-auth/react";
import { GoX } from "react-icons/go";

type ApplicationWrapperProps = {
  children: React.ReactNode;
};

export function ApplicationWrapper({ children }: ApplicationWrapperProps) {
  return (
    // <SessionProvider>
    <ThemeRegistry>
      <SnackbarProvider
        action={(snackbarId) => {
          return (
            <IconButton
              size="small"
              onClick={() => closeSnackbar(snackbarId)}
            >
              <GoX style={{ color: "white" }} fontSize="small" />
            </IconButton>
          );
        }}
        maxSnack={2}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Suspense>{children}</Suspense>
      </SnackbarProvider>
    </ThemeRegistry>
    // </SessionProvider>
  );
}
