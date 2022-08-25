import React, {useEffect} from 'react'
import "./category.scss";
import All from '../../../assets/all.jpg'
import Accesories from '../../../assets/accsessoires.jpg'
import Audio from '../../../assets/audio.jpg'
import Auto from '../../../assets/auto.jpg'
import Power from '../../../assets/power.jpg'
import SmartHome from '../../../assets/smart-home.jpg'
import SmartPhone from '../../../assets/smartphones.jpg'
import {NavLink} from 'react-router-dom';

const category = [{id: 1, name: 'Смартфоны', url: SmartPhone}, {
    id: 2, name: 'Аксессуары', url: Accesories
}, {id: 3, name: 'Умный дом', url: SmartHome}, {
    id: 4, name: 'Аудио', url: Audio
}, {id: 5, name: 'Внешний аккумулятор', url: Power}, {
    id: 6, name: 'В авто', url: Auto
}, {id: 7, name: 'Все товары', url: All}]

function Category() {
    return (<section className='category'>
        <div className='wrapper'>
            {category.map(type => (<NavLink to={'/'} className='link' key={type.id}>
                <div className='items' id={type.id === 7 ? 'seven' : ''}>
                    <p>{type.name}</p>
                    <img src={type.url} alt={type.id}/>
                </div>
            </NavLink>))}
        </div>
        <NavLink to={'/'}>
            <p className='all'>Все товары</p>
        </NavLink>
    </section>)
}

export default Category