import React from 'react'
import data from "@/data.json"
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
export default function CountryCard() {
  return (
    <>

      {
        data.map(e => (
          <Card sx={{ maxWidth: 300 }}>
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
              <Button className='w-full ' size="small" variant='outlined'>Detail</Button>
            </CardActions>
          </Card>
        ))
      }
    </>
  )
}
