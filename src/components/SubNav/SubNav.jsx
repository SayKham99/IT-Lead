import Img1 from "../../assets/Apple-iPhone-12-PNG-Transparent-Picture.png";
import {Link} from "react-router-dom";
import "./subnav.scss";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HeadphonesIcon from '@mui/icons-material/Headphones';
export default function SubNav(){

    const data = [
        {
            name: "Smartphones",
            img1: require("../../assets/Apple-iPhone-12-PNG-Transparent-Picture.png"),
            img2: require("../../assets/Apple-iPhone-11-PNG-Image.png"),
            img3: require("../../assets/Apple-iPhone-11-PNG-HD.png"),
            img4: require("../../assets/Apple-iPhone-12-PNG-Photo.png"),
            title1: "I Phone 13",
            title2: "I Phone 12 Pro",
            title3: "I Phone 11",
            title4: "I Phone 13 Pro",
            price1: '11, 120,000',
            price2: "8, 549,300",
            price3: "7, 500,000",
            price4: "5, 300, 250",
            icon: <SmartphoneIcon />
        },
        {
            name: "Laptops",
            img1: require("../../assets/Macbook-PNG-Pic.png"),
            img2: require("../../assets/Macbook.png"),
            img3: require("../../assets/Macbook (1).png"),
            img4: require("../../assets/Unboxing MacBook Pro 13 pollici 2017 con Touch Bar.jpeg"),
            title1: "Macbook Pro 13",
            title2: "Macbook Pro 13",
            title3: "Macbook Air",
            title4: "Macbook Pro 15",
            price1: '14, 120,000',
            price2: "14, 549,300",
            price3: "12, 500,000",
            price4: "20, 300, 250",
            icon: <LaptopIcon />
        },
        {
            name: "Cameras",
            img1: require("../../assets/Nikon-Camera-PNG.png"),
            img2: require("../../assets/Photo-Camera-PNG-File.png"),
            img3: require("../../assets/Transparent-Camera-PNG.png"),
            img4: require("../../assets/Camera-Icon-PNG.png"),
            title1: "Nikon Camera",
            title2: "Nicon Pro",
            title3: "Nicon Ultra",
            title4: "NiconPro",
            price1: '11, 120,000',
            price2: "8, 549,300",
            price3: "7, 500,000",
            price4: "5, 300, 250",
            icon: <CameraAltIcon />
        },
        {
            name: "Accessuars",
            img1: require("../../assets/pngegg.png"),
            img2: require("../../assets/pngegg (1).png"),
            img3: require("../../assets/Apple-iPhone-11-PNG-HD.png"),
            img4: require("../../assets/Apple-iPhone-12-PNG-Photo.png"),
            title1: "I Phone 13 charger",
            title2: "Air Pods",
            title3: "I Phone 11",
            title4: "I Phone 13 Pro",
            price1: '210, 120',
            price2: "1, 549,300",
            price3: "7, 500,000",
            price4: "5, 300, 250",
            icon: <HeadphonesIcon />
        },

    ];

    return(
        <section id="subnav">
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
                                                    <img src={item.img1} />
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
                                                    <img src={item.img2} />
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
                                                    <img src={item.img3} />
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
                                                    <img src={item.img4} />
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
                            <Link to="products">
                                <button>All Products</button>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
