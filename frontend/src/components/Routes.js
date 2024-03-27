import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from '../common/Home';
import Login from '../common/Login';
import Footer from './Footer';

const RoutesComponent = () => {
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    {/* Add more routes as needed */}
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default RoutesComponent;
