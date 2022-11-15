import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
// import Metamask from '../components/Metamask'
// import OpenNavbar from '../components/OpenNavbar'

const Home = () => {
  

  return (
    <div className='home'>
      <Navbar />
      {/* {openNavbar ? <OpenNavbar setOpenNavbar={() => {setOpenNavbar(true);}} /> : ''} */}
      <Hero />
      {/* <Metamask /> */}
    </div>
  )
}

export default Home
