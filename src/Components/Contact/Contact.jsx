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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("akulaphanidhar03@gmail.com");
    setCopyButtonText("Copied");
    setTimeout(() => {
      setCopyButtonText("Copy Email");
    }, 2000);
  };

  const isMobile = window.innerWidth < 768;

  return (
    <>
      <div className="contact">
        <div className="contactLeftContainer" ref={ref}>
          <motion.p
            className="contactText"
            variants={fadeInUp}
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
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            akulaphanidhar03@gmail.com
          </motion.p>

          <motion.div
            className="copyEmailButtonContainer"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            <button className="copyEmailButton" onClick={handleCopyEmail}>
              <BiSolidCopy size={"15px"} />
              {copyButtonText}
            </button>
          </motion.div>

          <br />

          <motion.p
            className="contactText"
            id="contactText"
            variants={fadeInUp}
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
            className="heroLinkContainer"
            variants={fadeInDown}
            initial="hidden"
            animate={controls}
          >
            <Link
              to={"https://www.linkedin.com/in/akulaphanidhar"}
              target="_blank"
              className="link"
            >
              <div className="heroLinkBox" id="heroLinkBox1">
                <FaLinkedinIn size={"25px"} className="heroLinkIcon" />
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
              <div className="heroLinkBox" id="heroLinkBox2">
                <FaGithub size={"25px"} className="heroLinkIcon" />
                <p className="contactLinkText">Github</p>
                <br />
                <RxArrowTopRight size={"30px"} className="arrowIcon" />
              </div>
            </Link>
          </motion.div>

          <motion.div
            className="heroLinkContainer"
            style={{ marginTop: "10px" }}
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            <Link
              to={"https://www.figma.com/@akulaphanidhar"}
              target="_blank"
              className="link"
            >
              <div className="heroLinkBox" id="heroLinkBox3">
                <LuFigma size={"25px"} className="heroLinkIcon" />
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
              <div className="heroLinkBox" id="heroLinkBox4">
                <SiLeetcode size={"25px"} className="heroLinkIcon" />
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
