import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SubNav from "./components/SubNav/SubNav";

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
