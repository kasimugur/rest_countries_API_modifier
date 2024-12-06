"use client"; 

import localFont from "next/font/local";
import "./globals.css";
import { RoutesContextProvider, useRoutesContext } from "./context/RoutesContext";
import {  Container, createTheme, ThemeProvider } from "@mui/material";
import HeaderPage from "@/components/Header";
import { useMemo } from "react";
import { darkTheme, lightTheme } from "./pages/theme";

// Yerel fontlar
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



// RootLayout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-rest-white  dark:bg-rest-veryDarkBlue`}
      >
        <RoutesContextProvider>
          <ThemeProvider theme={"light" === "light" ? darkTheme : lightTheme}>
            <Container  className="flex flex-col gap-4 " maxWidth="lg">
              <div className="mb-5 bg-rest-veryLightGray">
                <HeaderPage />
              </div>
              {children}
            </Container>
          </ThemeProvider>
        </RoutesContextProvider>
      </body>
    </html>
  );
}
