import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from "react-icons/fa"
import { GiHamburgerMenu } from 'react-icons/gi'
import Metamask from './Metamask'

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    

  return (
    <div>
            <nav>
        <div className='container'>
            <div className="logo">
                <img src="/img/metabnb-logo.png" className='image--logo' alt="" />
            </div>


            <div className="menu--links">
                <Link to="/">Home</Link>
                <Link to="/Placetostay">Place to stay</Link>
                <a href="">NFTs</a>
                <a href="">Community</a>
            </div>
            
            {openNavbar
            ?   <div className="open--nav">
                    <Link to="/">Home</Link>
                    <Link to="/Placetostay">Place to stay</Link>
                    <a href="">NFTs</a>
                    <a href="">Community</a>
                </div>
            :   ''  }

            {modalOpen ? <Metamask setModalOpen={() => {setModalOpen(false);}} /> : ''}



            <a  onClick={() => {setModalOpen(prevMode => !prevMode);}} className='btn--wallet'>Connect wallet</a>

        

            <div className="times--icon">
                <FaTimes size='2rem' />
            </div>

            <div className="burger">
                <Link onClick={() => {setOpenNavbar(prevMode => !prevMode)}} ><GiHamburgerMenu size='2rem' /></Link>
            </div>


        </div>

    </nav>
    </div>
    
  )
}

export default Navbar
