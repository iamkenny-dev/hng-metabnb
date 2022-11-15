import React from 'react'
import { Link } from 'react-router-dom'

const Metamask = ({setModalOpen}) => {


  return (
    <div className='wallet--wrapper'>
        <div className="wallet--container">
            <div className="wallet--heading">
                <div>
                    <h1>Connect Wallet</h1>
                </div>
                <div>
                    <Link onClick={setModalOpen} ><img src="/img/x.png" alt="" /></Link>
                </div>
                
            </div>
            <hr />
            <div className="wallet--lists">
                <p>Choose your preferred wallet</p>
                <a href="">
                        <div className="meta--left">
                            <img src="/img/metamask-logo.png" alt="" />
                        </div>
                        <div className="meta--right">
                            <img src="/img/arrow.png" alt="" />
                        </div>
                </a>

                <a href="">

                        <div className="meta--left">
                            <img src="/img/walletconnect-logo.png" alt="" />
                        </div>
                        <div className="meta--right" >
                            <img  src="/img/arrow.png" alt="" />
                        </div>
                </a>

            </div>
        </div>
    </div>
  )
}

export default Metamask