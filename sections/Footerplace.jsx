import React from 'react'

const Footerplace = () => {
  return (
        <footer>
            
        <div className="footer--container place--footer">
            <div className="footer--first">
                <img src="/img/metawhite-logo.svg" alt="" />
                <div className="footer--first--bottom">
                    <div className="footer--first--icons">
                        <img src="/img/facebook.png" alt="" />
                        <img src="/img/instagram.png" alt="" />
                        <img src="/img/twitter.png" alt="" />
                    </div>
                    <p> &copy; 2022 Metabnb</p>
                </div>
            </div>

            <div className="footer--second head">
                <h3 className='footer--head'>
                    Community
                </h3>
                <div className="footer--second--links links">
                    <a href="">NFT</a>
                    <a href="">Tokens</a>
                    <a href="">Landlords</a>
                    <a href="">Discords</a>
                </div>
            </div>

            <div className="footer--third head">
                <h3 className='footer--head'>
                    Places
                </h3>
                <div className="footer--third--links links">
                    <a href="">Castle</a>
                    <a href="">Farm</a>
                    <a href="">Beach</a>
                    <a href="">Learn more</a>
                </div>
            </div>

            <div className="footer--fourth head">
                <h3 className='footer--head'>
                    About Us
                </h3>
                <div className="footer--fourt--links links">
                    <a href="">Roadmaps</a>
                    <a href="">Creators</a>
                    <a href="">Career</a>
                    <a href="">Contact Us</a>
                </div>
            </div>

        </div>

    </footer>
    
  )
}

export default Footerplace