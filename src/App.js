import React from "react";
import './App.css';
import Nav from './Nav';
import About from './pages/About';
import Professional from './pages/Professional';
import Casual from './pages/Casual';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Footer from "./Footer";

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
                    <Route path="/Services" element={<Services/>} />
                    <Route path="/Contact Us" element={<ContactUs/>} />
                </Routes> 
                <Footer />
            </div>
        </Router>
    );
}

const Home = () => (
    <div>
        <h1>Home Page</h1>
    </div>
)

export default App;