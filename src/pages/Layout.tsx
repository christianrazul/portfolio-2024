import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

const Layout = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-28 bg-primary-200 font-overused text-accent-400 2xl:gap-24 2xl:px-12 3xl:gap-16 3xl:px-[500px]">
      <Navbar />
      <Outlet />
      <Toaster />
      <Footer />
    </div>
  );
};

export default Layout;
