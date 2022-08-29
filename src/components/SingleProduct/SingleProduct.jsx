import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";
import "./single.scss"
import {NavLink, Link, Outlet} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {useGetProductQuery} from "../../Redux";
import Loader from "../Loader/Loader";


export default function SingleItem({match}) {
    const postID = window.location.pathname
    const {data = [], isLoading, isError} = useGetProductQuery(postID)

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    if (isError) return <h1 style={{color: "green"}}>Loading</h1>
    if (isLoading) return <div><Loader/></div>
    return (
          <section id="single-item">
              <div className="single-wrapper">
                  <div className="file-nest">
                      <Link to="/">
                          <HomeIcon className="home-icon"/>
                      </Link>
                      <p>{data.title}</p>
                  </div>
                  <div className="item-body">
                      <div className="item-title">
                          <h2>{data.title}</h2>
                      </div>
                      <div className="item-desc" key={data.id}>
                          <div className="item-left">
                              <Swiper
                                    style={{
                                        "--swiper-navigation-color": "#000",
                                        "--swiper-pagination-color": "#000",
                                        "max-width": "250px"
                                    }}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    navigation={false}
                                    thumbs={{swiper: thumbsSwiper}}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                              >
                                  <div className="phone1">
                                      <SwiperSlide style={{maxWidth: "350px", margin: "20px 0"}}>
                                          <img src={data.image} style={{maxWidth: "280px"}}/>
                                      </SwiperSlide>
                                      <SwiperSlide style={{maxWidth: "350px"}}>
                                          <img src={data.image} style={{maxWidth: "280px"}}/>
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
                                          <img src={data.image} style={{maxWidth: "50px"}}/>
                                      </SwiperSlide>
                                      <SwiperSlide style={{maxWidth: "80px"}}>
                                          <img src={data.image} style={{maxWidth: "50px"}}/>
                                      </SwiperSlide>

                                  </div>
                              </Swiper>
                          </div>
                          <div className="item-right">
                              <div className="item-describtion">
                                  <p>{data.description}</p>
                              </div>
                              <div className="device-color">
                                  <div className="color1"></div>
                                  <div className="color2"></div>
                                  <div className="color3"></div>
                              </div>
                              <div className="pricing">
                                  <h4>{data.price}</h4>
                              </div>
                              <div className="buy">
                                  <Link to="forms">
                                      <button>Buy</button>
                                  </Link>
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
                      <Outlet/>
                  </div>
              </div>
          </section>
    )
}
