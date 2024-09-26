import React from 'react'

async function location(latitude:number, longitude:number) {

   

    const lat=latitude.toPrecision(4)
    const lon=longitude.toPrecision(4)

    try {
      
const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;

const res=await fetch(url);

if (!res.ok) {
  throw new Error(`HTTP error! status: ${res.status}`);
}
const location=await res.json();
console.log(location)
  return location
    } catch (error) {
      console.log(error)
    }


}

export default location