import React from 'react';
import styles from './Footer.module.css';

const Section = ({ title, items}) => {
    return (
        <div className={`${styles.section}`}>
            <span>{title}</span>
            <div>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer>
            <div className={styles.content}>
                <div className={styles.about}>
                    <div className={styles.logo}>
                        <img src="src/assets/logo.png" alt="logo" />
                        <h2>Sun Energy</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit. Aenean commodo</p>
                </div>
                <Section
                    title="Information"
                    items={["Industry analytics", "News and release", "Events", "About us"]}
                
                />
                <Section
                    title="Useful Links"
                    items={["Services", "Partners", "Innovation", "Support"]}
                    
                />
                <Section
                    title="Contact"
                    items={["Headquarters" , "Manager" ,"Sales" ,"Why Us"]}
                />
            
            </div>
        </footer>
    );
};

export default Footer;
