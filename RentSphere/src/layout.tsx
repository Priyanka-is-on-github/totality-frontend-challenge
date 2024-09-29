import Footer from "./_components/Footer.tsx";

import Navbar from "./_components/navbar/Navbar.tsx";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-4 border-green-700  h-screen">
      <Navbar />

      <main className=" border-4 border-yellow-500 h-[50%]">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
