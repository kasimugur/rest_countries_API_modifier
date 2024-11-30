'use client'
import HeaderPage from "../components/Header";
import CountryCard from "@/components/CountryCard";
import { Box } from "@mui/material";
import SearchBar from "@/components/SearchBar";
import data from "@/data.json"
import { useRoutesContext } from "./context/RoutesContext";
export default function Home() {
  const { filterData }:any = useRoutesContext()
  const filterRegion = filterData !== null ? data.filter(e  => e.region === filterData) : data

  console.log("filter data ", filterRegion )
  return (
    <>
      <HeaderPage />
      <SearchBar />
      <Box component={'div'} className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-5">
        {
          filterRegion.map(e => <CountryCard  key={e.numericCode} e={e} /> )
        }
      </Box>
    </>
  );
}
