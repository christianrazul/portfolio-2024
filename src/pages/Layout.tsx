import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-16 font-overused text-accent-400 2xl:px-12 3xl:px-[500px]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
