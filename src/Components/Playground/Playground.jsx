import React, { useState } from "react";
import "./Playground.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
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

const project3Images = [
  project3Image1,
  project3Image2,
  project3Image3,
  project3Image4,
];

const Playground = () => {
  const isMobile = window.innerWidth < 768;

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageSet, setCurrentImageSet] = useState([]);

  // Open modal function
  const openModal = (imageSet, index) => {
    setCurrentImageSet(imageSet);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Close modal function
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Next image function
  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % currentImageSet.length
    );
  };

  // Previous image function
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? currentImageSet.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="playground">
      <div className="project">
        <div className="projectImageContainer">
          {project1Images.map((image, index) => (
            <img
              key={index}
              className="projectImage"
              src={image}
              alt={`project1Image${index + 1}`}
              onClick={() => openModal(project1Images, index)} // Open modal on click
            />
          ))}
        </div>
        <br />
        <p className="projectTitle">Pathfinders Overseas Education</p>
        <p className="projectDescription">
          A website for an overseas education consultancy that provides
          comprehensive information and services to students seeking to study
          abroad.
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
          {project3Images.map((image, index) => (
            <img
              key={index}
              className="projectImage"
              src={image}
              alt={`project3Image${index + 1}`}
              onClick={() => openModal(project3Images, index)} // Open modal on click
            />
          ))}
        </div>
        <br />
        <p className="projectTitle">Spetech E-Commerce Website</p>
        <p className="projectDescription">
          An e-commerce platform for a tech startup that specializes in
          sustainable and eco-friendly products.
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

      {/* Full-screen image modal */}
      {isModalOpen && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <img
              className="modalImage"
              src={currentImageSet[currentImageIndex]}
              alt={`ModalImage${currentImageIndex + 1}`}
            />
            <button className="prevButton" onClick={prevImage}>
              <FaArrowLeft size="30px" />
            </button>
            <button className="nextButton" onClick={nextImage}>
              <FaArrowRight size="30px" />
            </button>
            <button className="closeButton" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Playground;
