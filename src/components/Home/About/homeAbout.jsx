import React from 'react'
import Users from '../../../assets/icons/users-solid.svg'
import Cart from '../../../assets/icons/cart-shopping-solid.svg'
import HandShake from '../../../assets/icons/handshake-solid.svg'
import Star from '../../../assets/icons/star-solid.svg'
import ShopPic from '../../../assets/fonhome.jpg'

import './homeabout.scss'

const descr = [{
    id: 1,
    title: 'Фирменный магазин Xiaomi в Ташкенте',
    detail: 'В нашем магазине представлен большой ассортимент самой разной\n' + 'оригинальной продукции Xiaomi, начиная от смартфонов и заканчивая электрическими\n' + 'велосипедами. Также мы располагаем сервис центром, занимающимся ремонтом и обслуживанием\n' + 'смартфонов и прочей электроники Xiaomi. Ждем вас в нашем магазине',
    button: 'О НАШЕМ МАГАЗИНЕ'
}];

const services = [{
    id: 1,
    title: 'С нами возможно все',
    service: [{id: 1, name: 'Опытный персонал', icon: 'fa-solid fa-users'}, {
        id: 2,
        name: 'Большой перечень услуг',
        icon: 'fa-solid fa-handshake'
    }, {id: 3, name: 'Простота заказа', icon: 'fa-solid fa-cart-shopping'}, {
        id: 4,
        name: 'Оригинальная техника Xiaomi',
        icon: 'fa-solid fa-star'
    },]
}]


function homeAbout() {
    return (<section className='homeabout'>
        <div className="wrapper">
            <div className='details'>
                {descr.map((type) => (<div className="descr" key={type.id}>
                          <h1 className='descr__title'>{type.title}</h1>
                          <p className='descr__detail'>{type.detail}</p>
                          <button className='descr__btn'>{type.button}</button>
                      </div>))}
                {services.map(type => (<div className="services" key={type.id}>
                          <h1>{type.title}</h1>
                          <div className='service_wrap'>
                              {type.service.map(service => (<div className='service' key={service.id}>
                                        <div className='icon'>
                                            <i id='icons' className={service.icon}></i>
                                        </div>
                                        <p>{service.name}</p>
                                    </div>))}
                          </div>
                      </div>))}
            </div>
            <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17180.97696840471!2d72.34969292629563!3d40.76662542394325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced91ccce77f9%3A0xf07c16e5c23a5945!2sNavruz%20Mall!5e0!3m2!1suz!2s!4v1661318617066!5m2!1suz!2s"
                  style={{border: 0, width: '100%', height: '500px'}} allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>)
}

export default homeAbout