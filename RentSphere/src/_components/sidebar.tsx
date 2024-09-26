import Logo from "./Logo";
import SidebarRoutes from "./SidebarRoutes";

const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto  ">
      <div className="p-6 flex gap-x-2 ">
      <img src="src/assets/home.png" alt="home" />
        <Logo />
      </div>

      <div className="flex flex-col w-full ">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;