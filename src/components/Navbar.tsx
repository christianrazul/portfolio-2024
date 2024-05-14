import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface DrawOutlineButtonProps {
  children: ReactNode;
}

const DrawOutlineButton = ({ children, ...rest }: DrawOutlineButtonProps) => {
  return (
    <button
      {...rest}
      className="duration-[400ms] group relative px-2 py-1 font-satoshi text-accent-400 transition-colors hover:font-medium hover:text-accent-400"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-accent-400 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-accent-400 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-accent-400 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-accent-400 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export const Navbar = () => {
  return (
    <nav className="relative z-10 flex w-full items-center justify-between px-16 py-4">
      <NavLink to="/">
        <h1 className="text-2xl font-bold">Christian Razul</h1>
      </NavLink>
      <ul className="flex gap-4 text-lg">
        <li>
          <NavLink to="/">
            <DrawOutlineButton>Home</DrawOutlineButton>
          </NavLink>
        </li>
        <li>
          <HashLink smooth to="/#about">
            <DrawOutlineButton>About</DrawOutlineButton>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#projects">
            <DrawOutlineButton>Projects</DrawOutlineButton>
          </HashLink>
        </li>
        <li>
          <NavLink to="/contact">
            <DrawOutlineButton>Contact</DrawOutlineButton>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
