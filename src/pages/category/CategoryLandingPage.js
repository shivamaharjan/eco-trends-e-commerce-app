import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import CategoryHero from '../../components/categories/CategoryHero'
import CategoryNav from '../../components/categories/CategoryNav'
import CategoryBody from '../../components/categories/CategoryBody'

function CategoryLandingPage() {
  return (
    <div>
      <Header />
      <div className="main" style={{ marginLeft: "40px", marginRight: "40px" }}>
        <CategoryHero />
        <CategoryNav />
        <CategoryBody/>
      </div>
      <Footer />
    </div>
  );
}

export default CategoryLandingPage