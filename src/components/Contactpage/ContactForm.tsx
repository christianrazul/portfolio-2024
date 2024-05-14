import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string().min(2).max(50),
  body: z.string().min(2),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      body: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

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
    <motion.section
      className="relative z-10 flex h-full w-3/4 items-start justify-between gap-16 font-satoshi"
      variants={textVariants}
      initial="hidden"
      animate="visible"
      custom={1}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-3/4 space-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-overused text-xl font-bold">
                  Your Name <span className="text-red-700">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eren Jaeger"
                    {...field}
                    className="h-14 border border-accent-400 text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-overused text-xl font-bold">
                  Email <span className="text-red-700">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="sasageyo.eren@maria.com"
                    {...field}
                    className="h-14 border border-accent-400 text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-overused text-xl font-bold">
                  Subject <span className="text-red-700">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="The topic of this email"
                    {...field}
                    className="h-14 border border-accent-400 text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-overused text-xl font-bold">
                  Body <span className="text-red-700">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="The purpose of this email"
                    {...field}
                    className="h-14 border border-accent-400 text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="lg"
            className="font-satoshi text-xl font-semibold"
          >
            SEND EMAIL <i className="fa-regular fa-paper-plane ml-4"></i>
          </Button>
        </form>
      </Form>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-overused text-xl font-bold">FURTHER ENQUIRIES</h1>
          <a href="mailto:razulchristian@gmail.com" target="_blank">
            razulchristian@gmail.com
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-overused text-xl font-bold">SOCIALS</h1>
          <a href="https://www.linkedin.com/in/rcrrazul/" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/christianrazul" target="_blank">
            GitHub
          </a>
          <a href="https://www.facebook.com/christianrazul/" target="_blank">
            Facebook
          </a>
          <a href="https://twitter.com/christianrazul" target="_blank">
            Twitter
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
