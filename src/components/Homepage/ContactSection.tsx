import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { GridBackground } from "../GridBackground";

export const ContactSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      scale: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  return (
    <motion.section
      className="relative my-20 flex h-full w-5/6 flex-col items-center justify-center gap-8 lg:w-3/4"
      id="contact"
      ref={ref}
      variants={sectionVariants}
      animate={controls}
      initial="hidden"
    >
      <GridBackground />
      <div className="z-10 flex flex-col items-center justify-center">
        <h3 className="text-xl font-bold text-accent-100 lg:text-2xl">
          Got a project in mind?
        </h3>
        <Link
          to="/contact"
          className="text-5xl font-bold leading-extratight transition-all ease-out hover:text-accent-200 hover:underline lg:text-8xl xl:text-9xl"
        >
          GET IN TOUCH
        </Link>
      </div>
    </motion.section>
  );
};
