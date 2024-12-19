import React from 'react'

import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <section>
        <div className='container hero'>
            <div className="hero-left">
              <h3>11 December 2024, 2PM UTC - 20 December 2024, 2PM UTC</h3>
              <h1>Spin And Win $STAGE And More!</h1>
              <p>Spin to win$STAGE & other prizes such as: Tesla Model S white, iPhone 16 Pro, <br /> Rolex, Playstattion 5 And USDT.</p>
              <a href="£" className="btn">Stake Now</a>
            </div>
            <div className="hero-right">
                <img src={hero} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero