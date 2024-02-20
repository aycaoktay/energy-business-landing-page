import React from "react";
import styles from "./powerSection.module.css";
import { BsArrowRightCircle } from "react-icons/bs";

const PowerSection = () => {
  return (
    <div className={styles["container"]}>
      {/* Left Section */}
      <div className={styles["left-section"]}>
        {/* Image Section*/}
        <div className={styles["image-section"]}>
          <img
            className={styles["image-1"]}
            src="src/assets/women.png"
            alt=""
          />
          <img
            className={styles["image-2"]}
            src="src/assets/power2.png"
            alt=""
          />
          {/* Container Text Section */}
          <div className={styles["text-section"]}>
            <div className={styles["card-1"]}>
              <p className={styles["text-1"]}>1</p>
              <span>
                How this new asset mix and decentralization trend is changing
                the operation and maintenance of these assets
              </span>
            </div>
            <div className={styles["card-1"]}>
              <p className={styles["text-2"]}>2</p>
              <span>
                Managing O&M cost and maintaining other KPI’s while empowering
                the workforce.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className={styles["right-section"]}>
        <h1>Power Magazine on-demand webinar with professionals</h1>
        <div className={styles["learn-more"]}>
          <p>Learn More</p>
          <BsArrowRightCircle size={24} />
        </div>
        <div className={styles["line"]}></div>
        <p className={styles["paragraf"]}>
          Watch as industry expert John Korsedal, GE Digital, discusses the
          impact of decarbonization in the power generation industry and how
          these trends are driving a mix of more decentralized assets over large
          geographic areas.
        </p>
      </div>
    </div>
  );
};

export default PowerSection;
