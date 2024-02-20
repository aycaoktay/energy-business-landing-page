import React from "react";
import HeroSection from "../../Components/Hero/HeroSection";
import Product from "../../Components/ProductFeatures/Product";
import SolutionFeature from "../../Components/SolutionFeatures/SolutionFeature";
import Partner from "../../Components/PartnerSection/Partner";
import BlogSection from "../../Components/BlogSection/Blog";
import PowerSection from "../../Components/PowerSection/PowerSection";
import ContactSection from "../../Components/ContactSection/ContactSection";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <Product />
      <SolutionFeature />
      <Partner />
      <BlogSection />
      <PowerSection />
      <ContactSection />
      <Footer/>
    </div>
  );
};

export default Home;
