import { Container, ThemeProvider } from "@mui/material";
import React, { ReactNode } from "react";
import ElevateAppBar from "./AppBar";
import { theme } from "@/styles/ThemProvider";
import Footer from "./footer/Footer";

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <ElevateAppBar>{children}</ElevateAppBar>
      <Footer />
    </ThemeProvider>
  );
}
