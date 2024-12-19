import React from 'react'

import car from '../assets/car.png'
import phone from '../assets/phone.png'
import ps5 from '../assets/ps5.png'
import stage from '../assets/solana.png'
import tether from '../assets/tether.png'
import watch from '../assets/watch.png'

const Spin = () => {

  const data = [
    {
      image: car,
      title: 'Tesla Model S',
      desc: 'White(1x)'
    },
    {
      image: watch,
      title: 'Rolex',
      desc: '(2x)'
    },
    {
      image: ps5,
      title: 'Playstation 5',
      desc: '(10x)'
    },
    {
      image: phone,
      title: 'iPhone 16 Pro',
      desc: '(5x)'
    },
    {
      image: stage,
      title: '50$Stage',
    },
    {
      image: stage,
      title: '25$Stage',
    },
    {
      image: stage,
      title: '10$Stage',
    },
    {
      image: stage,
      title: '5$Stage',
    },
    {
      image: tether,
      title: '10 USDT',
    },
    {
      image: tether,
      title: '5 USDT',
    },
  ]

  return (
    <section>
      <div className="container">
        <h3>Spin and win $STAGE and More!</h3>

        <div className="cards">
          {
            data.map((item, index) => (
              <div key={index} className="card">
                <img src={item.image} alt={item.title} />
                <div className="card-info">
                  <h3>{ item.title }</h3>
                  <h5>{ item.desc }</h5>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </section>
    // <div className='body'>
    //     <ol class="connected-list">
    //       <li>First item</li>
    //       <li>Second item</li>
    //       <li>Third item</li>
    //       <li>Fourth item</li>
    //     </ol>
    // </div>
  )
}

export default Spin