import {} from "react";
import "./App.css";
import "./output.css";
import { NavbarSimple } from "./Components/NavbarSimple";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import Packages from "./Pages/Packages";
import Package2 from "./Pages/Package2";
import Packages3 from "./Pages/Packages3";
import Packages4 from "./Pages/Packages4";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarSimple />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages2" element={<Package2 />} />
          <Route path="/packages3" element={<Packages3 />} />
          <Route path="/packages4" element={<Packages4 />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
