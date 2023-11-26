import React from 'react';
import { HiCreditCard } from 'react-icons/hi2';

const Checkout = ({ checkOut, showBtn }) => {
    if (!showBtn) return;
    return (
        <div className="checkout-btn flex">
            <button onClick={checkOut} className="cart_btn check_out_btn flex-row ai-center jc-center">
                <HiCreditCard size={20} />
                <b>Check Out</b>
            </button>
        </div>
    )
};

export default Checkout
