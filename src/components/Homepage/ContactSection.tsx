import { Link } from "react-router-dom";

export const ContactSection = () => {
  return (
    <section
      className="flex h-full w-3/4 flex-col items-center justify-center gap-8"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold text-accent-100">
          Got a project in mind?
        </h3>
        <Link
          to="/contact"
          className="text-9xl font-bold leading-extratight hover:underline"
        >
          GET IN TOUCH
        </Link>
      </div>
    </section>
  );
};
