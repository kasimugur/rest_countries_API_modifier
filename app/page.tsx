'use client'
import CountryCard from "@/components/CountryCard";
import { Box } from "@mui/material";
import SearchBar from "@/components/SearchBar";
import { useRoutesContext } from "./context/RoutesContext";
import { Country } from "@/constans";
export default function Home() {
  const { filterData, inputSearch } = useRoutesContext()
  const filterCountry: Country[] = filterData !== null ? inputSearch.filter(e => e.region === filterData) : inputSearch
  
  return (
    <>
      <Box component={"div"}>
        <SearchBar />
      </Box>
      <Box component={'div'} className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
        {
          filterCountry.map((e) => <CountryCard key={Number(e.numericCode)} e={e} />)
        }
      </Box>


    </>
  );
}
