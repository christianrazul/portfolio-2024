export const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-16 py-4">
      <h1 className="text-2xl font-bold">Christian Razul</h1>
      <ul className="flex gap-8 text-lg">
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
    </nav>
  );
};
