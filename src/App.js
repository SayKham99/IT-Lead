import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SubNav from "./Components/SubNav/SubNav";
import Scroll from "./scroll";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import SingleItem from "./Components/SingleProduct/SingleProduct";
import Description from "./Components/SingleProduct/Description";
import Character from "./Components/SingleProduct/Character";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Gurantee from "./Components/Gurantee/Gurantee";


function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <SubNav />
          <Scroll />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="item" element={<SingleItem />}>
                <Route index element={<Description />} />
                <Route path="description" element={<Description />}/>
                <Route path="character" element={<Character />} />
            </Route>
            <Route path='about' element={ <About/> } />
            <Route path='garant' element={ <Gurantee/> } />
        </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
