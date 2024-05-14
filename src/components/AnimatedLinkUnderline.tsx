import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const underlineVariants = {
  hidden: { width: 0 },
  visible: { width: "100%", transition: { duration: 0.3 } },
};

const AnimatedLinkUnderline = ({
  to,
  children,
  className,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div className="relative inline-block">
      <HashLink to={to} className={"relative block " + className}>
        {children}
        <motion.span
          className="absolute bottom-0 left-0 h-1 bg-black"
          variants={underlineVariants}
          initial="visible"
          whileHover="visible"
        />
        <span className="absolute bottom-0 left-0 h-2 w-full bg-black hover:w-0"></span>
      </HashLink>
    </motion.div>
  );
};

export default AnimatedLinkUnderline;
