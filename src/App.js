import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.jsx";
import SubNav from "./components/SubNav/SubNav";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import SingleItem from "./components/SingleProduct/SingleProduct";
import Description from "./components/SingleProduct/Description";
import Character from "./components/SingleProduct/Character";
import Scroll from "./scroll";

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
        </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
