import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PropertyCard from '../_components/PropertyCard'

import fetchPropertyData from '../utils/fetchPropertyData'



function Property() {

    const [property, setProperty]=useState([])
    useEffect( ()=>{

        (async()=>{
            const dataList = await fetchPropertyData()
            console.log(dataList.results)
              setProperty(dataList.results)
            
        })()
     
    },[])

  return (
    <>
   <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 ">
 
       

        {property.map((item) => (




          <PropertyCard
            key={item?.id}
          id={item.id}
            title={item?.name}
            imageUrl={item?.photoMainUrl}
       
            price={item?.price}
         latitude={item.latitude}
         longitude={item.longitude}
       
          />

        ))}
      </div>

      {property.length === 0 && (
        <div className="text-center text-sm text-muted-foreground mt-10">
          No property found
        </div>
      )}
    </div>
    </>
    
  )
}

export default Property