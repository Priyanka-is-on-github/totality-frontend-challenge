import Footer from "./_components/Footer.tsx";

import Navbar from "./_components/navbar/Navbar.tsx";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" ">
      <Navbar />

      <main className=" ">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
