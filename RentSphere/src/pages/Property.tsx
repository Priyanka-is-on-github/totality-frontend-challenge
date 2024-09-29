import  Layout  from '../layout'
import React from 'react'
import propertyCardsData from '../assets/PropertyCardsData'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Typography } from '@mui/material'
import PropertyCard from '../_components/PropertyCard'


interface PropertyCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  type: string;
}

function Property() {
  return (
    
<Layout>
<div className="mt-20">
        <div className=" w-full flex ">
          <Link to="/">
           
            <p className="p-6">
              <ArrowLeft />
            </p>
          </Link>

          <Typography
            variant="h1"
            id="heading1"
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              padding: "25px",
              margin: "auto",
            }}
          >
            All Property
          </Typography>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-9 ">
          {propertyCardsData.length === 0 ? (
            <p className="text-center">No properties found</p>
          ) : (
            propertyCardsData.map((property: PropertyCardProps) => (
              <div data-aos="fade-up"
              data-aos-duration="3000">
              <PropertyCard
                key={property.id} // Always provide a unique key when mapping
                id={property.id}
                title={property.title}
                image={property.image}
                description={property.description}
                price={property.price}
                location={property.location}
                bedrooms={property.bedrooms}
                type={property.type}
              />

</div>
            ))
          )}
        </div>
      </div>

</Layout>

  )
}

export default Property