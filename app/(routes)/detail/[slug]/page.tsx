'use client'
import React from 'react'
import data from '@/data.json'
import { useParams } from 'next/navigation'
import CountryDetail from '@/components/CountryDetail';
import { Box } from '@mui/material';

export default function DetailCountryPage() {
  const { slug } = useParams();
  console.log(data.filter(e => e.numericCode == slug).map(e => e.name))
  console.log(typeof (slug))
  return (
    <Box component={'div'}>
      <CountryDetail slug={slug} />
    </Box>
  )
}
