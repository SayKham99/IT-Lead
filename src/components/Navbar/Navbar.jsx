import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AirPods from "../../assets/airpods.png"
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./nav.scss";
import {useSelector} from "react-redux";

const StyledBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
        right: -3, top: 13, border: `2px solid ${theme.palette.background.paper}`, padding: '0 4px',
    },
}));

export default function Navbar() {

    const product = useSelector(state => state.cart)
    console.log(product)
/*
    const totalPrice = product.cart.reduce((acc,product) => acc += product.price, 0)
*/

    const [open, setOpen] = useState(false);

    const changeOpenMenu = () => {
        setOpen(open ? false : true);
    }


    const [sticky, setSticky] = useState(false);

    const changePosiiton = function () {
        if (window.scrollY <= 500) return setSticky(true); else return setSticky(false);
    }

    useEffect(() => {
        changePosiiton();
    }, []);

    return (<section id="navbar">
              <div className="nav-wrapper">
                  <div className="logo">
                      <Link to="/">
                          <h2>Logo Here</h2>
                      </Link>
                  </div>
                  <div className={open ? "openMenu" : "info"}>
                      <p><span> <LocalPhoneIcon style={{fontSize: "16px"}}/> </span> +998999883500</p>
                      <p><span><TelegramIcon style={{fontSize: "16px"}}/></span>arabboyev01</p>
                      <p><span><MailIcon style={{fontSize: "16px"}}/></span>abbosarabboyev9@gmail.com</p>
                      <p></p>
                  </div>
                  <div className="inputs">
                      <div className="search-bar">
                          <input type="search" placeholder="Search ..."/>
                          <SearchIcon className="search-icon"/>
                      </div>
                      <div className="cart">
                          <div className="dropdown">
                              <button className="dropbtn">
                                  <IconButton aria-label="cart">
                                      <StyledBadge badgeContent={product.totalQuantity !== 0 ? product.totalQuantity : 0} color="secondary">
                                          <ShoppingCartIcon style={{color: "#ccc"}}/>
                                      </StyledBadge>
                                  </IconButton>
                              </button>
                              <div className="dropdown-content">
                                  {product.cart.map(item => (<Link to="/item">
                                            <div className="cart-items">
                                                <div className="single-item">
                                                    <div className="imgage-wrapper">
                                                        <img src={item.image}/>
                                                    </div>
                                                    <div className="describtion">
                                                        <h5>{item.title}</h5>
                                                        <p>Apple Airpods Noise Cancellation</p>
                                                    </div>
                                                    <div className="pricing">
                                                        <p>{item.price} x {item.quantity} = {item.totalPrice}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>))}
                                  <div className="footer-price">
                                      <div className="price-wrapper">
                                          <p>All</p>
                                          <p> {Math.round(product.totalAmount)} sum</p>
                                      </div>
                                      <div className="buy-price">
                                          <CallMissedOutgoingIcon/>
                                          Go to Buy
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="hamburger" onClick={changeOpenMenu}>
                      {open ? <CloseIcon className="hamburgerIcon"/> : <MenuIcon className="hamburgerIcon"/>}
                  </div>
              </div>
          </section>)
}
