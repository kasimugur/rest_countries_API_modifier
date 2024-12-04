'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import CountryDetail from '@/components/CountryDetail';
import { Box } from '@mui/material';

export default function DetailCountryPage() {
  const { slug } = useParams();
  return (
    <Box component={'div'}>
      <CountryDetail slug={slug} />
    </Box>
  )
}
