import React from 'react'
import Landingpage from '../sections/Landingpage'
import Metabar from '../components/Metabar'
import Place from '../sections/Place'
import Nft from '../sections/Nft'
import Footer from '../sections/Footer'
// import Metamask from '../components/Metamask'
// import OpenNavbar from '../components/OpenNavbar'


const Home = () => {
    
    

  return (
    <div>
        <Landingpage />
        {/* {modalOpen ? <Metamask setModalOpen={setModalOpen} /> : ''} */}
        <Metabar />
        <Place />
        <Nft />
        <Footer />
        
    </div>
  )
}

export default Home