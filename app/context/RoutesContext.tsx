'use client'
import { createContext, ReactNode, useContext, useState } from "react";
import datajso from '@/data.json'
interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface Flag {
  svg: string;
  png: string;
}

interface RegionalBloc {
  acronym: string;
  name: string;
}

interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: Flag;
  currencies: Currency[];
  languages: Language[];
  translations: { [key: string]: string }; // Dillerin çevirileri için dinamik bir nesne
  flag: string;
  regionalBlocs: RegionalBloc[];
  cioc: string;
  independent: boolean;
}
interface routesType {

}

const RoutesContext = createContext<routesType | undefined>(undefined)

export const RoutesContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filterData, setFilterData] = useState<string | null>(null)
  const [filterName, setFilterName] = useState<string | null>('')
  const inputSearch = datajso.filter((item) => item.name.toLowerCase().includes(filterName))
  console.log(inputSearch)
  const data = {
    filterData,
    setFilterData,
    filterName,
    setFilterName,
    inputSearch
  }
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









