import React from 'react'
import Carousel from './Carousel/carousel'
import Category from './Category/category'
import New from './NewProducts/new'
import HomeAbout from './About/homeAbout'

import './home.scss'
function Home() {
  return (
    <section className='home'>
        {/*<Carousel/>*/}
        <h1>ПРОДУКЦИЯ XIAOMI</h1>
        <hr />
        <Category/>
        <h2>НОВИНКИ XIAOMI</h2>
        <hr />
        {/*<New/>*/}
        <h2>НОВИНКИ XIAOMI</h2>
        <hr />
        {/*<HomeAbout/>*/}
    </section>
  )
}

export default Home