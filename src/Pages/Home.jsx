import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
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
            className="halo-div"
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div class="circle-out">
              <div class="circle1">
                <div class="circle2"></div>
              </div>
            </div>
            <div class="discription">
              <div class="name">Akula Phanidhar</div>
              <div class="text">COMPUTER SCIENCE ENGINEER</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
