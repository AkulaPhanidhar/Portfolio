import React, { useState, useEffect } from "react";
import "./About.css";
import { motion } from "framer-motion";
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

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStartTyping(true);
    }, 1200);

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
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, 30);

    return () => clearTimeout(typingTimeout);
  }, [text, currentIndex, isDeleting, startTyping]);

  return (
    <>
      <div className="about">
        <div className="heroLeftTextBox">
          <p className="heroSubText">Hello, it's</p>
          <div className="heroNameContent">
            <p className="heroTextTop">Phanidhar Akula</p>
            <p className="heroText">Phanidhar Akula</p>
          </div>
          <p className="heroSubText">
            I'm a <span className="animatedHeroSubText">{text}</span>
          </p>
        </div>
        <p className="heroDescription">
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
        </p>
        <div className="universityContainer">
          <img
            className="universityLogo"
            src={universityLogo}
            alt="University Logo"
          />
          <p className="universityName">Miami University</p>
          <p className="universityDiscription">Masters in Computer Science</p>
        </div>
      </div>
    </>
  );
};

export default About;
