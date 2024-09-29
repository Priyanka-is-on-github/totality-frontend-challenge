export interface PropertyCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  type: string;
}
export interface CartCardProps {
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

export interface FilterContextType {
  filteredProperties: PropertyCardProps[];
  setFilteredProperties: React.Dispatch<
    React.SetStateAction<PropertyCardProps[]>
  >;
}

export interface CartContext {
  cartItems: CartCardProps[];
  setCartItems: React.Dispatch<React.SetStateAction<CartCardProps[]>>;
}
