import React from "react";
import styles from "./Product.module.css";
import imageSection2 from '../../assets/imagesection2.png'
import icon from '../../assets/Icon.png'
import productImage from '../../assets/productimg.png'
import cloud from '../../assets/Cloud.png'
const Product = () => {
  return (
    <div className={styles["product-container"]} id="services">
      <img
        src={imageSection2}
        alt=""
        className={styles["img-decarbonization"]}
      />
      <div className={styles["product-icons"]}>
        <div className={styles["icons"]}>
          <div className={styles["vector"]}>
            <div className={styles["vector-icons"]}></div>
          </div>
        </div>
        <p className={styles["hydro-text"]}>Hydro Power</p>
      </div>

      <div className={styles["product-text"]}>
        <span className={styles["product-title"]}>
          Decarbonization is mission, critical for the planet
        </span>
        <a href="#" className={styles["learn-more"]}>
          Learn more <img src={icon} alt="" />{" "}
        </a>
        <img
          src={productImage}
          alt="product"
          className={styles["product-image"]}
        />
      </div>

      <div className={styles["product-description"]}>
        <p>
          The global energy landscape will change more in the next 10 years than
          in the previous hundred. As the world’s energy sector moves away from
          fossil fuels toward renewable energy sources, industrial companies are
          challenged with addressing this transition in transformative ways.
        </p>
        <p>
          Renewable Energy harnesses the earth’s most abundant resources – the
          strength of the wind, the heat of the sun, ,and the force of water;
          delivering green electrons to power the world’s biggest economies and
          the most remote communities.
        </p>
      </div>
      <img src={cloud} className={styles.cloud} alt="cloud" />
    </div>
  );
};

export default Product;
