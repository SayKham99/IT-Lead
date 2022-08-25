import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SubNav from "./components/SubNav/SubNav";
import Hero from "./components/Hero/Hero";

import About from "./components/About/About";
import Gurantee from "./components/Gurantee/Gurantee";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      {/* <About/> */}
      {/* <Gurantee /> */}
      {/* <Footer /> */}
    </div>

    // <BrowserRouter>
    //   <Navbar />
    //   <SubNav />

    //   <Routes>
    //     <Route path="/" exact element={<Hero />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
