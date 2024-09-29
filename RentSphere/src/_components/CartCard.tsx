import { useContext } from "react";

import { Button } from "../components/ui/button";

import { BedIcon, MapPinIcon, DollarSignIcon } from "lucide-react";
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

import toast from "react-hot-toast";
import { CartItemsContext } from "../utils/Context";

interface CartCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  type: string;
  totalPrice: number;
}

function CartCard({
  id,
  title,
  image,
  // price,
  description,
  bedrooms,
  location,
  type,
  totalPrice,
}: CartCardProps) {
  const { cartItems, setCartItems } = useContext(CartItemsContext);

  const handleDeleteCart = (id: number) => {
    // Filter out the cart item with the matching id
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== id);

    // Update the cart items state
    setCartItems(newCartItems);
    toast.success("Your Booked Property has successfully deleted");
  };

  return (
    <div className="group transition overflow-hidden border rounded-lg p-4 hover:shadow-lg bg-white hover:bg-sky-50 h-full ">
      <div className="relative w-full aspect-video rounded-md overflow-hidden ">
        <img className="object-cover w-full h-full" alt={title} src={image} />
      </div>

      <div className="flex flex-col pt-4 ">
        <div className="text-lg md:text-xl font-semibold group-hover:text-sky-700 transition capitalize line-clamp-1">
          {title}
        </div>

        <p className="text-base text-sky-700 py-2 capitalize font-medium">
          {type}
        </p>

        <hr className="border-t my-2" />

        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <hr className="border-t my-3" />

        <div className="flex items-center gap-3 text-gray-700 text-sm font-medium py-2">
          <DollarSignIcon className="w-5 h-5 text-green-500" />
          Total Price: <span className="text-slate-800">₹{totalPrice} </span>
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
            <Button variant="outline" className="bg-sky-800 mt-8">
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will delete your Booked
                property .
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>
                {" "}
                <Button onClick={() => handleDeleteCart(id)}>Continue</Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default CartCard;
