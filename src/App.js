import React from "react";
import './App.css';
import Nav from './Nav';
import About from './pages/About';
import Professional from './pages/Professional';
import Casual from './pages/Casual';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home"
import Footer from "./Footer";
import WorkForUs from "./pages/WorkForUs";

function App(){
    return(
        <Router>
            <div className="App">
                <Nav />
                
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/professional" element={<Professional/>} />
                    <Route path="/casual" element={<Casual/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/services" element={<Services/>} />
                    <Route path="/contactus" element={<ContactUs/>} />
                    <Route path="/workforus" element={<WorkForUs/>} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;