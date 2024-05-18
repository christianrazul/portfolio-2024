import { HashLink } from "react-router-hash-link";
import { Separator } from "./ui/separator";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative z-10 flex h-full w-5/6 flex-col gap-8 py-8 lg:w-2/3">
      <div className="flex w-full flex-wrap gap-4 lg:flex-nowrap lg:gap-8">
        {/* Navigation */}
        <div className="w:full flex-grow lg:w-3/5">
          <h2 className="text-xl font-bold text-accent-300">NAVIGATION</h2>
          <Separator className="mt-1 bg-secondary-400" />
          <ul className="mt-2 font-satoshi">
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
        </div>

        {/* Socials */}
        <div className="w:full flex-grow lg:w-1/5">
          <h2 className="text-xl font-bold text-accent-300">SOCIALS</h2>
          <Separator className="mt-1 bg-secondary-400" />
          <ul className="mt-2 font-satoshi">
            <li>
              <a href="https://www.linkedin.com/in/rcrrazul/" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/christianrazul" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/christianrazul/"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/christianrazul" target="_blank">
                Twitter
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="w-full lg:w-1/5">
          <h2 className="text-xl font-bold text-accent-300">RESOURCES</h2>
          <Separator className="mt-1 bg-secondary-400" />
          <ul className="mt-2 font-satoshi">
            <li>
              <a href="https://www.pillarstack.com/" target="_blank">
                Pillarstack
              </a>
            </li>
            <li>
              <a href="https://www.figma.com/community" target="_blank">
                Figma Community
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="text-2xl font-bold">© 2024 CHRISTIAN RAZUL</h1>
    </footer>
  );
};
