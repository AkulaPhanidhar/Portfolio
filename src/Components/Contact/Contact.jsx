import React, { useState, useEffect } from "react";
import "./Contact.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import {
  FaHandshakeSimple,
  FaLinkedinIn,
  FaGithub,
  FaCheck,
} from "react-icons/fa6";
import { RxArrowTopRight } from "react-icons/rx";
import { LuFigma } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import { BiSolidCopy } from "react-icons/bi";
import { Link } from "react-router-dom";
import Resume from "../PDF/Resume.pdf";

const Contact = () => {
  const [copyButtonText, setCopyButtonText] = useState("Copy Email");
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleCopyEmail = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText("akulaphanidhar03@gmail.com")
        .then(() => {
          setCopyButtonText("Copied!");
          setTimeout(() => setCopyButtonText("Copy Email"), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = "akulaphanidhar03@gmail.com";
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand("copy");
        setCopyButtonText("Copied!");
        setTimeout(() => setCopyButtonText("Copy Email"), 2000);
      } catch (err) {
        console.error("Fallback: Could not copy text", err);
      }

      document.body.removeChild(textArea);
    }
  };

  const isiPad = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      rotateX: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99],
        damping: 20,
        stiffness: 300,
      },
    },
  };

  const contactLinkAnimation = (x, y) => ({
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  });

  const contactLinks = [
    {
      to: "https://www.linkedin.com/in/akulaphanidhar",
      icon: (
        <FaLinkedinIn size={isMobile ? "20px" : isiPad ? "22px" : "25px"} />
      ),
      label: "Linkedin",
      id: 1,
    },
    {
      to: "https://github.com/AkulaPhanidhar",
      icon: <FaGithub size={isMobile ? "20px" : isiPad ? "22px" : "25px"} />,
      label: "Github",
      id: 2,
    },
    {
      to: "https://www.figma.com/@akulaphanidhar",
      icon: <LuFigma size={isMobile ? "20px" : isiPad ? "22px" : "25px"} />,
      label: "Figma",
      id: 3,
    },
    {
      to: "https://leetcode.com/u/AkulaPhanidhar/",
      icon: <SiLeetcode size={isMobile ? "20px" : isiPad ? "22px" : "25px"} />,
      label: "LeetCode",
      id: 4,
    },
  ];

  return (
    <div className="contact">
      <div className="contactContainer" ref={ref}>
        <motion.div
          className="contactTextContainer"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
        >
          <p className="contactText">
            Let's shake hands
            <FaHandshakeSimple
              size={isMobile ? "14px" : isiPad ? "16px" : "18px"}
            />
          </p>
          <p className="mail">akulaphanidhar03@gmail.com</p>
          <div className="copyEmailButtonContainer">
            <button className="copyEmailButton" onClick={handleCopyEmail}>
              {copyButtonText === "Copy Email" ? (
                <BiSolidCopy
                  size={isMobile ? "12px" : isiPad ? "14px" : "16px"}
                />
              ) : (
                <FaCheck size={isMobile ? "12px" : isiPad ? "14px" : "16px"} />
              )}

              {copyButtonText}
            </button>
          </div>
          <br />
          <p className="contactText" id="contactText">
            Are you interested in a long-term relationship?
            <a href={Resume} download="Resume.pdf" className="cv">
              Download my CV
            </a>
          </p>
        </motion.div>

        <div className="contactLinkContainer" id="contactLinkContainer">
          {contactLinks.slice(0, 2).map(({ to, icon, label, id }, index) => (
            <motion.div
              key={id}
              variants={contactLinkAnimation(index % 2 === 0 ? -15 : 15, -15)}
              animate={controls}
              initial="hidden"
            >
              <Link to={to} target="_blank" className="link">
                <div className="contactLinkBox" id={`contactLinkBox${id}`}>
                  {icon}
                  <p className="contactLinkText">{label}</p>
                  <br />
                  <RxArrowTopRight
                    size={isMobile ? "22px" : isiPad ? "26px" : "30px"}
                    className="arrowIcon"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="contactLinkContainer">
          {contactLinks.slice(2).map(({ to, icon, label, id }, index) => (
            <motion.div
              key={id}
              variants={contactLinkAnimation(index % 2 === 0 ? -15 : 15, 15)}
              animate={controls}
              initial="hidden"
            >
              <Link to={to} target="_blank" className="link">
                <div className="contactLinkBox" id={`contactLinkBox${id}`}>
                  {icon}
                  <p className="contactLinkText">{label}</p>
                  <br />
                  <RxArrowTopRight
                    size={isMobile ? "22px" : isiPad ? "26px" : "30px"}
                    className="arrowIcon"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
