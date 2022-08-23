import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SubNav from "./Components/SubNav/SubNav";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <SubNav />
        <Routes>
            <Route path="/" exact element={<Hero />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
