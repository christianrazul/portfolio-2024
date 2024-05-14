import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const AnimatedLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative flex h-6 items-center overflow-hidden">
      <motion.div
        className="flex items-center"
        initial={{ y: 0 }}
        whileHover={{ y: "-100%" }}
        transition={{ duration: 0.2 }}
      >
        <HashLink to={to} className="block">
          {children}
        </HashLink>
      </motion.div>
      <motion.div
        className="flex items-center"
        initial={{ y: "100%" }}
        whileHover={{ y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <HashLink to={to} className="block">
          {children}
        </HashLink>
      </motion.div>
    </div>
  );
};

export default AnimatedLink;
