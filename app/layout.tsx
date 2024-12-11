"use client";

import localFont from "next/font/local";
import "./globals.css";
import { RoutesContextProvider } from "./context/RoutesContext";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import HeaderPage from "@/components/Header";
import { darkTheme, lightTheme } from "./pages/theme";
import { useMemo, useState } from "react";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? darkTheme.palette.mode : lightTheme.palette.mode,
    },
  }), [darkMode])

  const toggleDarkMode: () => void = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition duration-500 bg-rest-white  dark:bg-rest-veryDarkBlue`}
      >
        <RoutesContextProvider>
          <ThemeProvider theme={theme}>
            <Container className="flex flex-col gap-4 " maxWidth="lg">
              <div className="mb-5 bg-rest-veryLightGray">
                <HeaderPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              </div>
              {children}
            </Container>
          </ThemeProvider>
        </RoutesContextProvider>
      </body>
    </html>
  );
}
