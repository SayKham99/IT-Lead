import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SubNav from "./Components/SubNav/SubNav";
import Home from "./Components/Home/Home";
import Form from "./Components/BuyForm/Form/form";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import SingleItem from "./components/SingleProduct/SingleProduct";

function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <SubNav />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/form" exact element={<Form />} />
            <Route path="products" element={<Products />} />
            <Route path="item" element={<SingleItem />}/>
        </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
