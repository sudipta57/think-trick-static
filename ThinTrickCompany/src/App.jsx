import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Android from "./components/services/Android";
import Digital_Marketing from "./components/services/Digital_Marketing";
import Graphics_and_Logo from "./components/services/Graphics_and_Logo";
import Web from "./components/services/Web";
import Team from "./components/Team/Team";

// import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/ourteam" element={<Team />} />
          <Route path="/web-service" element={<Web />} />
          <Route path="/android" element={<Android />} />
          <Route path="/digital-marketing" element={<Digital_Marketing />} />
          <Route path="/graphics-and-logo" element={<Graphics_and_Logo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Navbar/>
<Home/>
    <Footer/> */}
    </>
  );
}

export default App;
