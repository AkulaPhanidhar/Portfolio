import React, { useRef, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Alert = () => {
  const inputvalues1 = document.querySelector(".name2");
  const inputvalues2 = document.querySelector(".email2");
  const inputvalues3 = document.querySelector(".message2");
  if (
    inputvalues1.value == "" &&
    inputvalues2.value == "" &&
    inputvalues1.value == ""
  ) {
    alert("Enter a Valid Input");
  } else {
    alert("Your Message Sent Successfully");
    inputvalues1.value = "";
    inputvalues2.value = "";
    inputvalues3.value = "";
  }
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sefxqu6",
        "template_y0iw7sn",
        form.current,
        "1b7EUpTatSsPE5a7O"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
        <div class="right-div">
          <motion.div
            className="main"
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mail1">
              <form ref={form} onSubmit={sendEmail} className="mail2">
                <div className="name1">
                  <div className="lable1">
                    <label className="lable2">Full Name</label>
                  </div>
                  <input type="text" name="from_name" className="name2" />
                </div>
                <div className="email1">
                  <div className="lable1">
                    <label className="lable2">Mail ID</label>
                  </div>
                  <input type="email" name="from_email" className="email2" />
                </div>
                <div className="message1">
                  <div className="lable1">
                    <label className="lable2">Message</label>
                  </div>
                  <textarea required name="message" className="message2" />
                </div>
                <div className="send1">
                  <div class="out-lol">
                    <div class="lol">
                      <Link to="/goback">
                        <button class="button">Go Back</button>
                      </Link>
                    </div>
                  </div>
                  <div class="out-lol">
                    <div class="lol">
                      <button className="send2" onClick={Alert}>
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
