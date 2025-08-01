import React, { useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Review from './Review';
import Footer from './Footer';

const Home = () => {
  const [activeTab, setActiveTab] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar with shared state */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      
      {/* Hero section as the main content */}
      <main className="flex-grow">
        <Hero />
        <Services />
        <Review />
        <Footer />
      </main>
      
     
    </div>
  )
}

export default Home