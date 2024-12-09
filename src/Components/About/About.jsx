import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./About.css";
import universityLogo from "../Images/Miami University.png";

const professions = [
  "Computer Science Engineer",
  "Full Stack Web Developer",
  "UI / UX Designer & Developer",
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const nameVariants = {
    hidden: { opacity: 0, rotateX: 90, scale: 0.8 },
    visible: {
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  const textRevealVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
  };

  const bounceVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        delay: 0.8,
      },
    },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStartTyping(true);
    }, 800);

    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (!startTyping) return;

    const typingTimeout = setTimeout(() => {
      if (isDeleting) {
        setText((prevText) => prevText.substring(0, prevText.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % professions.length);
        }
      } else {
        setText(professions[currentIndex].substring(0, text.length + 1));
        if (text === professions[currentIndex]) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }
    }, 30);

    return () => clearTimeout(typingTimeout);
  }, [text, currentIndex, isDeleting, startTyping]);

  return (
    <>
      <motion.div
        className="about"
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          className="heroLeftTextBox"
          custom={0}
          variants={nameVariants}
        >
          <p className="heroSubText">Hello, it's</p>
          <motion.div className="heroNameContent" variants={nameVariants}>
            <p className="heroTextTop">Phanidhar Akula</p>
            <p className="heroText">Phanidhar Akula</p>
          </motion.div>
          <p className="heroSubText">
            I'm a <span className="animatedHeroSubText">{text}</span>
          </p>
        </motion.div>

        <motion.p
          className="heroDescription"
          custom={1}
          variants={textRevealVariants}
        >
          I am a highly skilled full stack web developer and designer with a
          strong proficiency in technologies such as Python, React JS, and
          JavaScript. In addition to my development expertise, I excel in
          design, utilizing tools like Figma for wireframing, prototyping, and
          creating intuitive user experiences. With a passion for building
          dynamic and scalable web applications, I focus on delivering
          innovative solutions that align with business objectives. I am
          committed to continuous learning, staying current with the latest
          industry trends and best practices, and expanding my skill set in both
          development and design.
        </motion.p>

        <motion.div
          className="universityContainer"
          custom={2}
          variants={bounceVariants}
        >
          <motion.img
            className="universityLogo"
            src={universityLogo}
            alt="University Logo"
          />
          <p className="universityName">Miami University</p>
          <p className="universityDiscription">Masters in Computer Science</p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
