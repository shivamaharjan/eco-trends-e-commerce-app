import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import LandingPage from '../../components/home/LandingPage'
import Category from '../../components/home/Category'
import Reviews from '../../components/home/Reviews'


function Home() {
  return (
    <div>
        <Header/>
        <div className="main">
        <LandingPage/>
        <Reviews/>
        </div>
        <Footer/>
    

    </div>
  )
}

export default Home