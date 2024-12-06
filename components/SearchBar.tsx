'use client'
import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import data from '@/data.json'
import { useRoutesContext } from '@/app/context/RoutesContext'
export default function SearchBar() {
  const { filterData, setFilterData, filterName, setFilterName }: any = useRoutesContext()
  const RegionData = data.map(reg => reg.region)
  const Duplicates = RegionData.filter((reg, index, self) => self.indexOf(reg) !== index)
  const uniqueDuplicates = [...new Set(Duplicates)];

  return (
    <div className='flex flex-col md:flex-row justify-between'>
      <TextField
        value={filterName}
        onChange={(e) => setFilterName(e.target.value.toLowerCase())}
        className='textFieldInput'
        id="outlined-textarea"
        label="Search for a country..."
        placeholder="Country..."
        multiline
      />

      <Autocomplete
        className='bg-rest-darkBlue'
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
