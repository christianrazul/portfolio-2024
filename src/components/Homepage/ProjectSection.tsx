import { Button } from "../ui/button";
import { SkillButton } from "../SkillButton";

export const ProjectSection = () => {
  return (
    <section
      className="flex h-full w-3/4 flex-col justify-center gap-8"
      id="projects"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl font-bold leading-extratight">Projects</h1>
        <p className="text-left font-satoshi text-lg leading-relaxed">
          Check out some of the projects I've been working on recently.
        </p>
      </div>
      <div className="flex w-full flex-col gap-8">
        <div className="flex gap-8">
          <img
            src="/assets/img/cv-architect.webp"
            alt="CV Architect"
            className="h-80 w-1/2 rounded-xl border object-cover shadow-md"
          />
          <div className="flex w-1/2 flex-col gap-4">
            <h3 className="text-xl font-bold">CV Architect</h3>
            <p className="font-satoshi leading-relaxed">
              A resume builder application designed to help users create
              professional-looking CVs with ease. This project is not only a
              tool for job seekers but also serves as my personal learning
              project, where I delve into the depths of React's state
              management, explore the intricacies of the useEffect hook, and
              embrace the synergy of ShadCN and Tailwind CSS for styling.
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
        </div>
        <div className="flex gap-8">
          <img
            src="/assets/img/market-basket.webp"
            alt="Market Basket"
            className="h-80 w-1/2 rounded-xl border object-cover shadow-md"
          />
          <div className="flex w-1/2 flex-col gap-4">
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
        </div>
        <div className="flex gap-8">
          <img
            src="/assets/img/memorycraft.webp"
            alt="MemoryCraft"
            className="h-80 w-1/2 rounded-xl object-cover shadow-md"
          />
          <div className="flex w-1/2 flex-col gap-4">
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
        </div>
        <div className="flex gap-8">
          <img
            src="/assets/img/burger-heaven.webp"
            alt="MemoryCraft"
            className="h-80 w-1/2 rounded-xl object-cover shadow-md"
          />
          <div className="flex w-1/2 flex-col gap-4">
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
                <a href="https://memorycraft.vercel.app/" target="_blank">
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
