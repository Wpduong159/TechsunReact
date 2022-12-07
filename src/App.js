import React from "react";
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from "./components/Footer";
import ScrollToTop from './ScrollToTop';
import About from './pages/About';
import Professional from './pages/Professional';
import Casual from './pages/Casual';
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home"
import NotFoundPage from "./pages/NotFoundPage";


function App(){
    return(
        <Router basename="/techsunreact">
            <div className="App">
                <CssBaseline />

                <Nav />

                <ScrollToTop>

                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/professional" element={<Professional/>} />
                        <Route path="/casual" element={<Casual/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/services" element={<Services/>} />
                        <Route path="/contactus" element={<ContactUs/>} />
                        <Route path="*" element={<NotFoundPage/>} />
                    </Routes>

                </ScrollToTop>

                <Footer />
            </div>
        </Router>
    );
}


export default App;