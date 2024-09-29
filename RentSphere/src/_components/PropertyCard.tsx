import React, { useContext, useState } from "react";

import { Button } from "../components/ui/button";
import { Box } from "@mui/material";
import {
  BookmarkIcon,
  BedIcon,
  MapPinIcon,
  DollarSignIcon,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import { Input } from "../components/ui/input";
import { CartItemsContext } from "../App";
import toast from "react-hot-toast";

interface CourseCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  bedrooms: number;

  location: string;
  description: string;
  type: string;
}

function PropertyCard({
  id,
  title,
  image,
  price,
  description,
  bedrooms,
  location,
  type,
}: CourseCardProps) {
  const { setCartItems } = useContext(CartItemsContext);
  const [duration, setDuration] = useState<string>("");

  // Handle duration input change with validation for year-like input (up to 4 digits)
  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d{0,4}$/.test(value)) {
      setDuration(value);
    }
  };

  const handleCart = () => {
    if (!duration || isNaN(Number(duration))) {
      toast.error("Please enter the number of days, then you can continue");
      return;
    }

    const newCartItem = {
      id,
      title,
      image,
      price,
      description,
      bedrooms,
      location,
      type,
      totalPrice: parseInt(duration) * parseInt(price.toString()),
    };

    setCartItems((prev) => {
      return [...prev, newCartItem];
    });

    toast.success(
      "Booking successful! Check cart. "
    );
  };

  return (
    <div className="group transition overflow-hidden border rounded-lg p-4 hover:shadow-lg bg-white hover:bg-sky-50 h-full ">
      {/* Image and Bookmark Icon */}
      <div className="relative w-full aspect-video rounded-md overflow-hidden ">
        <Box
          sx={{
            p: "0.8rem",
            borderRadius: "100%",
            cursor: "pointer",
            "&:hover": { opacity: 0.7 },
            backgroundColor: "rgb(3, 105, 161)",
            position: "absolute",
            right: "0.5rem",
            top: "0.5rem",
          }}
        >
          <BookmarkIcon color="white" />
        </Box>
        <img className="object-cover w-full h-full" alt={title} src={image} />
      </div>

      {/* Property Info */}
      <div className="flex flex-col pt-4">
        <div className="text-lg md:text-xl font-semibold group-hover:text-sky-700 transition capitalize line-clamp-1">
          {title}
        </div>

        <p className="text-base text-sky-700 py-2 capitalize font-medium">
          {type}
        </p>

        <hr className="border-t my-2" />

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <hr className="border-t my-3" />

        {/* Property Details */}
        <div className="flex items-center gap-3 text-gray-700 text-sm font-medium py-2">
          <DollarSignIcon className="w-5 h-5 text-green-500" />
          Price: <span className="text-slate-800">₹{price} per night</span>
        </div>

        <div className="flex items-center gap-3 text-gray-700 text-sm font-medium">
          <MapPinIcon className="w-5 h-5 text-blue-600" />
          Location: <span className="text-slate-800">{location}</span>
        </div>

        <div className="flex items-center gap-3 text-gray-700 text-sm font-medium">
          <BedIcon className="w-5 h-5 text-orange-500" />
          Bedrooms: <span className="text-slate-800">{bedrooms}</span>
        </div>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="outline"
              className="text-white bg-sky-800 mt-8 hover:bg-slate-80text-white "
            >
              Book Now
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Book your Destination </AlertDialogTitle>
              <AlertDialogDescription>
                <div className="grid grid-cols-1 md:grid-cols-1 p-4">
                  {/* Duration Input */}
                  <div className="flex flex-col">
                    <label htmlFor="duration" className="mb-2 font-medium">
                      Duration (Year)
                    </label>
                    <Input
                      id="duration"
                      type="text"
                      value={duration}
                      onChange={handleDurationChange}
                      placeholder="Enter duration in days"
                      className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Enter the days duration (e.g., 5)
                    </p>
                  </div>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>
                {" "}
                <Button onClick={() => handleCart()}>Continue</Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default PropertyCard;
