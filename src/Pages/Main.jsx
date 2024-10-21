import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import "./Main.css";
import { ThemeContext } from "../Context/ThemeContext";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Playground from "../Components/Playground/Playground";
import Contact from "../Components/Contact/Contact";
import { AiFillHome } from "react-icons/ai";
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { motion } from "framer-motion";

const nameVariants = {
  hidden: { opacity: 0, y: 100, scaleY: 2.5 },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 2.5,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const buttonVariants = {
  hidden: { rotate: -180, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  hover: { scale: 1.15, y: -5 },
  tap: { scale: 0.9 },
};

const darkModeVariants = {
  hidden: { rotate: 180, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  hover: { scale: 1.15, y: -5 },
  tap: { scale: 0.9 },
};

const Main = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, [setTheme]);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const playgroundRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const smoothScroll = (target) => {
    const elementPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = elementPosition - startPosition;
    const duration = 1000;
    let startTime = null;

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const scrollToSection = (sectionRef) => smoothScroll(sectionRef.current);

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, options);

    const sections = [homeRef, aboutRef, playgroundRef, contactRef];
    sections.forEach(
      (sectionRef) => sectionRef.current && observer.observe(sectionRef.current)
    );

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset + window.innerHeight / 2;
      const playgroundTop =
        playgroundRef.current.getBoundingClientRect().top + window.pageYOffset;
      const playgroundBottom =
        playgroundTop + playgroundRef.current.offsetHeight;

      if (scrollPosition > playgroundTop && scrollPosition < playgroundBottom) {
        setActiveSection("Playground");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach(
        (sectionRef) =>
          sectionRef.current && observer.unobserve(sectionRef.current)
      );
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main">
      <div className="homeBackgroundWrapper">
        <motion.p
          className="homeBackgroundName"
          variants={nameVariants}
          initial="hidden"
          animate="visible"
        >
          Phanidhar
        </motion.p>
      </div>

      <motion.button
        className="homeButton"
        id="homeButton"
        onClick={() => smoothScroll(document.documentElement)}
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
      >
        <AiFillHome size={"25px"} />
      </motion.button>

      <motion.button
        className="darkModeButton"
        onClick={toggleTheme}
        variants={darkModeVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
      >
        {theme === "light" ? (
          <FaMoon size={"25px"} />
        ) : (
          <IoSunny size={"25px"} />
        )}
      </motion.button>

      <div className="navbarContainer">
        <Navbar
          activeSection={activeSection}
          scrollToAbout={() => scrollToSection(aboutRef)}
          scrollToPlayground={() => scrollToSection(playgroundRef)}
          scrollToContact={() => scrollToSection(contactRef)}
        />
      </div>

      <div ref={homeRef} id="Home">
        <Home />
      </div>

      <div ref={aboutRef} className="section" id="About">
        <About />
      </div>

      <div ref={playgroundRef} className="section" id="Playground">
        <Playground />
      </div>

      <div ref={contactRef} className="section" id="Contact">
        <Contact />
      </div>
    </div>
  );
};

export default Main;
