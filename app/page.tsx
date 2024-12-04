'use client'
import CountryCard from "@/components/CountryCard";
import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import SearchBar from "@/components/SearchBar";
import { useRoutesContext } from "./context/RoutesContext";
export default function Home() {
  const { filterData, inputSearch }: any = useRoutesContext()
  const filterCountry: any = filterData !== null ? inputSearch.filter(e => e.region === filterData) : inputSearch

  
  return (
    <>
          <Box component={"div"}>
            <SearchBar />
          </Box>
          <Box component={'div'} className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {
              filterCountry.map(e => <CountryCard key={e.numericCode} e={e} />)
            }
          </Box>
      
      
    </>
  );
}
