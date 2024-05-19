import { Button } from "../ui/button";
import { SkillButton } from "../SkillButton";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Project = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring", // Using a spring type transition
        stiffness: 260, // Spring stiffness
        damping: 20, // Damping for the spring
        mass: 1, // Mass of the element being animated
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="z-10 flex flex-col gap-4 lg:flex-row lg:gap-8"
    >
      {children}
    </motion.div>
  );
};

export default Project;

export const ProjectSection = () => {
  return (
    <section
      className="my-6 flex h-full w-5/6 flex-col items-center justify-center gap-8 lg:h-1/2 lg:w-3/4"
      id="projects"
    >
      {/* Heading and Subheading */}
      <div className="flex w-full flex-col gap-2 lg:gap-4">
        <h1 className="text-center text-4xl font-bold leading-extratight lg:text-left lg:text-6xl">
          Projects
        </h1>
        <p className="text-md text-center font-satoshi leading-relaxed lg:text-left lg:text-lg">
          Check out some of the projects I've been working on recently.
        </p>
      </div>

      {/* Projects Container */}
      <div className="flex w-full flex-col gap-8">
        <Project>
          <img
            src="/assets/img/cv-architect.webp"
            alt="CV Architect"
            className="h-60 rounded-xl border object-cover shadow-md lg:h-80 lg:w-1/2"
          />
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h3 className="text-xl font-bold">CV Architect</h3>
            <p className="font-satoshi leading-relaxed">
              A resume builder application designed to help users create
              professional-looking CVs with ease. This project is not only a
              tool for job seekers but also serves as my personal learning
              project, where I delve into React's state management, explore the
              the useEffect hook, and embrace ShadCN and Tailwind CSS for
              styling.
            </p>
            <div className="flex flex-wrap gap-2">
              <SkillButton>React</SkillButton>
              <SkillButton>TypeScript</SkillButton>
              <SkillButton>Tailwind</SkillButton>
              <SkillButton>ShadCN</SkillButton>
              <SkillButton>Zod</SkillButton>
            </div>
            <div className="mt-auto flex gap-4">
              <Button className="bg-accent-400 font-satoshi">
                <a
                  href="https://github.com/christianrazul/cv-architect"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </Button>
              <Button className="bg-accent-400 font-satoshi">
                <a href="https://cv-architect.vercel.app/" target="_blank">
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </Project>
        <Project>
          <img
            src="/assets/img/market-basket.webp"
            alt="Market Basket"
            className="h-60 rounded-xl border object-cover shadow-md lg:h-80 lg:w-1/2"
          />
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h3 className="text-xl font-bold">Market Basket</h3>
            <p className="font-satoshi leading-relaxed">
              An e-commerce application that helped solidify my skills and
              knowledge of working with external APIs. This also helped me
              understand the power of the Context API and react-router-dom.
            </p>
            <div className="flex flex-wrap gap-2">
              <SkillButton>React</SkillButton>
              <SkillButton>TypeScript</SkillButton>
              <SkillButton>Tailwind</SkillButton>
              <SkillButton>ShadCN</SkillButton>
              <SkillButton>Context</SkillButton>
              <SkillButton>FakeStore API</SkillButton>
              <SkillButton>React-Router-DOM</SkillButton>
            </div>
            <div className="mt-auto flex gap-4">
              <Button className="bg-accent-400 font-satoshi">
                <a
                  href="https://github.com/christianrazul/shoppingcart"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </Button>
              <Button className="bg-accent-400 font-satoshi">
                <a href="https://marketbasket.vercel.app/" target="_blank">
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </Project>
        <Project>
          <img
            src="/assets/img/memorycraft.webp"
            alt="MemoryCraft"
            className="h-60 rounded-xl object-cover shadow-md lg:h-80 lg:w-1/2"
          />
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h3 className="text-xl font-bold">MemoryCraft</h3>
            <p className="font-satoshi leading-relaxed">
              A delightful Minecraft-themed memory challenge game! This project
              started as a fun side venture, a sandbox for me to delve into the
              depths of ReactJS and TailwindCSS. It's not just a game—it's a
              representation of my learning journey.
            </p>
            <div className="flex flex-wrap gap-2">
              <SkillButton>React</SkillButton>
              <SkillButton>JavaScript</SkillButton>
              <SkillButton>Tailwind</SkillButton>
              <SkillButton>React-Router-DOM</SkillButton>
            </div>
            <div className="mt-auto flex gap-4">
              <Button className="bg-accent-400 font-satoshi">
                <a
                  href="https://github.com/christianrazul/memorycraft"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </Button>
              <Button className="bg-accent-400 font-satoshi">
                <a href="https://memorycraft.vercel.app/" target="_blank">
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </Project>
        <Project>
          <img
            src="/assets/img/burger-heaven.webp"
            alt="MemoryCraft"
            className="h-60 rounded-xl object-cover shadow-md lg:h-80 lg:w-1/2"
          />
          <div className=" flex flex-col gap-4 lg:w-1/2">
            <h3 className="text-xl font-bold">Burger Heaven</h3>
            <p className="font-satoshi leading-relaxed">
              A dynamic landing page for a fictional restaurant, built using
              React and enhanced with Framer Motion to master interactive
              animations. This project focuses on creating engaging, motion-rich
              user experiences to attract and delight visitors.
            </p>
            <div className="flex flex-wrap gap-2">
              <SkillButton>React</SkillButton>
              <SkillButton>TypeScript</SkillButton>
              <SkillButton>Tailwind</SkillButton>
              <SkillButton>Framer Motion</SkillButton>
              <SkillButton>React-Router-DOM</SkillButton>
            </div>
            <div className="mt-auto flex gap-4">
              <Button className="bg-accent-400 font-satoshi">
                <a
                  href="https://github.com/christianrazul/burger-heaven"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </Button>
              <Button className="bg-accent-400 font-satoshi">
                <a
                  href="https://burger-heaven-beta.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </Project>
      </div>
    </section>
  );
};
