import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import LandingPage from '../../components/home/LandingPage'


function Home() {
  return (
    <div>
        <Header/>
        <div className="main">
        <LandingPage/>
        </div>
        <Footer/>
    

    </div>
  )
}

export default Home