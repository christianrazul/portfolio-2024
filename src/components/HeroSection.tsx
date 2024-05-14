export const HeroSection = () => {
  return (
    <section className="flex h-full w-3/4 items-center justify-center gap-16">
      <div className="flex flex-col gap-8">
        <h1 className="leading-extratight text-6xl font-bold">
          Front-end React Developer
        </h1>
        <p className="font-satoshi text-xl leading-relaxed">
          Hi, I'm Christian Razul. I'm a freelance Front-end Developer based in
          Davao City, Philippines.
        </p>

        <div className="flex gap-8">
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
        </div>
      </div>
      <div className="w-1/2">
        <img
          src="/assets/profile-picture.webp"
          alt="My picture"
          className="border-secondary-700 rounded-2xl border shadow-lg"
        />
      </div>
    </section>
  );
};
