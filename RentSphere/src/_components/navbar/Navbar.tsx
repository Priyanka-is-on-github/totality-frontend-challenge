import MobileSidebar from "../MobileSidebar";
import NavbarRoutes from "../NavbarRoutes";


const Navbar = () => {
  return (
    <div className="p-4 border-b  fixed flex  bg-white shadow-sm  h-[80px]  inset-y-0 w-full  z-10 ">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;