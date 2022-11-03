import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Resume from "../PDF/Resume.pdf";

const Profile = () => {
  return (
    <div class="body">
      <div class="left-outer-div">
        <div class="left-div1">
          <div class="left-div2">
            <div class="buttons">
              <div class="out-lol">
                <div class="lol">
                  <Link to="/">
                    <button class="button">HOME</button>
                  </Link>
                </div>
              </div>
              <div class="out-lol">
                <div class="lol">
                  <Link to="/skills">
                    <button class="button">SKILLS</button>
                  </Link>
                </div>
              </div>
              <div class="out-lol">
                <div class="lol">
                  <Link to="/qualification">
                    <button class="button">QUALIFICATION</button>
                  </Link>
                </div>
              </div>
              <div class="out-lol">
                <div class="lol">
                  <Link to="/profile">
                    <button class="button">PROFILE</button>
                  </Link>
                </div>
              </div>
              <div class="out-lol">
                <div class="lol">
                  <Link to="/contact">
                    <button class="button">CONTACT ME</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-outer-div">
        <motion.div
          class="right-div"
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="main"
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about">
              <div className="hedding">About</div>
              <div className="message">
                I am a 3rd Year Student from Malla Reddy University, Pursuing my
                degree in Computer Science Engineering with a specialisation of
                Artificial Intelligence and Machine Learning, and I love
                Programming, I am very Passionated in Designing, I want to work
                as a Web Developer, I have done some small projects like UI/UX
                designing, Web Applications, creating servers and databases,
                which are in my profile section, I want to gain some experience
                and work for some real time projects.
              </div>
            </div>
            <div className="cv">
              <motion.div
                class="out-lol"
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ duration: 1 }}
              >
                <div class="lol">
                  <a href={Resume} download>
                    <button class="button" id="lol">
                      Download CV
                    </button>
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="out-link">
              <div className="left">
                <div className="left-link">GitHub:</div>
                <div className="left-link">Behance:</div>
                <div className="left-link">LeetCode:</div>
              </div>
              <div className="right">
                <div className="right-link">
                  <a
                    href="https://github.com/AkulaPhanidhar"
                    target={"_blank"}
                    className="a"
                    id="line"
                  >
                    https://github.com/AkulaPhanidhar
                  </a>
                </div>
                <div className="right-link">
                  <a
                    href="https://www.behance.net/akulaphanidhar"
                    target={"_blank"}
                    className="a"
                    id="line"
                  >
                    https://www.behance.net/akulaphanidhar
                  </a>
                </div>
                <div className="right-link">
                  <a
                    href="https://leetcode.com/Akula_Phanidhar"
                    target={"_blank"}
                    className="a"
                    id="line"
                  >
                    https://leetcode.com/Akula_Phanidhar
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
