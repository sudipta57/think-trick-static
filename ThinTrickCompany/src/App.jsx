import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'

import Footer from './components/Footer'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web from './components/services/Web'
import Android from './components/services/Android'
import Contact from './components/Contact'
import Digital_Marketing from './components/services/Digital_Marketing'
import Graphics_and_Logo from './components/services/Graphics_and_Logo'

// import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About/>} /> 
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/web-service" element={<Web/>} />
          <Route path="/android" element={<Android/>} />
          <Route path="/digital-marketing" element={<Digital_Marketing/>} />
          <Route path="/graphics-and-logo" element={<Graphics_and_Logo/>} />
          <Route path="/contact" element={<Contact/>} />


      </Routes>
      <Footer/>
    </BrowserRouter>
    {/* <Navbar/>
<Home/>
    <Footer/> */}
    

    </>
  );
}

export default App
