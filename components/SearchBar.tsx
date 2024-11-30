'use client'
import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import data from '@/data.json'
import { useRoutesContext } from '@/app/context/RoutesContext'
export default function SearchBar() {
  const RegionData = data.map(reg => reg.region )
  const Duplicates = RegionData.filter((reg, index,self) => self.indexOf(reg) !== index  ) 
  const uniqueDuplicates = [...new Set(Duplicates)];
  // const [value, setValue] = useState<string | null>(null);
  const { filterData,setFilterData}:any = useRoutesContext() 
  
  return (
    <div>
      <div>{`value: ${filterData !== null ? `'${filterData}'` : 'null'}`}</div>
      <Autocomplete
      className='bg-rest-veryDarkBlue'
        value={filterData}
        onChange={(event: any, newValue: string | null) => {
          setFilterData(newValue);
        }}
        id="controllable-states-demo"
        options={uniqueDuplicates}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Region" />}
      />
    </div>
  )
}
