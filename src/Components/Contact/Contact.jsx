import React, { useState } from "react";
import "./Contact.css";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { LuFigma } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import { BiSolidCopy } from "react-icons/bi";
import { Link } from "react-router-dom";
import Resume from "./../../PDF/Resume.pdf";

const Contact = () => {
  const [copyButtonText, setCopyButtonText] = useState("Copy Email");

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
        <div className="contactLeftContainer">
          <p className="contactText">
            Let's shake hands{" "}
            <FaHandshakeSimple
              size={"18px"}
              style={{ color: "var(--secondary-color)" }}
            />
          </p>
          <p className="mail">akulaphanidhar03@gmail.com</p>
          <button className="copyEmailButton" onClick={handleCopyEmail}>
            {/* {copyButtonText === "Copy Email" && <BiSolidCopy size={"15px"} />} */}
            <BiSolidCopy size={"15px"} />
            {copyButtonText}
          </button>
          <br />
          <p className="contactText" id="contactText">
            Are you interested in a long-term relationship?
            <a href={Resume} download className="cv">
              Download my CV
            </a>
          </p>
          <br />
          {!isMobile && <br />}
          <div className="heroLinkContainer">
            <Link
              to={"https://www.linkedin.com/in/akulaphanidhar"}
              target="_blank"
            >
              <div className="heroLinkBox">
                <FaLinkedinIn size={"18px"} className="heroLinkIcon" />
              </div>
            </Link>
            <Link to={"https://github.com/AkulaPhanidhar"} target="_blank">
              <div className="heroLinkBox">
                <FaGithub size={"18px"} className="heroLinkIcon" />
              </div>
            </Link>
            <Link to={"https://www.figma.com/@akulaphanidhar"} target="_blank">
              <div className="heroLinkBox">
                <LuFigma size={"18px"} className="heroLinkIcon" />
              </div>
            </Link>
            <Link
              to={"https://leetcode.com/u/Akula_Phanidhar/"}
              target="_blank"
            >
              <div className="heroLinkBox">
                <SiLeetcode size={"18px"} className="heroLinkIcon" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

// import React, { useState } from "react";
// import "./Contact.css";
// import { FaHandshakeSimple } from "react-icons/fa6";
// import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
// import { LuFigma } from "react-icons/lu";
// import { SiLeetcode } from "react-icons/si";
// import { Link } from "react-router-dom";
// import Resume from "./../../PDF/Resume.pdf";
// import styled from "styled-components";
// import emailjs from "emailjs-com";

// const ContactTextArea = styled.textarea`
//   padding: 10px 20px;
//   border-radius: 5px;
//   border: 1px solid var(--secondary-color);
//   height: 30vh;
//   width: 100%;
//   resize: none;
//   background: transparent;
//   color: var(--secondary-color);
//   font-size: small;
//   transition: 0.2s ease-in-out;

//   &:focus {
//     outline: 1px solid var(--active-color);
//     border: 1px solid var(--active-color);
//   }

//   &::placeholder {
//     color: var(--secondary-color);
//     font-size: small;
//     font-weight: 300;
//     opacity: 0.7;
//   }
// `;

// const isMobile = window.innerWidth < 768;

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .send(
//         "service_5be7uz7",
//         "template_6mwe23l",
//         formData,
//         "x4nSWX_6zztHMjAl5"
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully:", result.text);
//           alert("Message sent successfully!");
//           setFormData({ email: "", subject: "", message: "" });
//         },
//         (error) => {
//           console.error("Failed to send email:", error.text);
//           alert("Failed to send the message. Please try again.");
//         }
//       );
//   };

//   return (
//     <>
//       <div className="contact">
//         <div className="contactLeftContainer">
//           <p className="contactText">
//             Let's shake hands{" "}
//             <FaHandshakeSimple
//               size={"18px"}
//               style={{ color: "var(--secondary-color)" }}
//             />
//           </p>
//           <p className="mail">akulaphanidhar03@gmail.com</p>
//           <br />
//           <p className="contactText" id="contactText">
//             Are you interested in a long-term relationship?
//             <a href={Resume} download className="cv">
//               Download my CV
//             </a>
//           </p>
//           <br />
//           {!isMobile && <br />}
//           <div className="heroLinkContainer">
//             <Link
//               to={"https://www.linkedin.com/in/akulaphanidhar"}
//               target="_blank"
//             >
//               <div className="heroLinkBox">
//                 <FaLinkedinIn size={"18px"} className="heroLinkIcon" />
//               </div>
//             </Link>
//             <Link to={"https://github.com/AkulaPhanidhar"}>
//               <div className="heroLinkBox">
//                 <FaGithub size={"18px"} className="heroLinkIcon" />
//               </div>
//             </Link>
//             <Link to={"https://www.figma.com/@akulaphanidhar"}>
//               <div className="heroLinkBox">
//                 <LuFigma size={"18px"} className="heroLinkIcon" />
//               </div>
//             </Link>
//             <Link to={"https://leetcode.com/u/Akula_Phanidhar/"}>
//               <div className="heroLinkBox">
//                 <SiLeetcode size={"18px"} className="heroLinkIcon" />
//               </div>
//             </Link>
//           </div>
//         </div>

//         <div style={{ width: "50%" }}>
//           <form className="contactrightContainer" onSubmit={sendEmail}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Mail ID"
//               className="contactInput"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               className="contactInput"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//             />
//             <ContactTextArea
//               name="message"
//               placeholder="Enter your message here..."
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />
//             <button
//               type="submit"
//               className="contactButton"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;
