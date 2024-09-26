import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import location from '../utils/location';

interface CourseCardProps {
    id: string;
    title: string;
    imageUrl: string;
    price: number;
    latitude:number,
    longitude:number,

     
  }

 function PropertyCard({id, title, imageUrl, price, latitude, longitude}: CourseCardProps) {

    let loc;
    (async()=>{
        loc= await location(latitude,longitude)
    })()
    
 

  return (
    <Link to=''>
      <div className="group  transition overflow-hidden borser rounded-lg p-3 h-full hover:shadow-lg ">
        <div className="relative w-full  aspect-video rounded-md overflow-hidden">
          <img className="object-cover w-full h-full" alt={title} src={imageUrl} />
        </div>

        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {title}
          </div>

          {/* <p className="text-xs text-muted-foreground">{category}</p> */}

          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
         
              <span>
              
               {loc}
              </span>
            </div>
          </div>

         
        </div>
      </div>
    </Link>
  )
}

export default PropertyCard