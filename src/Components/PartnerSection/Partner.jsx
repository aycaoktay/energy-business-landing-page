import React from "react";
import styles from "./partner.module.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import partnerImage from '../../assets/partner.png'

const Partner = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        <h1 className={styles["title1"]}>
          Partnering to drive digitization of the power sector
        </h1>
        <p className={styles["title2"]}>
          In partnership with some of the world’s largest utilities and energy
          producers, we’re helping to drive digitization. Model entire networks
          to help power utilities reduce costs.
        </p>
        <div className={styles["learn-more"]}>
          <span> Learn More</span>
          <BsFillArrowRightCircleFill size={28} color="#0052b4" />
        </div>
      </div>
      <div className={styles["image"]}>
        <img src={partnerImage} alt="img" />
      </div>
    </div>
  );
};

export default Partner;
