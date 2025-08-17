"use client";

import { SnackbarProvider, closeSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import { Suspense } from "react";
import { Close as MUICloseIcon } from "@material-ui/icons";
import ThemeRegistry from "./styles/theme-registry";
import { SessionProvider } from "next-auth/react";

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
                <MUICloseIcon style={{ color: "white" }} fontSize="small" />
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
