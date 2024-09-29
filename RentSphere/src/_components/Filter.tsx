import React, { useContext, useState } from "react";
import { Button } from "../components/ui/button"; // Assuming Shadcn components are available
import { Input } from "../components/ui/input"; // Assuming Shadcn components are available
import { Checkbox } from "../components/ui/checkbox"; // Assuming Shadcn components are available
import { Card } from "../components/ui/card"; // Assuming Shadcn components are available
import { Slider } from "../components/ui/slider"; // Assuming Shadcn components are available
import PropertyCardsData from "../assets/PropertyCardsData";
import PropertyCard from "./PropertyCard";
import { Navigate, useNavigate } from "react-router";

import { FilterContext } from "../App";
import toast from "react-hot-toast";

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






const Filter = () => {

  const navigate = useNavigate();

  // const [filteredProperties, setFilteredProperties] =
  //   useState<PropertyCardProps[]>(PropertyCardsData);

  const { filteredProperties, setFilteredProperties } =
  useContext(FilterContext);


  const [location, setLocation] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number[]>([10000, 50000]);
  const [bedrooms, setBedrooms] = useState<number>(1);
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>("");

  const handleFilter = () => {

    if (!location && priceRange[0] === 10000 && priceRange[1] === 50000 && bedrooms === 1 && !selectedPropertyType) {
      toast.error("Please provide at least one filter value before applying the filters.");
      return; // Exit the function if no inputs are provided
    }

    const filtered = PropertyCardsData.filter((property) => {

      return (
        (location === "" ||
          property.location.toLowerCase().includes(location.toLowerCase())) &&
        property.price >= priceRange[0] &&
        property.price <= priceRange[1] &&
        property.bedrooms >= bedrooms &&
        (selectedPropertyType === "" || property.type === selectedPropertyType)
      );
    });
  
    setFilteredProperties(filtered);
    navigate("/FilterCard");
   
  };

  return (
 

      <div className="p-6 absolute top-[55%] left-[10%] w-[80%] flex flex-col items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6   ">

          <div className="max-w-xs mx-auto  ">
            <select
              id="propertyType"
              value={selectedPropertyType}
              onChange={(e) => setSelectedPropertyType(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
            >
              <option value="" disabled>
                -- Choose Property Type --
              </option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
              <option value="apartment">Apartment</option>
              <option value="flat">Flat</option>
              <option value="office">Office</option>
              <option value="building">Building</option>
            </select>
          </div>

          <div className="flex flex-col">
            <Input
              value={location}
              onChange={(e: any) => setLocation(e.target.value)}
              placeholder="type location"
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
            />
          </div>

          <div className="flex flex-col ">
            <Slider
              value={priceRange}
              min={5000}
              max={100000}
              step={500}
              onValueChange={(value: any) => setPriceRange(value)}
              className="w-full bg-white"
            />
            <div className="flex justify-between mt-2 text-sm text-white">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>

          {/* Bedrooms Filter */}
          <div className="flex flex-col">
            <Input
              type="number"
              value={bedrooms}
              onChange={(e: any) => setBedrooms(parseInt(e.target.value))}
              placeholder="Number of bedrooms"
              className=" w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
            />
          </div>
        </div>

        {/* Apply Filters Button */}
        <Button onClick={handleFilter} className="mb-6 bg-sky-800 mt-4">
          Apply Filters
        </Button>

      </div>
  
  );
};

export default Filter;
