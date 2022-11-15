import React from 'react'

const Hero = () => {
  return (
    <section>

        <div className="hero--container">
            <div className="hero--left">
                <h1>
                    Rent a <span>Place</span> away from<br /> <span>Home</span> in the <span>Metaverse</span>
                </h1>
                <p>
                    we provide you access to luxury and affordable houses<br /> in the metaverse, get a chance to turn your<br /> imagination to reality at your comfort zone
                </p>
                <div className="input--search">
                    <input type="text" placeholder='Search for location' />
                    <a href="">Search</a>
                </div>
            </div>

            <div className="hero--right">
                <img src="/img/hero--img.png" alt="" />
            </div>
        </div>
      
    </section>
  )
}

export default Hero
