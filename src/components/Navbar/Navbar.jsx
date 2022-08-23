import {useState} from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AirPods from "../../assets/airpods.png"
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./nav.scss";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function Navbar(){

    const [open, setOpen] = useState(false);

    const changeOpenMenu = () => {
        setOpen(open ? false : true);
    }

    return(
        <section id="navbar">
            <div className="nav-wrapper">
            <div className="logo">
                <h2>Logo Here</h2>
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
                                <StyledBadge badgeContent={4} color="secondary">
                                    <ShoppingCartIcon style={{color: "#ccc"}}/>
                                </StyledBadge>
                            </IconButton>
                        </button>
                        <div className="dropdown-content">
                            <div className="cart-items">
                                <div className="single-item">
                                    <div className="imgage-wrapper">
                                        <img src={AirPods} />
                                    </div>
                                    <div className="describtion">
                                        <h5>Airpods Apple</h5>
                                        <p>Apple Airpods Noise Cancellation</p>
                                    </div>
                                    <div className="quantity">
                                        <p style={{color: "orangered"}}>x 2</p>
                                    </div>
                                    <div className="pricing">
                                        <p>Price: 500,000 sum</p>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-price">
                                <div className="price-wrapper">
                                    <p>
                                        All
                                    </p>
                                    <p>
                                        500, 000 sum
                                    </p>
                                </div>
                                <div className="buy-price">
                                    <CallMissedOutgoingIcon />
                                    Go to Buy
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="hamburger" onClick={changeOpenMenu}>
                    {open ? <CloseIcon className="hamburgerIcon"/> : <MenuIcon className="hamburgerIcon"/> }
                </div>
            </div>
        </section>
    )
}
