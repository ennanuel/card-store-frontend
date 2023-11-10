import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/site-logo.png';

const Success = () => {
    return (
        <div className="payment-success flex-col">
            <img src={logo} alt="logo" />
            <h3>Payment Successful</h3>
            <p>You have successfully made ordered the items, thank you for using card store.</p>
            <Link to="/orders/all/0" className="sell-btn action-btn relative">View Orders</Link>
        </div>
    )
};

export default Success
