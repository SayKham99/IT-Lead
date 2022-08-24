import React from 'react'
import { NavLink } from 'react-router-dom'
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
function New() {
  return (
    <section className='newproduct'>
        <div className="wrapper">
            <NavLink to={'/'}>
                <div className='item'>
                    <img src={Poco} alt="" />
                    <p>Poco X3</p>
                </div>
            </NavLink>
            <NavLink to={'/'}>
                <div className='item'>
                    <img src={Amazfit} alt="" />
                    <p>Amazfit T-Rex</p>
                </div>
            </NavLink>
            <NavLink to={'/'}>
                <div className='item'>
                    <img src={Air} alt="" />
                    <p>Mi Air 2</p>
                </div>
            </NavLink>
            <NavLink to={'/'}>
                <div className='item'>
                    <img src={Robo} alt="" />
                    <p>Roborock S5 Max</p>
                </div>
            </NavLink>
            <NavLink to={'/'}>
                <div className='item'>
                    <img src={Haylou} alt="" />
                    <p>Haylou GT-2</p>
                </div>
            </NavLink>
            <NavLink to={'/'}>
                <div className='item'>
                    <img src={Smart} alt="" />
                    <p>Mi Smart Band 5</p>
                </div>
            </NavLink>
            <NavLink to={'/'}>
                <div className='item'>
                    <img src={Holder} alt="" />
                    <p>Mi Auto Wireless Charger 20W</p>
                </div>
            </NavLink>
            <NavLink to={'/'}>
                <div className='item'>
                    <img src={Compressor} alt="" />
                    <p>Mi Air Compressor</p>
                </div>
            </NavLink>
            <NavLink to={'/'}>
                <div className='item'>
                    <img src={Dermast} alt="" />
                    <p>Deerma ST800</p>
                </div>
            </NavLink>
        </div>
    </section>
  )
}

export default New