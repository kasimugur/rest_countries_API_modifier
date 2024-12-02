'use client'
import HeaderPage from "../components/Header";
import CountryCard from "@/components/CountryCard";
import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import SearchBar from "@/components/SearchBar";
import { useRoutesContext } from "./context/RoutesContext";
export default function Home() {
  const { filterData, inputSearch }: any = useRoutesContext()
  const filterCountry = filterData !== null ? inputSearch.filter(e => e.region === filterData) : inputSearch

  const theme = createTheme({
    colorSchemes: {
      dark: true,
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container className="flex flex-col gap-4" maxWidth="lg">
          <Box className="mb-5" component={"div"}>

            <HeaderPage />
          </Box>
          <Box  component={"div"}>
            <SearchBar />
          </Box>
          <Box component={'div'} className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {
              filterCountry.map(e => <CountryCard key={e.numericCode} e={e} />)
            }
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
