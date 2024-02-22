import React from "react";
import styles from "./SolutionFeature.module.css";
import { BsFillLightningFill } from "react-icons/bs";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import solutionImage from '../../assets/Image2.png'

const SolutionFeature = () => {
  return (
    <div className={styles["solution-feature"]}>
      {/* sol taraf */}
      <div className={styles["left-section"]}>
        {/* birinci kısım */}
        <div className={styles["first-section"]}>
          <p className={styles["our-solutions"]}>Our Solution</p>
          <div className={styles["line"]}></div>
          <p className={styles["our-text"]}>
            Powering A Sustainable and Profitable Energy Transition on Digital
            Solutions
          </p>
          <a href="#" className={styles["learn-more"]}>
            Learn More
          </a>
        </div>
        {/* ikinci kısım */}
        <div></div>
      </div>
      {/*sağ taraf */}
      <div className={styles.backgrounds}>
        <p className={styles["text-two"]}>
          Decarbonization requires balance between legacy systems and emerging
          technologies. Between the environment and business economies.
        </p>
        <div className={styles.circle}>
          <div className={styles["half-circle"]}></div>
        </div>
      </div>
      {/* sağ taraf */}
      <div className={styles["right-section"]}>
        {/* resim kısmı */}
        <div className={styles["second-section"]}>
          <img
            src={solutionImage}
            className={styles.images}
            alt=""
          />
          <div className={styles["icons-section"]}>
            {/*icon 1 */}
            <div className={styles["icons-first"]}>
              <BsFillLightningFill size={50} color="#ffd84d" />
            </div>
            {/*icon 2 */}
            <div className={styles["icons-second"]}>
              <div className={styles["grid-icons"]}>
                <BsFillGrid3X3GapFill size={40} color="white" />
              </div>
              <p className={styles["grid-sol"]}>Grid Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionFeature;
