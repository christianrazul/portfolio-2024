import ContactForm from "@/components/Contactpage/ContactForm";

const ContactHeroSection = () => {
  return (
    <section className="flex h-full w-3/4 items-center justify-center gap-16">
      <h1 className="text-8xl font-bold">
        SAY NO MORE. LET'S BRING YOUR PROJECT TO LIFE.
      </h1>
    </section>
  );
};

const ContactPage = () => {
  return (
    <>
      <ContactHeroSection />
      <ContactForm />
    </>
  );
};

export default ContactPage;
