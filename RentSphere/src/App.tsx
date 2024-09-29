import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./layout";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from "react-hot-toast";
import propertyCardsData from "./assets/PropertyCardsData";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'

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

interface FilterContextType {
  filteredProperties: PropertyCardProps[];
  setFilteredProperties: React.Dispatch<
    React.SetStateAction<PropertyCardProps[]>
  >;
}

interface CartContext {
  cartItems: CartCardProps[];
  setCartItems: React.Dispatch<React.SetStateAction<CartCardProps[]>>;
}
export const FilterContext = createContext<FilterContextType>();
export const CartItemsContext = createContext<CartContext>();

function App() {
  const [filteredProperties, setFilteredProperties] =
    useState<PropertyCardProps[]>(propertyCardsData);

  const [cartItems, setCartItems] = useState<CartCardProps[]>([]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
        <FilterContext.Provider
          value={{ filteredProperties, setFilteredProperties }}
        >
          <RouterProvider router={router} />

          <Toaster />
        </FilterContext.Provider>
      </CartItemsContext.Provider>
    </>
  );
}

export default App;
