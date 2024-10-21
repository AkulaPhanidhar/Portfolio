import React, { useEffect } from "react";
import "./Playground.css";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { useMediaQuery } from "react-responsive";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import project1Image1 from "../Images/Project1Image1.png";
import project1Image2 from "../Images/Project1Image2.png";
import project1Image3 from "../Images/Project1Image3.png";
import project1Image4 from "../Images/Project1Image4.png";
import project1Image5 from "../Images/Project1Image5.png";
import project1Image6 from "../Images/Project1Image6.png";
import project1Image7 from "../Images/Project1Image7.png";
import project1Image8 from "../Images/Project1Image8.png";
import project2Image1 from "../Images/Project1Image1.png";
import project2Image2 from "../Images/Project1Image2.png";
import project2Image3 from "../Images/Project1Image3.png";
import project2Image4 from "../Images/Project1Image4.png";
import project3Image1 from "../Images/Project3Image1.png";
import project3Image2 from "../Images/Project3Image2.png";
import project3Image3 from "../Images/Project3Image3.png";
import project3Image4 from "../Images/Project3Image4.png";

const project1Images = [
  project1Image1,
  project1Image2,
  project1Image3,
  project1Image4,
  project1Image5,
  project1Image6,
  project1Image7,
  project1Image8,
];

const project2Images = [
  project2Image1,
  project2Image2,
  project2Image3,
  project2Image4,
];

const project3Images = [
  project3Image1,
  project3Image2,
  project3Image3,
  project3Image4,
];

const Project = ({ images, title, description, link }) => {
  const isiPad = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const projectVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="project"
      ref={ref}
      variants={projectVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="projectImageContainer">
        {images.map((image, index) => (
          <img
            key={index}
            className="projectImage"
            src={image}
            alt={`${title}Image${index + 1}`}
          />
        ))}
      </div>
      <p className="projectTitle">
        {title}
        <p className="projectDescription">{description}</p>
      </p>

      <Link to={link} target="_blank" className="link">
        <button className="projectButton">
          Visit Site
          <GoArrowRight size={isMobile ? "16px" : isiPad ? "18px" : "20px"} />
        </button>
      </Link>
    </motion.div>
  );
};

const Playground = () => {
  return (
    <div className="playground">
      <Project
        images={project1Images}
        title="Pathfinders Overseas Education"
        description="A website for an overseas education consultancy that provides comprehensive information and services to students seeking to study abroad."
        link="https://app.pathfindersoverseas.com"
      />
      <Project
        images={project2Images}
        title="Pathfinders CRM Portal"
        description="A CRM portal for Pathfinders that manages client relationships, offering services for overseas education consultations."
        link="https://crm.pathfinders.com"
      />
      <Project
        images={project3Images}
        title="Spetech E-Commerce Website"
        description="An e-commerce platform for a tech startup that specializes in sustainable and eco-friendly products."
        link="https://spetech.com"
      />
    </div>
  );
};

export default Playground;
