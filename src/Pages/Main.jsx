import React, { useRef, useState, useEffect, useContext } from "react";
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

const Main = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const playgroundRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("");

  const smoothScroll = (target) => {
    const elementPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = elementPosition - startPosition;
    const duration = 1000;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  const scrollToAbout = () => smoothScroll(aboutRef.current);
  const scrollToPlayground = () => smoothScroll(playgroundRef.current);
  const scrollToContact = () => smoothScroll(contactRef.current);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    if (homeRef.current) observer.observe(homeRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (playgroundRef.current) observer.observe(playgroundRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

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
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (playgroundRef.current) observer.unobserve(playgroundRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="main">
        <div className="homeBackgroundWrapper">
          <motion.p
            className="homeBackgroundName"
            initial={{ opacity: 0, y: 100, scaleY: 2.5 }}
            animate={{ opacity: 1, y: 0, scaleY: 2.5 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Phanidhar
          </motion.p>
        </div>

        <motion.button
          className="darkModeButton"
          onClick={toggleTheme}
          whileHover={{ scale: 1.15, y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {theme === "light" ? (
            <motion.div
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <FaMoon
                size={"25px"}
                style={{ color: "var(--secondary-color)" }}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <IoSunny
                size={"25px"}
                style={{ color: "var(--secondary-color)" }}
              />
            </motion.div>
          )}
        </motion.button>

        <motion.button
          className="darkModeButton"
          id="darkModeButton"
          onClick={() => smoothScroll(document.documentElement)}
          whileHover={{ scale: 1.15, y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <AiFillHome
              size={"25px"}
              style={{ color: "var(--secondary-color)" }}
            />
          </motion.div>
        </motion.button>

        <div className="navbarContainer">
          <Navbar
            activeSection={activeSection}
            scrollToAbout={scrollToAbout}
            scrollToPlayground={scrollToPlayground}
            scrollToContact={scrollToContact}
          />
        </div>

        <div ref={homeRef} id="Home">
          <Home />
        </div>

        <div ref={aboutRef} id="About" style={{ zIndex: "1" }}>
          <About />
        </div>

        <div ref={playgroundRef} id="Playground" style={{ zIndex: "1" }}>
          <Playground />
        </div>

        <div ref={contactRef} id="Contact" style={{ zIndex: "1" }}>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Main;
