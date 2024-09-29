import { createContext } from "react";
import { FilterContextType, CartContext } from "./Types";

export const FilterContext = createContext<FilterContextType>({
  filteredProperties: [],
  setFilteredProperties: () => {},
});
export const CartItemsContext = createContext<CartContext>({
  cartItems: [],
  setCartItems: () => {},
});
