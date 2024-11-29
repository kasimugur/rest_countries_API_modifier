'use client'
import React from 'react'
import data from "@/data.json"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { Box, Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import { KeyboardBackspace } from '@mui/icons-material';
import Link from 'next/link';

interface CountryDetailProps {
  slug: string | string[] | undefined; // Allow slug to be string, string[], or undefined
}
export default function CountryDetail({ slug }: CountryDetailProps) {
  const router = useRouter()
  const numericCode = data.filter(e => String(e.numericCode) === slug)
  const dataCountryBorder = numericCode.find(e => e.alpha3Code)
  const countryBorder = data.find(country => country.alpha3Code === dataCountryBorder?.alpha3Code);
  const borderCountries = countryBorder?.borders
  const borderCountryInfo = data.filter(country => borderCountries?.includes(country.alpha3Code))


  return (
    <>

      <Container maxWidth='xl' className=" bg-rest-veryDarkBlue w-full">
        <Box component={'div'} className=''>
          <Button
            sx={{
              backgroundColor: '#2b3945'
            }} variant='contained' startIcon={<KeyboardBackspace />}
            onClick={() => router.push('/')} >Back</Button>
        </Box>
        {numericCode.map((e, index) => (
          <Box component={'div'} key={index} className='flex min-h-screen items-center w-full justify-center'>
            <Box component={'div'} className="flex basis-2/5">
              <Image width={550} height={450} src={e.flag} alt={`${e.name} flag`} />
            </Box>
            <Box className="flex basis-2/5">
              <Card
                
                sx={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  width:'100%'
                }}>
                <Typography sx={{px:'2rem' ,mt:'0.5rem', color:'hsl(0, 0%, 100%)'}}  gutterBottom variant="h4" component="div">
                  {e.name}
                </Typography>
                <CardContent sx={{display:'flex', gap:'7rem', color:'hsl(0, 0%, 80%)'}} >

                  <CardContent>
                    <Typography 
                    sx={{display: 'flex', marginBottom: '4px'}}  variant="body2" >
                      Native Name:   {e.nativeName}
                    </Typography>
                    <Typography sx={{display: 'flex', marginBottom: '4px'}}  variant="body2" >
                      Population:   {e.population}
                    </Typography>
                    <Typography sx={{display: 'flex', marginBottom: '4px'}}  variant="body2" >
                      Region:   {e.region}
                    </Typography>
                    <Typography sx={{display: 'flex', marginBottom: '4px'}} variant='body2' >
                      Sub Region:   {e.subregion}
                    </Typography>
                    <Typography sx={{display: 'flex', marginBottom: '4px'}}  variant="body2" >
                      Capital:   {e.capital}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography sx={{display: 'flex', marginBottom: '4px'}}  variant="body2" >
                      Top Level Domain:   {e.topLevelDomain}
                    </Typography>
                    <Typography sx={{display: 'flex', marginBottom: '4px'}}  variant="body2" >
                      Currencies:  {e.currencies?.map(item => <Typography variant='body2'>{`${item.name}, `}  </Typography>)}
                    </Typography>
                    <Typography sx={{display: 'flex', marginBottom: '4px'}}  variant="body2" >
                      Languages:   {e.languages.map(item => <Typography variant='body2'>{`${item.name}, `}  </Typography>)}
                    </Typography>
                  </CardContent>
                </CardContent>
                <CardActions sx={{mx:'1.5rem'}} >
                  <Typography sx={{color: 'hsl(0, 0%, 80%)'}} >Border Countries:</Typography>
                  {borderCountryInfo && borderCountryInfo?.map((country, index) => (
                  <Link key={index} href={`/detail/${country.numericCode}`}>
                  <Button sx={{
                    backgroundColor: '#2b3945'
                  }} size="small" variant='contained'>{country.name.toLowerCase()} </Button>
                  </Link>
                  ))}
                </CardActions>
              </Card>
            </Box>
          </Box>
        ))}
      </Container >
    </>
  )
}
