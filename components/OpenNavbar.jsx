import React from 'react'
import { Link } from 'react-router-dom'

const OpenNavbar = () => {
  return (
    <div>
        <div className="open--nav">
                <Link to="/">Home</Link>
                <Link to="/Placetostay">Place to stay</Link>
                <a href="">NFTs</a>
                <a href="">Community</a>
        </div>
    </div>
  )
}

export default OpenNavbar