import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

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

function SidebarRoutes() {
  const { pathname } = useLocation();
  return (
    <div className="flex  flex-col w-full  ">
      {navLinks.map(
        (item: Navlinks): ReactNode => (
          <Link
            key={item.name}
            to={item.link}
            style={{ textDecoration: "none" }}
          >
            <div
              className={`boxcontainer ${
                pathname === item.link ? "active" : ""
              } flex item-center text-center py-4 font-bold text-slate-600 text-2xl pl-6 transition-all 
                hover:bg-sky-200/20 hover:text-sky-700 `}
            >
              <span>{item.name}</span>
            </div>
          </Link>
        )
      )}
    </div>
  );
}

export default SidebarRoutes;
