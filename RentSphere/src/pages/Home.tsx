import * as React from "react";
import Layout from "../layout";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import Filter from "../_components/Filter";

import { Box } from "@mui/material";
import Cards from "../_components/Cards";
export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 7000, stopOnInteraction: true })
  );

  // const propertyCards = [
  //   {
  //     icon: "src/assets/images1/1",
  //     property_name: "House & Villa",
  //     number_of_property: "213 Property",
  //   },
  //   {
  //     icon: "src/assets/images1/2",
  //     property_name: "House & Villa",
  //     number_of_property: "213 Property",
  //   },
  //   {
  //     icon: "src/assets/images1/3",
  //     property_name: "House & Villa",
  //     number_of_property: "213 Property",
  //   },
  //   {
  //     icon: "src/assets/images1/4",
  //     property_name: "House & Villa",
  //     number_of_property: "213 Property",
  //   },
  // ];
  const images = [
    "src/assets/images/1.jpg",
    "src/assets/images/2.jpg",
    "src/assets/images/3.jpg",
    "src/assets/images/4.jpg",
    "src/assets/images/5.jpg",
  ];
  return (
    <Layout>
      <>
        <div className="relative ">
          <Carousel
            plugins={[plugin.current]}
            className="w-full "
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index}>
                  <div className=" h-screen">
                    <Card className="h-full">
                      <CardContent className="flex h-full items-center justify-center relative ">
                        <Box
                          sx={{
                            bgcolor: "black",
                            height: { xs: "97vh", lg: "97%" },
                            width: "97%",
                            position: "absolute",
                            opacity: "0.6",
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

          <Box
            id="head"
            sx={{
              position: "absolute",
              backgroundColor: "transparent",
              width: "80%",
              top: "27%",
              left: "10%",
            }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-center text-white">
              Effortlessly Find Your Dream Home Luxury Villas and Homes for Rent
            </h1>
            <h1 className="text-xl md:text-lg font-bold text-center  pt-3 text-slate-400">
              Discover a Seamless Rental Experience with Personalized Service
            </h1>
          </Box>

          <Filter />
        </div>

        <Cards />
      </>
    </Layout>
  );
}
