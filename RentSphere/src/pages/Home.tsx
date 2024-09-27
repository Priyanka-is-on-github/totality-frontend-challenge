import { Button } from "../components/ui/button";
import * as React from "react";
import Layout from "../layout";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Filter from '../_components/Filter'
import Property from "../_components/Property";

import { Box, Typography  } from '@mui/material'
export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 7000, stopOnInteraction: true })
  );

  const propertyCards=[
    {
      icon:'src/assets/images1/1',
      property_name:'House & Villa',
      number_of_property:'213 Property',
    },
    {
      icon:'src/assets/images1/2',
      property_name:'House & Villa',
      number_of_property:'213 Property',
    },
    {
      icon:'src/assets/images1/3',
      property_name:'House & Villa',
      number_of_property:'213 Property',
    },
    {
      icon:'src/assets/images1/4',
      property_name:'House & Villa',
      number_of_property:'213 Property',
    },

  ]
  const images = [
    "src/assets/images/1.jpg",
    "src/assets/images/2.jpg",
    "src/assets/images/3.jpg",
    "src/assets/images/4.jpg",
    "src/assets/images/5.jpg",
  ];
  return (
    <Layout>
    <div>
     
      <div className="relative h-screen">

     

          <Carousel
            plugins={[plugin.current]}
            className="w-full h-screen absolute"
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index}>
                  <div className=" h-screen">
                    <Card className="h-full">
                      <CardContent className="flex h-full items-center justify-center relative ">
                      <Box  sx={{
              bgcolor: "black",
              height: { xs: "97vh", lg: "97%" },
              width: "97%",
              position: "absolute",
              opacity: "0.3",
              zIndex: 10,
             
            }}
         
          />
                        <img
                          src={src}
                          alt={`Carousel item ${index + 1}`}
                          className="w-full h-full  object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>


       


          <Filter />
        
      </div>

<div className=" mt-6 text-sky-700 flex flex-col justify-center items-center">
<Typography variant='h1' id="heading1"  sx={{fontSize:'25px', fontWeight:'bold', padding:'25px',  }}>Recent Property List</Typography> 
<Property/>
</div>


      </div>
    </Layout>
  );
}
