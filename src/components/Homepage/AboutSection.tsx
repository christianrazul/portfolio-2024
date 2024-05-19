import { motion } from "framer-motion";
import { SkillButton } from "../SkillButton";

export const AboutSection = () => {
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

  return (
    <section
      className="my-6 flex h-full w-5/6 flex-col justify-center gap-8 lg:h-1/2 lg:w-3/4"
      id="about"
    >
      <motion.h1
        className="z-10 text-center text-4xl font-bold leading-extratight md:text-left lg:text-6xl"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        A little bit about me
      </motion.h1>
      <div className="flex flex-col gap-8 md:flex-row">
        {/* About me Text */}
        <div className="z-10 flex w-full flex-col gap-6 md:w-2/3 md:gap-8">
          <motion.p
            className="text-md text-left font-satoshi leading-relaxed lg:text-lg"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Hi! I'm Chan, a passionate Web Developer based in Davao City,
            Philippines. I'm a recent Computer Science graduate but forever a
            student of the industry. I specialize in the frontend, primarily
            ReactJS and TypeScript, but love building with whatever tools are
            right for the job.
          </motion.p>
          <motion.p
            className="text-md text-left font-satoshi leading-relaxed lg:text-lg"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Currently, I am seeking opportunities to grow as a developer with a
            dynamic team that values creativity, strategic innovation, and a
            commitment to excellence. I am eager to contribute to projects that
            challenge my skills and allow me to grow alongside like-minded
            professionals in a supportive and forward-thinking environment.
          </motion.p>
          <motion.p
            className="text-md text-left font-satoshi leading-relaxed lg:text-lg"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            Outside of work, you'll find me playing basketball or inside a video
            game. Tell me a game you love because I'm always down for a good
            gaming session! But anyway, whether it's front-end aesthetics or
            robust back-end systems, I create solutions that not only work well
            but also delight users. Let's connect.
          </motion.p>
        </div>
        {/* Skills */}
        <div className="flex w-full flex-col gap-6 md:w-1/3">
          <motion.div
            className="z-10 flex flex-col gap-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <h2 className="text-xl font-bold">
              <i className="fa-solid fa-code mr-2"></i>
              Technical Skills
            </h2>
            <ul className="flex flex-wrap gap-2">
              <li>
                <SkillButton>JavaScript</SkillButton>
              </li>
              <li>
                <SkillButton>TypeScript</SkillButton>
              </li>
              <li>
                <SkillButton>React</SkillButton>
              </li>
              <li>
                <SkillButton>Redux</SkillButton>
              </li>
              <li>
                <SkillButton>NodeJS</SkillButton>
              </li>
              <li>
                <SkillButton>Express</SkillButton>
              </li>
              <li>
                <SkillButton>MongoDB</SkillButton>
              </li>
              <li>
                <SkillButton>Tailwind</SkillButton>
              </li>
              <li>
                <SkillButton>Framer Motion</SkillButton>
              </li>
              <li>
                <SkillButton>HTML</SkillButton>
              </li>
              <li>
                <SkillButton>CSS</SkillButton>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="z-10 flex flex-col gap-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <h2 className="text-xl font-bold">
              <i className="fa-solid fa-wrench mr-2"></i>
              Tools and Technologies
            </h2>
            <ul className="flex flex-wrap gap-2">
              <li>
                <SkillButton>GitHub</SkillButton>
              </li>
              <li>
                <SkillButton>Figma</SkillButton>
              </li>
              <li>
                <SkillButton>Photoshop</SkillButton>
              </li>
              <li>
                <SkillButton>Microsoft Office</SkillButton>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
