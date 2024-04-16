import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from '../common/Home';
import Login from '../common/Login';
import Footer from './Footer';
import SignupPage from '../common/SignupPage';
import Landing from './Landing';
import Cart from './Cart';
import Header from './Header';

const RoutesComponent = () => {
    return (
        <div>
            <Router>
                {/* <NavBar /> */}
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/landing" element={<Landing />} />
                    <Route path="/cart" element={<Cart />} />
                    {/* Add more routes as needed */}
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default RoutesComponent;
