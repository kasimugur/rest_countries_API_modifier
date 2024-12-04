"use client"
import { useRoutesContext } from '@/app/context/RoutesContext'
import { DarkMode, LightMode } from '@mui/icons-material'
import { Button } from '@mui/material'
import React, { useMemo, useState } from 'react'



export default function ThemaModal() {
  const {mode, setMode}:any = useRoutesContext()
  const handleClick = useMemo<()=> void>(() => {
    return () => {
      setMode((prevMode):any => (prevMode === 'light' ? 'dark' : 'light'))
    }
  }, [])

  return (
    <>
    <Button onClick={() => handleClick()} variant='text' startIcon={mode === "dark" ?<LightMode /> : <DarkMode />} color='primary' > {mode === "dark" ? "Light Mode" : "Dark Mode"}</Button>
    </>
  )
}
