import React from 'react'

import logo from '../assets/logo.png'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'

const Header = () => {
  return (
    <div className='border'>
        <div className="container header">
            <a href="" className="logo"><img src={logo} alt="stage logo" /></a>
            <ul className="nav-items">
                <li className='nav-item'>
                    <img src={logo1} alt="" />
                    <h2>Music Predictions</h2>
                </li>
                <li className='nav-item'>
                    <img src={logo2} alt="" />
                    <h2>Head To Head</h2>
                </li>
            </ul>
            <div className=""></div>

        </div>
    </div>
  )
}

export default Header