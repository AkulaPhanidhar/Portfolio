import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
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
            <div className="out-acc">
              <motion.div
                className="acc2"
                animate={{ y: 0, scale: 1 }}
                initial={{ y: 500, scale: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="my-left">
                  <div className="hedding5">Phone NO :</div>
                </div>
                <div className="my-right">
                  <div className="hedding5">+91 7993073848</div>
                </div>
              </motion.div>
            </div>
            <div className="out-acc">
              <motion.div
                className="acc2"
                animate={{ y: 0, scale: 1 }}
                initial={{ y: 400, scale: 0 }}
                transition={{ duration: 1.2 }}
              >
                <div className="my-left">
                  <div className="hedding5">Mail ID :</div>
                </div>
                <div className="my-right">
                  <div className="hedding5">
                    <a
                      href="mailto:akulaphanidhar30@gmail.com"
                      className="a"
                      id="line"
                    >
                      akulaphanidhar30@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="out-acc">
              <motion.div
                className="acc2"
                animate={{ y: 0, scale: 1 }}
                initial={{ y: 300, scale: 0 }}
                transition={{ duration: 1.4 }}
              >
                <div className="my-left">
                  <div className="hedding5">Location :</div>
                </div>
                <div className="my-right">
                  <div className="hedding5">
                    2-36, Muneerabad Medchal | 501401
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="acc1"
              animate={{ y: 0, scale: 1 }}
              initial={{ y: 100, scale: 0 }}
              transition={{ duration: 1.6 }}
            >
              <div className="ai">
                <div className="ai1">
                  <div className="ai2">
                    <button className="face1">
                      <a
                        href="https://www.linkedin.com/in/akula-phanidhar-20838021b"
                        target={"_blank"}
                        id="line"
                      >
                        <span className="face2">in</span>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div class="out-lol">
                <div class="lol">
                  <a href="">
                    <Link to={"/mailme"}>
                      <button class="button" id="lol">
                        MAIL ME
                      </button>
                    </Link>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
