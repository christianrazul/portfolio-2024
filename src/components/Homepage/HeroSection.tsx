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
      className="flex h-full w-3/4 items-center justify-center gap-16"
      id="home"
    >
      <DottedBackground />
      <div className="flex flex-col gap-8">
        <motion.h1
          className="text-6xl font-bold leading-extratight"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Front-end React Developer
        </motion.h1>
        <motion.p
          className="font-satoshi text-xl leading-relaxed"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Hi, I'm Christian Razul. I'm a freelance Front-end Developer based in
          Davao City, Philippines.
        </motion.p>

        <motion.div
          className="flex gap-8"
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
      <div className="relative w-1/2 overflow-hidden">
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
    </section>
  );
};
