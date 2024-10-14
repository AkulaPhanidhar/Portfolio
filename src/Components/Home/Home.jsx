import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 10, duration: 1 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div className="home">
        <motion.h1
          className="homeTitle"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          Phanidhar Akula
        </motion.h1>
      </div>
    </>
  );
};

export default Home;
