'use client'
import React, { useEffect } from 'react'
import data from "@/data.json"
import Image from 'next/image'
export default function CountryDetail() {

  useEffect(()=>{},[])
  const imageCountry = data.filter(i => i.flag)
  return (
    <>
    <div className="flex">

      <div className="flex flex-col">
      {data.map(e=> (
        // <h1>{e.flag}</h1>
        <Image src={e.flag}  width={300} height={300} alt={e.name} />
        
      ))}
      </div>
    </div>
    </>
  )
}
