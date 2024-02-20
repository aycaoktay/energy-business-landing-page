import React from "react";
import styles from "./contactSection.module.css";
import { BsPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container-2"]}>
        <div className={styles["image"]}>
          <img
            src="src/assets/contact.png"
            className={styles["images"]}
            alt=""
          />
        </div>
        <div className={styles["information"]}>
          {/* personal */}
          <div className={styles["person"]}>
            <div className={styles["icon"]}>
              <BsPersonFill size={32} />
            </div>
            <div className={styles["text-1"]}>
              <h2>Albert Johns</h2>
              <span>albertjohns@gmail.com</span>
            </div>
          </div>
          <div className={styles["number"]}>
            <div className={styles["icon"]}>
              <BsFillTelephoneFill size={24} />
            </div>
            <span>+64 1233 4567 890</span>
          </div>
          <div className={styles["address"]}>
            <div className={styles["icon"]}>
              <FaLocationDot size={24} />
            </div>
            <span>1234 North Avenue, 890, New York, USA</span>
          </div>
        </div>
      </div>
      {/* contact us */}
      <div className={styles["contact-us"]}>
        <div className={styles["top-section"]}>
          <h1>Contact Us</h1>
          <span>
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli.
          </span>
        </div>
        <div className={styles["input-section"]}>
          <div className={styles["input-1"]}>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email Adress" />
          </div>
          <input
            className={styles["question"]}
            type="text"
            placeholder="Question"
          />
        </div>
        <div>
          <span>Send Question</span>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
