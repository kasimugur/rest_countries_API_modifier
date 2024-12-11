'use client'
import React, { useEffect } from 'react'
import data from "@/data.json"
import { useRouter } from 'next/navigation';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { KeyboardBackspace } from '@mui/icons-material';
import Link from 'next/link';
import { useRoutesContext } from '@/app/context/RoutesContext';
import { Country } from '@/constans';

interface CountryDetailProps {
  slug: string | string[] | undefined; // Allow slug to be string, string[], or undefined
}
export default function CountryDetail({ slug }: CountryDetailProps) {
  const {dataCountry} = useRoutesContext()
  const router = useRouter()
  const numericCode = dataCountry.filter(e => String(e.numericCode) === slug)
  const dataCountryBorder = numericCode.find(e => e.alpha3Code)
  const countryBorder = dataCountry.find(country => country.alpha3Code === dataCountryBorder?.alpha3Code);
  const borderCountries = countryBorder?.borders
  const borderCountryInfo = dataCountry.filter(country => borderCountries?.includes(country.alpha3Code))

  useEffect(()=>{
  // altSpellings özelliği olmayan bir ülkenin numericCode değerini bulma
const findNumericCodeWithoutAltSpellings = (countries: Country[]) => {
  return countries.filter(country => !country.altSpellings).map(country => ({
      name: country.name,
      numericCode: country.numericCode
  }));
};

const result = findNumericCodeWithoutAltSpellings(dataCountry);
console.log(result); // [{ name: "Brezilya", numericCode: "76" }]
  },[])

  return (
    <>

      <Container maxWidth='xl' className=" mt-10 w-full">
        <Box component={'div'} className=' mb-10'>
          <Button
          className=' dark:text-rest-white'
            sx={{
              backgroundColor: 'rgb(43, 57, 69)',
              color:"white"
              
            }} variant='contained' startIcon={<KeyboardBackspace />}
            onClick={() => router.push('/')} >Back</Button>
        </Box>
        {numericCode.map((e, index) => (
          <Box component={'div'} key={index} className='flex  gap-10 items-center w-full justify-start'>
            <Box component={'div'} className="flex basis-2/5">
              <CardMedia
                component="img"
                image={e.flag}
                alt={`${e.name} flag`}
              />
              {/* <Image width={580} height={500} src={e.flag} alt={`${e.name} flag`} /> */}
            </Box>
            <Box className="flex basis-2/4">
              <Card
                className='countryCardDetail'
                sx={{
                  background: "hsl(207, 26%, 17%)",
                  boxShadow: "none",
                  width: '100%'
                }}>
                <Typography className='px-8 mt-2 text-rest-veryTextBlue dark:text-rest-white' gutterBottom variant="h5" component="div">
                  {e.name}
                </Typography>
                <CardContent className='flex gap-8 ' >

                  <CardContent  className='flex flex-col gap-1 text-sm' >
                    <Typography
                       variant="body2" >
                      Native Name:   {e.nativeName}
                    </Typography>
                    <Typography  variant="body2" >
                      Population:   {e.population}
                    </Typography>
                    <Typography  variant="body2" >
                      Region:   {e.region}
                    </Typography>
                    <Typography  variant='body2' >
                      Sub Region:   {e.subregion}
                    </Typography>
                    <Typography  variant="body2" >
                      Capital:   {e.capital}
                    </Typography>
                  </CardContent>
                  <CardContent className='flex flex-col gap-1 text-sm'>
                    <Typography  variant="body2" >
                      Top Level Domain:   {e.topLevelDomain}
                    </Typography>
                    <Box  component={"div"} >
                      Currencies:  {e.currencies?.map(item => <Typography variant='body2'>{`${item.name}, `}  </Typography>)}
                    </Box>
                    <Box  component={"div"} >
                      Languages:   {e.languages.map(item => <Typography variant='body2'>{`${item.name}, `}  </Typography>)}
                    </Box>
                  </CardContent>
                </CardContent>
                <CardActions sx={{ mx: '1.5rem' }} >
                  <Typography variant='subtitle1'> Border Countries :</Typography>
                  <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    justifyContent: 'start',
                  }}>
                    {borderCountryInfo && borderCountryInfo?.map((country) => (
                      <Link key={country.numericCode} href={`/detail/${country.numericCode}`}>
                        <Button sx={{
                          backgroundColor: '#2b3945',
                          fontSize: '10px',
                          padding: '5px',
                          minWidth: '50px',
                        }}
                          size="small" variant='contained'>{country.name.toLowerCase()} </Button>
                      </Link>
                    ))}
                  </Box>
                </CardActions>
              </Card>
            </Box>
          </Box>
        ))}
      </Container >
    </>
  )
}
