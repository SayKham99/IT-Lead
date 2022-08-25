import React from 'react'
import "./category.scss";
import All from '../../../assets/all.jpg'
import Accesories from '../../../assets/accsessoires.jpg'
import Audio from '../../../assets/audio.jpg'
import Auto from '../../../assets/auto.jpg'
import Power from '../../../assets/power.jpg'
import SmartHome from '../../../assets/smart-home.jpg'
import SmartPhone from '../../../assets/smartphones.jpg'
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <section className='category'>
      <div className='wrapper'>
        <NavLink to={'/'} className='link'>
          <div className='items'>
            <p>Смартфоны</p>
            <img src={SmartPhone} alt="" />
          </div>
        </NavLink>
        <NavLink to={'/'} className='link'>
          <div className='items'>
            <p>Аксессуары</p>
            <img src={Accesories} alt="" />
          </div>
        </NavLink>
        <NavLink to={'/'} className='link'>
          <div className='items'>
            <p>Умный дом</p>
            <img src={SmartHome} alt="" />
          </div>
        </NavLink>
        <NavLink to={'/'} className='link'>
          <div className='items'>
            <p>Аудио</p>
            <img src={Audio} alt="" />
          </div>
        </NavLink>
        <NavLink to={'/'} className='link'>
          <div className='items'>
            <p>Внешний аккумулятор</p>
            <img src={Power} alt="" />
          </div>
        </NavLink>
        <NavLink to={'/'} className='link'>
          <div className='items'>
            <p>В авто</p>
            <img src={Auto} alt="" />
          </div>
        </NavLink>
        <NavLink to={'/'} className='link'>
          <div className='items'>
            <p>Все товары</p>
            <img src={All} alt="" />
          </div>
        </NavLink>
      </div>
    </section>
  )
}

export default Category