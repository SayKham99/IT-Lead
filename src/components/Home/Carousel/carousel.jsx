import React from 'react'
import { NavLink } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import First from '../../../assets/cpf.jpg'
import Second from '../../../assets/cps.jpg'
import Third from '../../../assets/cpt.jpg'
import Fourth from '../../../assets/cpfr.jpg'

import './carousel.scss'

function CarouselWrap() {
    return (<section className='wrapper'>
        <Carousel swipeable={true} showArrows={false} showStatus={false} showThumbs={false} autoPlay infiniteLoop={true}>
            <NavLink to={'/'} className='carousel'>
                <img src={First} alt="" />
            </NavLink>
            <NavLink to={'/'} className='carousel'>
                <img src={Second} alt="" />
            </NavLink>
            <NavLink to={'/'} className='carousel'>
                <img src={Third} alt="" />
            </NavLink>
            <NavLink to={'/'} className='carousel'>
                <img src={Fourth} alt="" />
            </NavLink>
        </Carousel>
    </section>)
}

export default CarouselWrap