import { MotionConfig, motion } from "framer-motion";

interface AnimatedHamburgerButtonProps {
  onClick: () => void;
  isActive: boolean;
}

const AnimatedHamburgerButton = ({
  onClick,
  isActive,
}: AnimatedHamburgerButtonProps) => {
  // const [active, setActive] = useState(false);

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isActive ? "open" : "closed"}
        onClick={onClick}
        className="relative z-50 h-10 w-10 rounded-full bg-transparent transition-colors hover:bg-secondary-500"
      >
        <motion.span
          variants={VARIANTS.top}
          className={
            isActive
              ? "absolute h-[3px] w-5 bg-primary-200"
              : "absolute h-[3px] w-5 bg-accent-400"
          }
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className={
            isActive
              ? "absolute h-[3px] w-5 bg-primary-200"
              : "absolute h-[3px] w-5 bg-accent-400"
          }
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className={
            isActive
              ? "absolute h-[3px] w-2 bg-primary-200"
              : "absolute h-[3px] w-2 bg-accent-400"
          }
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 6px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 6px)",
    },
  },
};

export default AnimatedHamburgerButton;
