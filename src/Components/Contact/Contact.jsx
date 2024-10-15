import React, { useState, useEffect } from "react";
import "./Contact.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { RxArrowTopRight } from "react-icons/rx";
import { LuFigma } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import { BiSolidCopy } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import Resume from "./../../PDF/Resume.pdf";

const Contact = () => {
  const [copyButtonText, setCopyButtonText] = useState("Copy Email");
  const controls = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const isMobile = window.innerWidth < 768;

  const fadeInUpDesktop = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const fadeInUpMobile = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const chosenFadeInUp = isMobile ? fadeInUpMobile : fadeInUpDesktop;

  const fadeInDownDesktop = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const fadeInDownMobile = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const chosenFadeInDown = isMobile ? fadeInDownMobile : fadeInDownDesktop;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("akulaphanidhar03@gmail.com");
    setCopyButtonText("Copied!");
    setTimeout(() => {
      setCopyButtonText("Copy Email");
    }, 2000);
  };

  return (
    <>
      <div className="contact">
        <div className="contactContainer" ref={ref}>
          <motion.p
            className="contactText"
            variants={chosenFadeInUp}
            initial="hidden"
            animate={controls}
          >
            Let's shake hands
            <FaHandshakeSimple
              size={"18px"}
              style={{ color: "var(--secondary-color)" }}
            />
          </motion.p>

          <motion.p
            className="mail"
            variants={chosenFadeInUp}
            initial="hidden"
            animate={controls}
          >
            akulaphanidhar03@gmail.com
          </motion.p>

          <motion.div
            className="copyEmailButtonContainer"
            variants={chosenFadeInUp}
            initial="hidden"
            animate={controls}
          >
            <button className="copyEmailButton" onClick={handleCopyEmail}>
              {copyButtonText === "Copy Email" ? (
                <BiSolidCopy size={isMobile ? "12px" : "15px"} />
              ) : (
                <FaCheck size={isMobile ? "12px" : "15px"} />
              )}
              {copyButtonText}
            </button>
          </motion.div>

          <br />

          <motion.p
            className="contactText"
            id="contactText"
            variants={chosenFadeInUp}
            initial="hidden"
            animate={controls}
          >
            Are you interested in a long-term relationship?
            <a href={Resume} download className="cv">
              Download my CV
            </a>
          </motion.p>

          <br />
          {!isMobile && <br />}

          <motion.div
            className="contactLinkContainer"
            variants={chosenFadeInDown}
            initial="hidden"
            animate={controls}
          >
            <Link
              to={"https://www.linkedin.com/in/akulaphanidhar"}
              target="_blank"
              className="link"
            >
              <div className="contactLinkBox" id="contactLinkBox1">
                <FaLinkedinIn size={"25px"} />
                <p className="contactLinkText">Linkedin</p>
                <br />
                <RxArrowTopRight size={"30px"} className="arrowIcon" />
              </div>
            </Link>
            <Link
              to={"https://github.com/AkulaPhanidhar"}
              target="_blank"
              className="link"
            >
              <div className="contactLinkBox" id="contactLinkBox2">
                <FaGithub size={"25px"} />
                <p className="contactLinkText">Github</p>
                <br />
                <RxArrowTopRight size={"30px"} className="arrowIcon" />
              </div>
            </Link>
          </motion.div>

          <motion.div
            className="contactLinkContainer"
            style={{ marginTop: "10px" }}
            variants={chosenFadeInUp}
            initial="hidden"
            animate={controls}
          >
            <Link
              to={"https://www.figma.com/@akulaphanidhar"}
              target="_blank"
              className="link"
            >
              <div className="contactLinkBox" id="contactLinkBox3">
                <LuFigma size={"25px"} />
                <p className="contactLinkText">Figma</p>
                <br />
                <RxArrowTopRight size={"30px"} className="arrowIcon" />
              </div>
            </Link>
            <Link
              to={"https://leetcode.com/u/AkulaPhanidhar/"}
              target="_blank"
              className="link"
            >
              <div className="contactLinkBox" id="contactLinkBox4">
                <SiLeetcode size={"25px"} />
                <p className="contactLinkText">LeetCode</p>
                <br />
                <RxArrowTopRight size={"30px"} className="arrowIcon" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
