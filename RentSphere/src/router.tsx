import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import Pricing from "./pages/Pricing"; 
import Error from "./pages/Error"; 
import { createBrowserRouter } from "react-router-dom";

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
        path:'/Pricing',
        element:<Pricing/>,
        errorElement:<Error/>
    },
])