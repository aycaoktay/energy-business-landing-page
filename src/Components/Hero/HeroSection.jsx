import React from 'react';
import NavBar from '../NavBar/NavBar';
import styles from './HeroSection.module.css';
import cardImage from '../../assets/cardimage.png';
import playImage from '../../assets/Play.png'
import globeImage from '../../assets/Ic_Globe.png'
const HeroText = () => {
  return (
    <div className={styles['hero-text']}>
      <span className={styles['renewable-energy']}>RENEWABLE ENERGY</span>
      <span className={styles['digital-energy']}>Digital in the <br />Future of Energy</span>
    </div>
  );
};

const ContainerText = () => {
  return (
    <div className={styles.container}>
      <span className={styles['container-text']}>
        Reducing carbon and costs while providing sustainable, <br /> reliable, and affordable power
      </span>
    </div>
  );
};

const Card = () => {
  return (
    <div className={styles.card}>
      <div></div>
      <span className={styles['card-text']}>10M+</span>
      <span className={styles['card-text2']}>Worldwide product <br />sales per year</span>
      <div className={styles['card-img']}>
        <img src={cardImage} alt="img" />
      </div>
      <img src={playImage} alt="play icon" className={styles['card-icon']} />
    </div>
  );
};

const TextContainer = () => {
  return (
    <div className={styles['text-container']}>
      <span className={styles['text-1']}>Enable reliable, cost effective and dispactchable power</span>
      <br />
      <span className={styles['text-2']}>
        Sun Energy has accumulated more than 9 <br /> gigawatts of total global installed base and backlog for its inverter technology...
      </span>
      <div>
        <button className={styles.btn}>
          <img src={globeImage} alt="icon" />
          <span className={styles['btn-text']}>Save Earth</span>
        </button>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <NavBar />
      <div>
        <HeroText />
        <ContainerText />
      </div>
      <Card />
      <TextContainer />
    </div>
  );
};

export default HeroSection;
