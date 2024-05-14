import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
  return (
    <nav className="relative z-10 flex w-full items-center justify-between px-16 py-4">
      <NavLink to="/">
        <h1 className="text-2xl font-bold">Christian Razul</h1>
      </NavLink>
      <ul className="flex gap-8 text-lg">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <HashLink smooth to="/#about">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#projects">
            Projects
          </HashLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
