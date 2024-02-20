import React from "react";
import styles from "./blogSection.module.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

const Blog = () => {
  return (
    <div className={styles["container"]}>
      {/* Blog Section */}
      <div className={styles["blog"]}>
        {/* text-section */}
        <div className={styles["text-section"]}>
          <p className={styles["header"]}>OUR BLOG</p>
          <div className={styles["line"]}></div>
          <span className={styles["paragraf"]}>
            Advancing the energy transition through innovation
          </span>
        </div>
        <div className={styles["read-more"]}>
          <span>Read More</span>
          <BsFillArrowRightCircleFill size={32} />
        </div>
      </div>
      {/* Card Section */}
      <div className={styles["card-section"]}>
        {/* Card 1 */}
        <div className={styles["card-1"]}>
          <img
            src="src/assets/industry.png"
            className={styles["image"]}
            alt=""
          />
          <div className={styles["card-text-section"]}>
            <p className={styles["text-1"]}>INDUSTRY</p>
            <p className={styles["text-2"]}>
              Advanced Distribution Management Solutions
            </p>
            <span className={styles["text-3"]}>
              Distribution management systems for the modern grid.
            </span>
            <div className={styles["read-more2"]}>
              <span>Learn More</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </div>
        <div className={styles["card-1"]}>
          <img
            src="src/assets/software.png"
            className={styles["image"]}
            alt=""
          />
          <div className={styles["card-text-section"]}>
            <p className={styles["text-1"]}>SOFTWARE</p>
            <p className={styles["text-2"]}>
              Advanced Distribution Management Solutions
            </p>
            <span className={styles["text-3"]}>
              Distribution management systems for the modern grid.
            </span>
            <div className={styles["read-more2"]}>
              <span>Learn More</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </div>
        <div className={styles["card-1"]}>
          <img
            src="src/assets/industry2.png"
            className={styles["image"]}
            alt=""
          />
          <div className={styles["card-text-section"]}>
            <p className={styles["text-1"]}>INDUSTRY</p>
            <p className={styles["text-2"]}>
              Intersolar Europe 2022 live blog - day one
            </p>
            <span className={styles["text-3"]}>
              Distribution management systems for the modern grid.
            </span>
            <div className={styles["read-more2"]}>
              <span>Learn More</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
