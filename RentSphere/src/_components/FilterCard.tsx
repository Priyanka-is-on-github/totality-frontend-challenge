import Layout from "../layout";
import { useContext } from "react";
import PropertyCard from "./PropertyCard";
import { Typography } from "@mui/material";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { FilterContext } from "../utils/Context";

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

function FilterCard() {
  const { filteredProperties } = useContext(FilterContext);

  return (
    <Layout>
      <div className=" ">
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
            Filter Property
          </Typography>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-9 ">
          {filteredProperties.length === 0 ? (
            <p className="text-center">No properties match your filters.</p>
          ) : (
            filteredProperties.map((property: PropertyCardProps) => (
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
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}

export default FilterCard;
