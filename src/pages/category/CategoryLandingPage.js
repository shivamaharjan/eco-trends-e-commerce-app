import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import CategoryHero from '../../components/categories/CategoryHero'
import CategoryNav from '../../components/categories/CategoryNav'
import WellnessAndStyle from '../../components/categories/WellnessAndStyle'
import EcoEssentials from '../../components/categories/EcoEssentials'
import GreenLiving from '../../components/categories/GreenLiving'

function CategoryLandingPage() {
  return (
    <div>
      <Header />
      <div className="main" style={{ marginLeft: "40px", marginRight: "40px" }}>
        <CategoryHero />
        <CategoryNav />
        <WellnessAndStyle />
        <EcoEssentials />
        <GreenLiving />
      </div>
      <Footer />
    </div>
  );
}

export default CategoryLandingPage