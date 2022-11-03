import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Qualification = () => {
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
            <motion.div
              className="under"
              animate={{ y: 0, scale: 1 }}
              initial={{ y: 450, scale: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="hedding3">
                <div className="hedding4">UNDER GRADUATE</div>
              </div>
              <div className="hedding2">MALLA REDDY UNIVERSITY</div>
              <div className="content2">
                Computer Science | Augest 2020 - Augest 2024
              </div>
              <div className="content2">
                Artificial Intelligence and Machine Learning
              </div>
            </motion.div>
            <motion.div
              className="inter"
              animate={{ y: 0, scale: 1 }}
              initial={{ y: 250, scale: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div className="hedding2">INTERMEDIATE</div>
              <div className="content1">
                NARAYANA JUNIOR COLLEGE | 2018 - 2020
              </div>
            </motion.div>
            <motion.div
              className="school"
              animate={{ y: 0, scale: 1 }}
              initial={{ y: 80, scale: 0 }}
              transition={{ duration: 1.4 }}
            >
              <div className="hedding2">SCHOOL</div>
              <div className="content1">VIGNAN GLOBAL GEN SCHOOL | 2018</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Qualification;
