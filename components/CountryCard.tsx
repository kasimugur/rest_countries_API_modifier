
import React from 'react'

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'
export default function CountryCard({ e }: any) {
  return (
    <>
      <Card className='country_Card ' sx={{ maxWidth: 300 }}>
        <CardMedia
          sx={{ height: 160 }}
          image={e.flag}
          title="flags"
        />
        <CardContent className='text-black/70 dark:text-rest-veryLightGray'>
          <Typography className='text-rest-veryTextBlue dark:text-rest-white' gutterBottom variant="h5" component="div">
            {e.name}
          </Typography>
          <Typography variant="body2"  >
            Population: {e.population}
          </Typography>
          <Typography variant="body2" >
            Region: {e.region}
          </Typography>
          <Typography variant="body2">
            Capital: {e.capital}
          </Typography>
        </CardContent>
        <CardActions>
          <Link className='w-full ' href={`/detail/${e.numericCode}`}>
            <Button className='w-full ' size="small" variant='text'>Detail</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  )
}
