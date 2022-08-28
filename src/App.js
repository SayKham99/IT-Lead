import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SubNav from "./components/SubNav/SubNav";
import Scroll from "./scroll";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import SingleItem from "./components/SingleProduct/SingleProduct";
import Description from "./components/SingleProduct/Description";
import Character from "./components/SingleProduct/Character";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Gurantee from "./components/Gurantee/Gurantee";
import Form from "./components/BuyForm/Form/form";
import {useGetProductsQuery} from "./Redux";
import Loader from "./components/Loader/Loader";

function App() {
    const {data = [], isLoading} = useGetProductsQuery();
    console.log(data)
    return (<BrowserRouter>
              <Navbar/>
              <SubNav/>
              <Scroll/>
              <Routes>
                  <Route path="/" exact element={<Home/>}/>
                  <Route path="all" element={<Products/>}/>
                  <Route path="products/:id" element={<SingleItem/>}>
                      <Route index element={<Description/>}/>
                      <Route path="description" element={<Description/>}/>
                      <Route path="character" element={<Character/>}/>
                      <Route path="forms" element={<Form/>}/>
                  </Route>
                  <Route path='about' element={<About/>}/>
                  <Route path='garant' element={<Gurantee/>}/>
              </Routes>
              <Footer/>
          </BrowserRouter>);
}

export default App;
