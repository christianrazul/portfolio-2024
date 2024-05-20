import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedHamburgerButton from "./HamburgerButton";
import { HashLink } from "react-router-hash-link";

const navLinks = [
  { title: "HOME", to: "/#home" },
  { title: "ABOUT", to: "/#about" },
  { title: "PROJECTS", to: "/#projects" },
  { title: "CONTACT", to: "/contact" },
];

const offsetScroll = (el: HTMLElement) => {
  const offset = 35; // Set your desired offset value here
  const elementPosition = el.offsetTop;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth", // Optional: Use 'auto' to keep the instant scroll
  });
};

const menuVariants = {
  initial: {
    scaleY: "0%",
  },
  animate: {
    scaleY: "100%",
    transition: { duration: 0.3, ease: [0.25, 0.75, 0.5, 1.25] },
  },
  exit: {
    scaleY: "0%",
    transition: { duration: 0.3, ease: [0.25, 0.75, 0.5, 1.25] },
  },
};

const navLinkContainerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: 1,
      delay: 0.3,
    },
  },
};

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const NavMenu = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleMenu = () => {
    setOpenNav((prevOpen) => !prevOpen);
  };
  return (
    <div className="fixed right-8 top-4 z-50 lg:hidden">
      <AnimatedHamburgerButton onClick={toggleMenu} isActive={openNav} />
      <AnimatePresence mode="wait">
        {openNav && (
          <motion.div
            className="fixed bottom-0 left-0 h-screen w-full origin-top bg-accent-400 px-8 py-4 text-secondary-500"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Container */}
            <div className="flex h-full flex-col">
              {/* Close menu */}
              <motion.div className="flex justify-between">
                <img
                  src="/assets/portfolio-logo.svg"
                  alt="Portfolio Logo"
                  className="h-8 w-8"
                />
              </motion.div>
              {/* NavLinks */}
              <motion.div
                variants={navLinkContainerVars}
                className="flex h-full flex-col justify-center gap-y-2 lg:hidden"
                initial="initial"
                animate="open"
                exit="initial"
              >
                {navLinks.map((link, index) => {
                  return (
                    <div key={index} className="overflow-hidden">
                      <motion.div
                        className="font-overused text-6xl font-bold"
                        variants={mobileLinkVars}
                      >
                        <HashLink
                          smooth
                          scroll={offsetScroll}
                          to={link.to}
                          onClick={toggleMenu}
                        >
                          {link.title}
                        </HashLink>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
              {/* Menu Footer */}
              <div className="flex h-28 flex-col gap-2">
                <div>
                  <h3 className="font-bold">EMAIL ADDRESS</h3>
                  <p className="font-satoshi font-medium text-primary-200">
                    razulchristian@gmail.com
                  </p>
                </div>
                <ul className="flex gap-x-4">
                  <li className="rounded-full bg-accent-300 px-4 py-1">
                    LINKEDIN
                  </li>
                  <li className="rounded-full bg-accent-300 px-4 py-1">
                    GITHUB
                  </li>
                  <li className="rounded-full bg-accent-300 px-4 py-1">
                    FACEBOOK
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMenu;
