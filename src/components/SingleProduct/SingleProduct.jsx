import {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "./single.scss"
import {NavLink,Link, Outlet} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import iPhone from "../../assets/Apple-iPhone-12-PNG-Photo.png"
import iPhone1 from "../../assets/Apple-iPhone-11-PNG-HD.png";
import Description from "./Description"
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function SingleItem(){
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return(
        <section id="single-item">
            <div className="single-wrapper">
                <div className="file-nest">
                    <Link to="/">
                        <HomeIcon className="home-icon"/>
                    </Link>/
                    <Link to="/products">
                        <p className="category">All Products</p>
                    </Link>/
                    <p className="products">Smartphones</p>
                    / <p>I phone 13 Pro</p>
                </div>
                <div className="item-body">
                    <div className="item-title">
                        <h2>I Phone 13 Pro</h2>
                    </div>
                    <div className="item-desc">
                        <div className="item-left">
                            <Swiper
                                style={{
                                    "--swiper-navigation-color": "#000",
                                    "--swiper-pagination-color": "#000",
                                    "max-width" : "250px"
                                }}
                                spaceBetween={10}
                                slidesPerView={1}
                                navigation={false}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                <div className="phone1">
                                <SwiperSlide style={{maxWidth: "350px", margin: "20px 0"}}>
                                    <img src={iPhone }style={{maxWidth: "280px"}}/>
                                </SwiperSlide>
                                <SwiperSlide style={{maxWidth: "350px"}}>
                                    <img src={iPhone1} style={{maxWidth: "280px"}}/>
                                </SwiperSlide>
                                </div>
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={1}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                            >
                                <div className="phone2">
                                <SwiperSlide style={{maxWidth: "80px"}}>
                                    <img src={iPhone} style={{maxWidth: "50px"}}/>
                                </SwiperSlide>
                                <SwiperSlide style={{maxWidth: "80px"}}>
                                    <img src={iPhone1}  style={{maxWidth: "50px"}}/>
                                </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                        <div className="item-right">
                            <div className="item-describtion">
                                <p>Piston type portable air compressor is designed to inflate the wheels of cars, motorcycles, bicycles, balls and mattresses. Increased engine power, as well as an efficient cooling system, can reduce the pumping time by up to 20%. The built-in battery allows the pump to be used without mains power supply. One charge is enough to inflate up to eight bicycle tires, forty footballs, six motorcycle wheels and up to five car wheels 17 with a radius of 2.0 to 2.5 bar.</p>
                            </div>
                            <div className="device-color">
                                <div className="color1"></div>
                                <div className="color2"></div>
                                <div className="color3"></div>
                            </div>
                            <div className="pricing">
                                <h4>11 200 000  sum</h4>
                            </div>
                            <div className="buy">
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="categ-buttons">
                <NavLink to="description" id="button" activeClass="active">
                Description
                </NavLink>
                <NavLink to="character" id="button" activeClass="active">
                Character
                </NavLink>
            </div>
            <div className="character-desc">
                <div className="character-wrapper">
                    <Outlet />
                </div>
            </div>
        </section>
    )
}
