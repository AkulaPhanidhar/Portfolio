import React from "react";
import { easeInOut, motion } from "framer-motion";
import "./Navbar.css";

const Navbar = ({
  activeSection,
  scrollToAbout,
  scrollToPlayground,
  scrollToContact,
}) => {
  const links = ["About", "Playground", "Contact"]; // Kept the original order of nav links

  const handleClick = (link) => {
    if (link === "About") scrollToAbout();
    else if (link === "Playground") scrollToPlayground();
    else if (link === "Contact") scrollToContact();
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => {
      let delay = 0;
      if (index === 1) {
        // Playground animates first
        delay = 0.2;
      } else if (index === 0 || index === 2) {
        // About and Contact animate at the same time
        delay = 0.4;
      }

      return {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: easeInOut,
          delay,
        },
      };
    },
  };

  return (
    <motion.div
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50, damping: 10 }}
    >
      <motion.div
        className="navLinkContainer"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {links.map((link, index) => (
          <motion.p
            key={index}
            className={`navLink ${activeSection === link ? "active" : ""}`}
            custom={index}
            variants={linkVariants}
            onClick={() => handleClick(link)}
            whileHover={
              activeSection !== link
                ? {
                    scale: 1.15,
                    y: -5,
                    transition: { duration: 0.2, ease: easeInOut },
                  }
                : {}
            }
            animate={{
              scale: 1,
              y: 0,
              transition: { duration: 0.2, ease: easeInOut },
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.2, ease: easeInOut },
            }}
          >
            {link}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
