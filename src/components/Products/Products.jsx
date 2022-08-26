import {Link} from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./products.scss"
import Terms from "../Terms/Terms";
import {useGetProductsQuery} from "../../Redux";

export default function Products() {
    const {data = []} = useGetProductsQuery();

    return (
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
                                    <div className="add-cart">
                                        <ShoppingCartIcon className="cart-icon"/>
                                    </div>
                                </div>
                          )}
                      </div>
                  </div>
              </div>
              <div>
                  <Terms/>
              </div>
          </section>
    )
}
