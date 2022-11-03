import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Skills = () => {
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
          <div className="skills-buttons">
            <div className="out-lol">
              <div className="lol">
                <button className="button">FRONTEND</button>
              </div>
            </div>
            <div className="out-lol">
              <div className="lol">
                <Link to={"/backend"}>
                  <button className="button">BACKEND</button>
                </Link>
              </div>
            </div>
          </div>
          <motion.div
            className="front-in"
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="front-graph1">
              <div className="front-graph2">
                <div className="b1">
                  <div className="b2">
                    <div className="b3l">
                      <div className="b4">HTML</div>
                    </div>
                    <div className="b3r">
                      <div className="b4">100%</div>
                    </div>
                  </div>
                  <div className="b5">
                    <motion.div
                      className="b6"
                      animate={{ width: 500 }}
                      initial={{ width: 0 }}
                      transition={{ duration: 2 }}
                    ></motion.div>
                  </div>
                </div>
                <div className="b1">
                  <div className="b2">
                    <div className="b3l">
                      <div className="b4">CSS</div>
                    </div>
                    <div className="b3r">
                      <div className="b4">80%</div>
                    </div>
                  </div>
                  <div className="b5">
                    <motion.div
                      className="b6"
                      animate={{ width: 400 }}
                      initial={{ width: 0 }}
                      transition={{ duration: 2 }}
                    ></motion.div>
                  </div>
                </div>
                <div className="b1">
                  <div className="b2">
                    <div className="b3l">
                      <div className="b4">JAVASCRIPT</div>
                    </div>
                    <div className="b3r">
                      <div className="b4">60%</div>
                    </div>
                  </div>
                  <div className="b5">
                    <motion.div
                      className="b6"
                      animate={{ width: 300 }}
                      initial={{ width: 0 }}
                      transition={{ duration: 2 }}
                    ></motion.div>
                  </div>
                </div>
                <div className="b1">
                  <div className="b2">
                    <div className="b3l">
                      <div className="b4">REACT JS</div>
                    </div>
                    <div className="b3r">
                      <div className="b4">70%</div>
                    </div>
                  </div>
                  <div className="b5">
                    <motion.div
                      className="b6"
                      animate={{ width: 350 }}
                      initial={{ width: 0 }}
                      transition={{ duration: 2 }}
                    ></motion.div>
                  </div>
                </div>
                <div className="b1">
                  <div className="b2">
                    <div className="b3l">
                      <div className="b4">FIGMA</div>
                    </div>
                    <div className="b3r">
                      <div className="b4">100%</div>
                    </div>
                  </div>
                  <div className="b5">
                    <motion.div
                      className="b6"
                      animate={{ width: 500 }}
                      initial={{ width: 0 }}
                      transition={{ duration: 2 }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
