import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer className="flex h-full w-2/3 flex-col gap-8 py-8">
      <div className="flex w-full gap-8">
        <div className="w-3/5">
          <h2 className="text-xl font-bold text-accent-300">NAVIGATION</h2>

          <Separator className="mt-1 bg-secondary-400" />
          <ul className="mt-2 font-satoshi">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="w-1/5">
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
        <div className="w-1/5">
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
