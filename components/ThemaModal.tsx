"use client"
import { useRoutesContext } from '@/app/context/RoutesContext'
import { DarkMode, LightMode } from '@mui/icons-material'
import { Button } from '@mui/material'
import React, { useMemo, useState } from 'react'



export default function ThemaModal({ toggleDarkMode, darkMode }) {
  const { mode, setMode }: any = useRoutesContext()
  const handleClick = useMemo<() => void>(() => {
    return () => {
      setMode((prevMode): string => (prevMode === 'light' ? 'dark' : 'light'))
    }
  }, [])

  return (
    <>
      <Button onClick={() => toggleDarkMode()} variant='text' startIcon={darkMode === false ? <LightMode /> : <DarkMode />} color='primary' >
       {darkMode === false ? "Light Mode" : "Dark Mode"}</Button>
    </>
  )
}
