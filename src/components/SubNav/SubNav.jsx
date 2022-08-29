import {NavLink} from "react-router-dom";
import "./subnav.scss";
import Arrow from '../../assets/icons/arrow-right.svg'

const data = [{
    id: 1, title: 'Smartfonlar', products: [{
        id: 1,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 2,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 3,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 4,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 5,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 6,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 7,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    },]
}, {
    id: 2, title: 'Power Banklar', products: [{
        id: 1,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/mi11lite/uvo0mfnntqjabv4am3wyrjkznpuxxsso0knslehl-260x260.jpg'
    }, {
        id: 2,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 3,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 4,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 5,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 6,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 7,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    },]
}, {
    id: 3, title: 'Naushniklar', products: [{
        id: 1,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 2,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 3,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 4,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 5,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 6,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 7,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    },]
}, {
    id: 4, title: 'NoteBooklar', products: [{
        id: 1,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 2,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 3,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 4,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 5,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 6,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 7,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    },]
}, {
    id: 5, title: 'Birbalolar', products: [{
        id: 1,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 2,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 3,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 4,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 5,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 6,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 7,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    },]
}, {
    id: 6, title: 'Akksesuarlar', products: [{
        id: 1,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 2,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 3,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 4,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 5,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 6,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 7,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    },]
}, {
    id: 8, title: 'Hammasi', products: [{
        id: 1,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 2,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 3,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 4,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 5,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 6,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    }, {
        id: 7,
        name: 'Iphone XS Max',
        price: '400$',
        img: 'https://mi-store.uz/image/cache/catalog/smart/xiaomimi10lite5g/2-260x260.jpg'
    },]
},

];

export default function SubNav() {
    return (<section className='subnav'>
        <div className='wrapper'>
            {data.map(categ => (
                  <div className='nav' key={categ.id}>
                      <p className='title'>{categ.title}</p>
                      <span>|</span>
                      <div className='dropdown'>
                          <div className='itemwrap'>
                              {categ.products.map(prod => (
                                    <NavLink to={"/products" + "/" + `${prod.id}`} key={prod.id} className='item'>
                                        <img src={prod.img} alt=""/>
                                        <p className='name'>{prod.name}</p>
                                        <p className='price'>{prod.price}</p>
                                    </NavLink>
                              ))}
                              <NavLink className='iconwrap' style={{
                                  border: '1px solid grey',
                                  borderRadius: '100%',
                                  width: '40px',
                                  height: '40px'
                              }} to={categ.title}>
                                  <img src={Arrow} alt=""/>
                              </NavLink>
                          </div>
                      </div>
                  </div>
            ))}
        </div>
    </section>
          /*<section id="subnav">
              <div className="subnav-wrapper">
                  <ul className="items">
                      {data.map(item =>
                            <li className="item">
                                <div className="dropdown">
                                    <button className="dropbtn">
                                        <span className="icons">
                                            {item.icon}
                                        </span>
                                        {item.name}
                                    </button>
                                    <div className="dropdown-content">
                                        <div className="content-wrapper">
                                            <Link to="/item">
                                                <div className="content-cart">
                                                    <div className="content-img">
                                                        <img src={item.img1}/>
                                                    </div>
                                                    <div className="content-title">
                                                        <h2>{item.title1}</h2>
                                                    </div>
                                                    <div className="pricing">
                                                        <p>{item.price1}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="/item">
                                                <div className="content-cart">
                                                    <div className="content-img">
                                                        <img src={item.img2}/>
                                                    </div>
                                                    <div className="content-title">
                                                        <h2>{item.title2}</h2>
                                                    </div>
                                                    <div className="pricing">
                                                        <p>{item.price2}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="/item">
                                                <div className="content-cart">
                                                    <div className="content-img">
                                                        <img src={item.img3}/>
                                                    </div>
                                                    <div className="content-title">
                                                        <h2>{item.title3}</h2>
                                                    </div>
                                                    <div className="pricing">
                                                        <p>{item.price3}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="content-cart">
                                                <div className="content-img">
                                                    <img src={item.img4}/>
                                                </div>
                                                <div className="content-title">
                                                    <h2>{item.title4}</h2>
                                                </div>
                                                <div className="pricing">
                                                    <p>{item.price4}</p>
                                                </div>
                                            </div>
                                            <div className="content-cart">
                                                <Link to="/products">
                                                    <button className="links">
                                                        <KeyboardArrowRightIcon className="link"/>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                      )}
                      <li className="item">
                          <div className="all-products">
                              <Link to="all">
                                  <button>All Products</button>
                              </Link>
                          </div>
                      </li>
                  </ul>
              </div>
          </section>*/)
}
