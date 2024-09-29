import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import Error from "./pages/Error"; 
import { createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";
import Property from "./pages/Property";
import FilterCard from "./_components/FilterCard";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>, 
        errorElement:<Error/>  
    },
    {
        path:'/Contact',
        element:<Contact/>,
        errorElement:<Error/>
    },
    {
        path:'/Services',
        element:<Services/>,
        errorElement:<Error/>
    },
    {
        path:'/About',
        element:<About/>,
        errorElement:<Error/>
    },
    {
        path:'/Properties',
        element:<Property/>,
        errorElement:<Error/>
    },
    {
        path:'/Cart',
        element:<Cart/>,
        errorElement:<Error/>
    },
    {
        path:'/FilterCard',
        element:<FilterCard/>,
        errorElement:<Error/>
    },

])