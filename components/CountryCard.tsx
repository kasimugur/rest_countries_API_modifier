
import React, { ReactNode } from 'react'

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'
export default function CountryCard({e}:any) {
  return (
    <>

    
          <Card className='dark:bg-rest-veryDarkBlue'  sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 160 }}
              image={e.flag}
              title="flags"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {e.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Population: {e.population}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Region: {e.region}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Capital: {e.capital}
              </Typography>
            </CardContent>
            <CardActions>
              <Link className='w-full ' href={`/detail/${e.numericCode}`}>
                <Button className='w-full ' size="small" variant='outlined'>Detail</Button>
              </Link>
            </CardActions>
          </Card>
    </>
  )
}
