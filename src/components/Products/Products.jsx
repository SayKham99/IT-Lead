import {Link, NavLink} from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./products.scss"
import Terms from "../Terms/Terms";
import {useGetProductsQuery} from "../../Redux";
import Loader from "../Loader/Loader";
import {useDispatch} from "react-redux";
import {add} from "../../Redux/cartSlice";

export default function Products() {
    const {data = [], isLoading} = useGetProductsQuery();
    const dispatch = useDispatch()
    const Add = (prod) => {
        dispatch(add(prod))
    }
    if (isLoading) return <div><Loader/></div>

    return (
          <section id="products">
              <div className="products-wrapper">
                  <div className="title">
                      <h2>Smartphones</h2>
                  </div>

                  <div className='products'>
                      {data.map(item=>(
                            <div className='card'>
                                <NavLink to={"/products" + "/" + `${item.id}`} className='card__header'>
                                    <img src={item.image} alt=""/>
                                </NavLink>
                                <div className='card__body'>
                                    <p className='name'>Iphone 11</p>
                                    <div className='pricewrap'>
                                        <p className='price'>{item.price} sum</p>
                                        <div className='icon__wrap' onClick={() => Add(item)}>
                                            <ShoppingCartIcon className="icon"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      ))}

                  </div>

                  {/*<div className="products">
                      <div className="product-items">
                          {data.map(item =>
                                <div className="product-item" key={item.id}>
                                    <Link to={"/products" + "/" + `${item.id}`}>
                                        <div className="product-img">
                                            <img src={item.image}/>
                                        </div>
                                    </Link>
                                    <div className="product-name">
                                        <h4>{item.title}</h4>
                                    </div>
                                    <div className="product-price">
                                        <p>{item.price}</p>
                                    </div>
                                    <div className="add-cart" onClick={() => Add(item)}>
                                        <ShoppingCartIcon className="cart-icon"/>
                                    </div>
                                </div>
                          )}
                      </div>
                  </div>*/}
              </div>
              <div>
                  <Terms/>
              </div>
          </section>
    )
}
