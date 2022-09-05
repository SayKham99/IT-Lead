import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SubNav from "./components/SubNav/SubNav";
import Scroll from "./scroll";
import Home from "./components/Home/Home";
import ProductsWrap from "./components/Products/ProductsWrap";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Gurantee from "./components/Gurantee/Gurantee";
import Form from "./components/BuyForm/Form/form";
import Product from "./components/Product/product";
import Description2 from "./components/Product/Decsription/description";
import Character2 from "./components/Product/Character/character";

function App() {

    return (<BrowserRouter>
        <Navbar/>
        <SubNav/>
        <Scroll/>
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/products' element={<ProductsWrap/>}/>
            <Route path='product/:id' element={<Product/>}>
                <Route index element={<Description2/>}/>
                <Route path='description2' element={<Description2/>}/>
                <Route path='character2' element={<Character2/>}/>
            </Route>
            <Route path='/form' element={<Form/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/garant' element={<Gurantee/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>);
}

export default App;