"use client";
import { motion } from "framer-motion";

const NavLink = ({ href = "#", children }) => {
  const variants = {
    initial: { x: 0 },
    hovered: { x: "-100%" },
  };
  const transition = {
    duration: 0.3,
    type: "tween",
    ease: "easeInOut",
  };
  return (
    <motion.a
      href={href}
      className=" relative overflow-hidden"
      initial="initial"
      whileHover="hovered"
    >
      <motion.div
        variants={variants}
        transition={transition}
        className=" flex items-center gap-1"
      >
        {children}
      </motion.div>
      <motion.div
        variants={variants}
        transition={transition}
        className="absolute top-0 left-full"
      >
        {children}
      </motion.div>
    </motion.a>
  );
};

export default NavLink;
