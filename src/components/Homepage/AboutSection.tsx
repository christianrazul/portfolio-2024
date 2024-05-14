import { SkillButton } from "../SkillButton";

export const AboutSection = () => {
  return (
    <section
      className="flex h-full w-3/4 flex-col justify-center gap-8"
      id="about"
    >
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
