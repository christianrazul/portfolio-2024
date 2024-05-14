import { ReactNode } from "react";
import { HeroSection } from "./components/HeroSection";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-16 py-4">
      <h1 className="text-2xl font-bold">Christian Razul</h1>
      <ul className="flex gap-8 text-lg">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

interface SkillButtonProps {
  children: ReactNode;
}

const SkillButton = ({ children }: SkillButtonProps) => {
  return (
    <button className="flex gap-2 rounded-md bg-secondary-300 px-2 py-1 font-satoshi text-accent-400">
      {children}
    </button>
  );
};

const AboutSection = () => {
  return (
    <section className="flex h-full w-3/4 flex-col justify-center gap-8">
      <h1 className="text-6xl font-bold leading-extratight">
        A little bit about me
      </h1>
      <div className="flex gap-8">
        <div className="flex w-2/3 flex-col gap-8">
          <p className="text-left font-satoshi text-lg leading-relaxed">
            Hi! I'm Chan, a passionate Web Developer based in Davao City,
            Philippines. I'm a recent Computer Science graduate but forever a
            student of the industry. I specialize in the frontend, primarily
            ReactJS and TypeScript, but love building with whatever tools are
            right for the job.
          </p>
          <p className="text-left font-satoshi text-lg leading-relaxed">
            Currently, I am seeking opportunities to grow as a developer with a
            dynamic team that values creativity, strategic innovation, and a
            commitment to excellence. I am eager to contribute to projects that
            challenge my skills and allow me to grow alongside like-minded
            professionals in a supportive and forward-thinking environment.
          </p>
          <p className="text-left font-satoshi text-lg leading-relaxed">
            Outside of work, you'll find me playing basketball or inside a video
            game. Tell me a game you love because I'm always down for a good
            gaming session! But anyway, whether it's front-end aesthetics or
            robust back-end systems, I create solutions that not only work well
            but also delight users. Let's connect.
          </p>
        </div>
        <div className="flex w-1/3 flex-col gap-6">
          <div className="flex flex-col gap-4">
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
          </div>
          <div className="flex flex-col gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="flex h-full w-3/4 flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold text-accent-100">
          Got a project in mind?
        </h3>
        <h1 className="text-9xl font-bold leading-extratight">GET IN TOUCH</h1>
      </div>
    </section>
  );
};

const ProjectSection = () => {
  return (
    <section className="flex h-full w-3/4 flex-col justify-center gap-8">
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

const Footer = () => {
  return (
    <footer className="flex h-full w-2/3 flex-col gap-8 py-8">
      <div className="flex w-full gap-8">
        <div className="w-3/5">
          <h2 className="text-xl font-bold text-accent-300">NAVIGATION</h2>

          <Separator className="mt-1 bg-secondary-400" />
          <ul className="mt-2 font-satoshi">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="w-1/5">
          <h2 className="text-xl font-bold text-accent-300">SOCIALS</h2>
          <Separator className="mt-1 bg-secondary-400" />
          <ul className="mt-2 font-satoshi">
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="w-1/5">
          <h2 className="text-xl font-bold text-accent-300">RESOURCES</h2>
          <Separator className="mt-1 bg-secondary-400" />
          <ul className="mt-2 font-satoshi">
            <li>Pillarstack</li>
            <li>Figma Community</li>
          </ul>
        </div>
      </div>
      <h1 className="text-2xl font-bold">© 2024 CHRISTIAN RAZUL</h1>
    </footer>
  );
};

function App() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-16 font-overused text-accent-400 2xl:px-12 3xl:px-[500px]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
