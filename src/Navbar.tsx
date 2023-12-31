import ArrowRight from "./ArrowRight";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { animationStart, reveal } from "./utils/animation";

function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: animationStart }}
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{
          ease: "easeIn",
          type: "tween",
          staggerChildren: 0.1,
          duration: 0.5,
          delayChildren: animationStart + 0.5,
        }}
        className="w-full flex items-center justify-around h-80px top-0 bg-white z-100"
      >
        <motion.div variants={reveal}>
          <Logo />
        </motion.div>
        <div className="flex gap-100px items-center <md:hidden">
          <motion.span variants={reveal} className="cursor-pointer text-20px">
            Skill tree
          </motion.span>
          <motion.span variants={reveal} className="cursor-pointer text-20px">
            Works
          </motion.span>
          <motion.span variants={reveal} className="cursor-pointer text-20px">
            Future
          </motion.span>
        </div>
        <motion.div className="flex gap-5px items-center cursor-pointer">
          <span className="mb-3px">Sign in</span>
          <ArrowRight />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
