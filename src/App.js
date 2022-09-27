import React from "react";
import './App.css';
import Nav from './Nav';
import About from './pages/About';
import Professional from './pages/Professional';
import Casual from './pages/Casual';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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
                </Routes>
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
