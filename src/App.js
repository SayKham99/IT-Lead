import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SubNav from "./Components/SubNav/SubNav";
import Home from "./Components/Home/Home";
import Form from "./Components/BuyForm/Form/form";

function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <SubNav />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/form" exact element={<Form />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
