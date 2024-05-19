import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import NavMenu from "@/components/NavMenu";

const Layout = () => {
  return (
    <div className="relative mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center gap-6 bg-primary-200 font-overused text-accent-400 lg:gap-28 2xl:gap-24 2xl:px-12 3xl:gap-16">
      <Navbar />
      <NavMenu />

      <Outlet />
      <Toaster />

      <Footer />
    </div>
  );
};

export default Layout;
