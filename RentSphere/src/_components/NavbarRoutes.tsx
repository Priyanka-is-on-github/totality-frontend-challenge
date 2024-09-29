import { ReactNode, useContext } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import Logo from "./Logo";
import { CartItemsContext } from "../utils/Context";

type Navlinks = {
  name: string;
  link: string;
};
const navLinks: Navlinks[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/About",
  },
  {
    name: "Services",
    link: "/Services",
  },
  {
    name: "Properties",
    link: "/Properties",
  },

  {
    name: "Contact",
    link: "/Contact",
  },
];

function Navbar() {
  const { cartItems } = useContext(CartItemsContext);
  const { pathname } = useLocation();
  return (
    <>
      <div className=" h-full  flex items-center   w-[80%] m-auto   md:justify-between ">
        <div className="   hidden md:flex">
          <img src="src/assets/home.png" alt="home" />

          <div className="p-2">
            <Logo />
          </div>
        </div>

        <div className=" gap-x-2  items-center   hidden md:flex ">
          {navLinks.map(
            (item: Navlinks): ReactNode => (
              <Link
                key={item.name}
                to={item.link}
                style={{ textDecoration: "none" }}
              >
                <div
                  className={`flex font-bold item-center gap-x-2 text-slate-500 text-smfont-[500] pl-6 transition-all 
                  hover:text-sky-700 bg-sky-200/20${
                    pathname === item.link
                      ? "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700 border-r-4  border-sky-700"
                      : ""
                  }`}
                >
                  <span>{item.name}</span>
                </div>
              </Link>
            )
          )}
        </div>

        <div className=" flex gap-x-8 ">
          <Link to="/Cart">
            <button>
              <h4
                className={`flex font-bold item-center gap-x-2 text-slate-500 text-lg pl-6 transition-all 
                  hover:text-sky-700 bg-sky-200/20${
                    pathname === "/Cart"
                      ? "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700  border-r-4  border-sky-700"
                      : ""
                  }`}
              >
                <span className="mr-2 text-sm bg-sky-700 text-white p-2 rounded-full">
                  {cartItems.length}
                </span>
                Cart
              </h4>
            </button>
          </Link>

          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
        </div>
      </div>
    </>
  );
}

export default Navbar;
