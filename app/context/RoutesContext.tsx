'use client'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import dataCountry from '@/data.json'
import { Country } from "@/constans";

interface routesType {
  dataCountry: Country[];
  filterData: string | null;
  setFilterData: Dispatch<SetStateAction<string | null>>;
  inputSearch: Country;
  filterName: string;
  setFilterName: Dispatch<SetStateAction<string | null>>;

}

const RoutesContext = createContext<routesType | undefined>(undefined)

export const RoutesContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filterData, setFilterData] = useState<string | null>(null)
  const [filterName, setFilterName] = useState<string | null>('')
  const inputSearch = dataCountry.filter((item) => {
    if (filterName !== null) {
      return item.name.toLowerCase().includes(filterName)
    }
    return true
  })
  const data = {
    filterData,
    setFilterData,
    filterName,
    setFilterName,
    inputSearch,
    dataCountry
  }
  console.log("filterData----", filterData)
  console.log("filterName----", typeof (filterName))
  console.log("inputsearch----", typeof (inputSearch))
  return (
    <RoutesContext.Provider value={data} >
      {children}
    </RoutesContext.Provider>
  )
}
export const useRoutesContext = () => {
  const context = useContext(RoutesContext)
  if (!context) {
    throw new Error("useRoutesContext must be used within a RoutesProvider")
  }
  return context
}









