import React from "react";
import LandingPage from "../../components/home/LandingPage";
import Reviews from "../../components/home/Reviews";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import ShopCategories from "../../components/home/ShopCategories";
import InfoSlide from "../../components/home/InfoSlide";
import FeaturedItems from "../../components/home/FeaturedItems";
import OurMission from "../../components/home/OurMission";
import AboutUs from "../../components/home/AboutUs";

function Home() {
  return (
    <div>
      <Header />
      <div className="main">
        <LandingPage />
        <Reviews />
        <ShopCategories/>
        <InfoSlide/>
        <FeaturedItems/>
        <OurMission/>
        <AboutUs/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
