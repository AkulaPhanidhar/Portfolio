import React from "react";
import "./Playground.css";
import { FaArrowRight } from "react-icons/fa6";
import project1Image1 from "../Images/Project1Image1.png";
import project1Image2 from "../Images/Project1Image2.png";
import project1Image3 from "../Images/Project1Image3.png";
import project1Image4 from "../Images/Project1Image4.png";
import project1Image5 from "../Images/Project1Image5.png";
import project1Image6 from "../Images/Project1Image6.png";
import project1Image7 from "../Images/Project1Image7.png";
import project1Image8 from "../Images/Project1Image8.png";
import project3Image1 from "../Images/Project3Image1.png";
import project3Image2 from "../Images/Project3Image2.png";
import project3Image3 from "../Images/Project3Image3.png";
import project3Image4 from "../Images/Project3Image4.png";

const Playground = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div className="playground">
      <div className="project">
        <div className="projectImageContainer">
          <img
            className="projectImage"
            src={project1Image1}
            alt="project1Image1"
          />
          <img
            className="projectImage"
            src={project1Image2}
            alt="project1Image2"
          />
          <img
            className="projectImage"
            src={project1Image3}
            alt="project1Image3"
          />
          <img
            className="projectImage"
            src={project1Image4}
            alt="project1Image4"
          />
          <img
            className="projectImage"
            src={project1Image5}
            alt="project1Image5"
          />
          <img
            className="projectImage"
            src={project1Image6}
            alt="project1Image6"
          />
          <img
            className="projectImage"
            src={project1Image7}
            alt="project1Image7"
          />
          <img
            className="projectImage"
            src={project1Image8}
            alt="project1Image8"
          />
        </div>
        <br />
        <p className="projectTitle">Pathfinders Overseas Education</p>
        <p className="projectDescription">
          A website for an overseas education consultancy that provides
          comprehensive information and services to students seeking to study
          abroad. The platform includes features such as university search,
          application tracking, visa assistance, and personalized counseling. It
          aims to simplify the process of studying abroad by offering a one-stop
          solution for all the necessary steps and requirements.
        </p>
        <br />
        <button className="projectButton">
          Visit Site
          <FaArrowRight
            size={isMobile ? "15px" : "18px"}
            style={{ color: "var(--primary-color)" }}
          />
        </button>
      </div>

      <div className="project">
        <div className="projectImageContainer">
          <img
            className="projectImage"
            src={project1Image1}
            alt="project1Image1"
          />
          <img
            className="projectImage"
            src={project1Image2}
            alt="project1Image2"
          />
          <img
            className="projectImage"
            src={project1Image3}
            alt="project1Image3"
          />
          <img
            className="projectImage"
            src={project1Image4}
            alt="project1Image4"
          />
          <img
            className="projectImage"
            src={project1Image5}
            alt="project1Image5"
          />
          <img
            className="projectImage"
            src={project1Image6}
            alt="project1Image6"
          />
          <img
            className="projectImage"
            src={project1Image7}
            alt="project1Image7"
          />
          <img
            className="projectImage"
            src={project1Image8}
            alt="project1Image8"
          />
        </div>
        <br />
        <p className="projectTitle">CRM Portal for Pathfinders Overseas</p>
        <p className="projectDescription">
          A customer relationship management (CRM) portal for an overseas
          education consultancy that provides a centralized platform for
          managing student data, applications, and communications. The portal
          includes features such as student profiles, application status
          tracking, document management, and messaging capabilities. It is
          designed to streamline the consultancy's operations and enhance
          customer service by providing a seamless and efficient experience for
          students and staff.
        </p>
        <br />
        <button className="projectButton">
          Visit Site{" "}
          <FaArrowRight
            size={isMobile ? "15px" : "18px"}
            style={{ color: "var(--primary-color)" }}
          />
        </button>
      </div>

      <div className="project">
        <div className="projectImageContainer">
          <img
            className="projectImage"
            src={project3Image1}
            alt="project1Image1"
          />
          <img
            className="projectImage"
            src={project3Image2}
            alt="project1Image2"
          />
          <img
            className="projectImage"
            src={project3Image3}
            alt="project1Image3"
          />
          <img
            className="projectImage"
            src={project3Image4}
            alt="project1Image4"
          />
        </div>
        <br />
        <p className="projectTitle">Spetech E-Commerce Website</p>
        <p className="projectDescription">
          An e-commerce platform for a tech startup that specializes in
          sustainable and eco-friendly products. The website features a
          user-friendly interface with easy navigation, product categorization,
          and secure payment gateways. It is designed to provide a seamless
          shopping experience for customers looking to purchase eco-conscious
          products and support sustainable practices.
        </p>
        <br />
        <button className="projectButton">
          Visit Site{" "}
          <FaArrowRight
            size={isMobile ? "15px" : "18px"}
            style={{ color: "var(--primary-color)" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Playground;
