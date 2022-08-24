import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SubNav from "./components/SubNav/SubNav";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import SingleItem from "./components/SingleProduct/SingleProduct";

function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <SubNav />
        <Routes>
            <Route path="/" exact element={<Hero />} />
            <Route path="products" element={<Products />} />
            <Route path="item" element={<SingleItem />}/>
        </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
