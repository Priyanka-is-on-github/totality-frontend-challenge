import { useEffect, useState } from "react";

import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from "react-hot-toast";
import propertyCardsData from "./assets/PropertyCardsData";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { FilterContext, CartItemsContext } from "./utils/Context";
import { CartCardProps, PropertyCardProps } from "./utils/Types";

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
