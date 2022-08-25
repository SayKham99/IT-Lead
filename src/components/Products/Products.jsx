import {Link} from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./products.scss"
import Terms from "../Terms/Terms";

export default function Products(){

    const data = [
        {
            img: require("../../assets/Apple-iPhone-12-PNG-Photo.png"),
            name: "I Phone 13 Pro Midnight",
            price: "13, 200,000 sum",

        },
        {
            img: require("../../assets/Apple-iPhone-11-PNG-Image.png"),
            name: "I Phone 13 Pro Midnight",
            price: "13, 200,000 sum",

        },
        {
            img: require("../../assets/Unboxing MacBook Pro 13 pollici 2017 con Touch Bar.jpeg"),
            name: "I Phone 13 Pro Midnight",
            price: "13, 200,000 sum",

        },
        {
            img: require("../../assets/Macbook.png"),
            name: "I Phone 13 Pro Midnight",
            price: "13, 200,000 sum",

        },
        {
            img: require("../../assets/Apple-iPhone-12-PNG-Transparent-Picture.png"),
            name: "I Phone 13 Pro Midnight",
            price: "13, 200,000 sum",

        },
        {
            img: require("../../assets/Unboxing MacBook Pro 13 pollici 2017 con Touch Bar.jpeg"),
            name: "I Phone 13 Pro Midnight",
            price: "13, 200,000 sum",

        },
        {
            img: require("../../assets/Macbook.png"),
            name: "I Phone 13 Pro Midnight",
            price: "13, 200,000 sum",

        },
        {
            img: require("../../assets/pngegg (1).png"),
            name: "I Phone 13 Pro Midnight",
            price: "13, 200,000 sum",

        },
        {
            img: require("../../assets/Photo-Camera-PNG-File.png"),
            name: "I Phone 13 Pro Midnight",
            price: "13, 200,000 sum",

        },
        {
            img: require("../../assets/Transparent-Camera-PNG.png"),
            name: "I Phone 13 Pro Midnight",
            price: "13, 200,000 sum",

        },
        {
            img: require("../../assets/Nikon-Camera-PNG.png"),
            name: "I Phone 13 Pro Midnight",
            price: "13, 200,000 sum",

        },
    ]
    return(
        <section id="products">
            <div className="products-wrapper">
                <div className="file-nest">
                <Link to="/">
                 <HomeIcon className="home-icon"/>
                </Link>/
                <Link to="/products">
                 <p className="category">All Products</p>
                </Link>/
                 <p>Smartphones</p>
               </div>
                <div className="title">
                    <h2>Smartphones</h2>
                </div>

                <div className="products">
                    <div className="product-items">
                        {data.map(item =>
                            <div className="product-item">
                                <Link to="/item">
                                <div className="product-img">
                                    <img src={item.img} />
                                </div>
                                </Link>
                                <div className="product-name">
                                    <h4>{item.name}</h4>
                                </div>
                                <div className="product-price">
                                    <p>{item.price}</p>
                                </div>
                                <div className="add-cart">
                                    <ShoppingCartIcon  className="cart-icon"/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <Terms />
            </div>
        </section>
    )
}
