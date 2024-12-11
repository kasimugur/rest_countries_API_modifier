"use client"
import { DarkMode, LightMode } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'



interface ThemaModalProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}
export default function ThemaModal({ toggleDarkMode, darkMode }:ThemaModalProps) {


  return (
    <>
      <Button onClick={() => toggleDarkMode()} variant='text' startIcon={darkMode === false ? <LightMode /> : <DarkMode />} color='primary' >
       {darkMode === false ? "Light Mode" : "Dark Mode"}</Button>
    </>
  )
}
