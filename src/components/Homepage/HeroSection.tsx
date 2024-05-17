import { motion } from "framer-motion";
import { DottedBackground } from "../DottedBackground";

export const HeroSection = () => {
  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.8,
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    }),
  };

  const curtainVariants = {
    hidden: { height: "100%" },
    visible: {
      height: "0%",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="flex h-full w-5/6 flex-col items-center justify-center gap-8 lg:h-1/2 lg:w-3/4 lg:flex-row lg:gap-16"
      id="home"
    >
      {/* Hero Text */}
      <div className="relative z-10 order-2 flex flex-col items-center gap-8 lg:order-1 lg:items-start">
        <motion.h1
          className="w-3/4 text-center text-6xl font-bold leading-extratight lg:w-full lg:text-left lg:text-6xl"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Front-end React Developer
        </motion.h1>
        <motion.p
          className="w-3/4 text-center font-satoshi text-xl leading-relaxed lg:w-10/12 lg:text-left"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Hi, I'm Christian Razul. I can help you transform your Concept to a
          Seamless User Experience.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex justify-center gap-8 lg:justify-start"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <a
            href="https://www.linkedin.com/in/rcrrazul/"
            target="_blank"
            className="font-satoshi text-lg font-medium"
          >
            <i className="fa-brands fa-linkedin mr-1"></i>
            LinkedIn
          </a>
          <a
            href="https://github.com/christianrazul"
            target="_blank"
            className="font-satoshi text-lg font-medium"
          >
            <i className="fa-brands fa-square-github mr-1"></i>
            GitHub
          </a>
        </motion.div>
      </div>
      {/* Picture */}
      <div className="relative z-10 order-1 min-w-60 max-w-80 overflow-hidden lg:order-2">
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-primary-200"
          initial="hidden"
          animate="visible"
          variants={curtainVariants}
        ></motion.div>
        <img
          src="/assets/profile-picture.webp"
          alt="My picture"
          className="rounded-2xl border border-secondary-700 shadow-lg"
        />
      </div>
      <DottedBackground />
    </section>
  );
};
