import React from 'react'
import {NavLink} from 'react-router-dom'
import Poco from '../../../assets/pocobanner-min.jpg'
import Amazfit from '../../../assets/amazfit-t-rex-2-min.jpg'
import Air from '../../../assets/air2.jpg'
import Robo from '../../../assets/7.roborocks5max.jpg'
import Haylou from '../../../assets/haylou-gt2.jpg'
import Smart from '../../../assets/miband5banner-min.jpg'
import Holder from '../../../assets/20w.jpg'
import Compressor from '../../../assets/mi-air-compressor.jpeg'
import Dermast from '../../../assets/deermast-800-min.jpg'
import './new.scss'

const newProd = [
    {id: 1, name: 'Poco X3', url: Poco},
    {id: 2, name: 'Amazfit T-Rex', url: Amazfit},
    {id: 3, name: 'Mi Air 2', url: Air},
    {id: 4, name: 'Roborock S5 Max', url: Robo},
    {id: 5, name: 'Haylou GT-2', url: Haylou},
    {id: 6, name: 'Mi Smart Band 5', url: Smart},
    {id: 7, name: 'Mi Auto Wireless Charger 20W', url: Holder},
    {id: 8, name: 'Mi Air Compressor', url: Compressor},
    {id: 9, name: 'Deerma ST800', url: Dermast},
]

function New() {
    return (
          <section className='newproduct'>
              <div className="wrapper">
                  {newProd.map((type) => (
                      <NavLink to={'/'} key={type.id}>
                          <div className='item'>
                              <img src={type.url} alt=""/>
                              <p>{type.name}</p>
                          </div>
                      </NavLink>
                  ))}
              </div>
          </section>
    )
}

export default New