import { Link } from "react-router-dom";

import Layout from "../layout";
import { useContext } from "react";
import { ArrowLeft } from "lucide-react";
import { Typography } from "@mui/material";

import CartCard from "../_components/CartCard";
import { Button } from "../components/ui/button";
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
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

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

function Cart() {
  const { cartItems } = useContext(CartItemsContext);

  return (
    <Layout>
      <div className="mt-20">
        <div className=" w-full flex  justify-between ">
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
              flexWrap: "wrap",
            }}
          >
            Your Booked Property
          </Typography>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              {cartItems.length === 0 ? (
                <Button
                  disabled
                  className="bg-gray-400 text-white m-3 md:p-6 cursor-not-allowed"
                >
                  Checkout
                </Button>
              ) : (
                <Button className="bg-sky-800 text-white m-3 md:p-6">
                  Checkout
                </Button>
              )}
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Checkout Process</AlertDialogTitle>
                <AlertDialogDescription>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    {/* Payment Section */}
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        type="text"
                        placeholder="1234 5678 9101 1121"
                        required
                        maxLength={16}
                      />
                    </div>

                    <div className="space-y-2 md:flex md:space-x-4">
                      <div className="flex-1">
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          type="text"
                          placeholder="MM/YY"
                          required
                          maxLength={5}
                          className="w-full"
                        />
                      </div>

                      <div className="flex-1">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          type="password"
                          placeholder="123"
                          required
                          maxLength={3}
                          className="w-full"
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-sky-800 mt-4">
                      Submit
                    </Button>
                  </form>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>
                  {" "}
                  <Button onClick={() => {}}>Continue</Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-9 ">
          {cartItems.length === 0 ? (
            <p className="text-center">Your Cart is empty</p>
          ) : (
            cartItems.map((cart: CartCardProps) => (
              <div data-aos="fade-up" data-aos-duration="3000">
                <CartCard
                  key={cart.id} // Always provide a unique key when mapping
                  id={cart.id}
                  title={cart.title}
                  image={cart.image}
                  description={cart.description}
                  price={cart.price}
                  location={cart.location}
                  bedrooms={cart.bedrooms}
                  type={cart.type}
                  totalPrice={cart.totalPrice}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
