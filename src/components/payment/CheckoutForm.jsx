import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Link, useNavigate } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../utils/payment';
import { fetchUserCart } from '../../state/features/cartSlice';

const CheckoutForm = () => {
    const { _id } = useSelector(state => state.user);
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!stripe || !elements) return;
            setIsProcessing(true);
            const { error } = await stripe.confirmPayment({
                elements,
                redirect: 'if_required',
                confirmParams: {
                    payment_method: 'card'
                }
            });
            if (error) throw error;
            return checkout();
        } catch (error) {
            console.error(error);
            setMessage(error.message);
        } finally {
            setIsProcessing(false);
        }
    }

    async function checkout() {
        try {
            await createOrder(_id);
            dispatch(fetchUserCart(_id));
            navigate('/success');
        } catch (error) {
            navigate('/error');
        }
    }

    return (
        <form id="payment-form" className="payment-form" onSubmit={handleSubmit}>
            <div className="flex-row top">
                <h3>Pay With Card</h3>
                <Link to="/cart" className="close-btn flex-center"><GrClose /></Link>
            </div>
            <PaymentElement />
            <p className="error-msg">{message}</p>
            <button className='pay-btn' disabled={isProcessing} id="submit">
                <span id="button-text">
                    { isProcessing ? 'Processing' : 'Make payment' }
                </span>
            </button>
        </form>
    )
};

export default CheckoutForm
