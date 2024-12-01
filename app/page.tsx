'use client'
import HeaderPage from "../components/Header";
import CountryCard from "@/components/CountryCard";
import { Box } from "@mui/material";
import SearchBar from "@/components/SearchBar";
import { useRoutesContext } from "./context/RoutesContext";
export default function Home() {
  const { filterData, inputSearch }: any = useRoutesContext()
  const filterRegion = filterData !== null ? inputSearch.filter(e => e.region === filterData) : inputSearch

  return (
    <>
      <HeaderPage />
      <SearchBar />
      <Box component={'div'} className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-5">
        {
          filterRegion.map(e => <CountryCard key={e.numericCode} e={e} />)
        }
      </Box>
    </>
  );
}
