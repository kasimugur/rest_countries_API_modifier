import React from 'react'
import ThemaModal from './ThemaModal'
import { Typography } from '@mui/material'

export default function HeaderPage({toggleDarkMode, darkMode}) {
  return (
    <div className='header'>
      <Typography variant='h5'  className=' text-rest-veryTextBlue dark:text-rest-white '>Where in the world?</Typography>
      <ThemaModal darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  )
}
