import React from 'react'
import Users from '../../../assets/icons/users-solid.svg'
import Cart from '../../../assets/icons/cart-shopping-solid.svg'
import HandShake from '../../../assets/icons/handshake-solid.svg'
import Star from '../../../assets/icons/star-solid.svg'
import ShopPic from '../../../assets/fonhome.jpg'

import './homeabout.scss'

function homeAbout() {
    return (<section className='homeabout'>
        <div className="wrapper">
            <div className='details'>
                <div className="descr">
                    <h1 className='descr__title'>Фирменный магазин Xiaomi в Ташкенте</h1>
                    <p className='descr__detail'>В нашем магазине представлен большой ассортимент самой разной
                        оригинальной продукции Xiaomi, начиная от смартфонов и заканчивая электрическими
                        велосипедами. Также мы располагаем сервис центром, занимающимся ремонтом и обслуживанием
                        смартфонов и прочей электроники Xiaomi. Ждем вас в нашем магазине)</p>
                    <button className='descr__btn'>О НАШЕМ МАГАЗИНЕ</button>
                </div>
                <div className="services">
                    <h1>С нами возможно все</h1>
                    <div className='service_wrap'>
                        <div className='service'>
                            <div className='icon'>
                                <i className='icons fa-solid fa-users'></i>
                            </div>
                            <p>Опытный персонал</p>
                        </div>
                        <div className='service'>
                            <div className='icon'>
                                <i className='icons fa-solid fa-handshake'></i>
                            </div>
                            <p>Большой перечень услуг </p>
                        </div>
                        <div className='service'>
                            <div className='icon'>
                                <i className='icons fa-solid fa-cart-shopping'></i>
                            </div>
                            <p>Простота заказа</p>
                        </div>
                        <div className='service'>
                            <div className='icon'>
                                <i className='icons fa-solid fa-star'></i>
                            </div>
                            <p>Оригинальная техника Xiaomi</p>
                        </div>
                    </div>
                </div>
            </div>
            <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17180.97696840471!2d72.34969292629563!3d40.76662542394325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced91ccce77f9%3A0xf07c16e5c23a5945!2sNavruz%20Mall!5e0!3m2!1suz!2s!4v1661318617066!5m2!1suz!2s"
                  style={{border: 0, width: '100%', height: '500px'}} allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>)
}

export default homeAbout