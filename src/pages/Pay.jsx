import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { GrClose } from 'react-icons/gr';
import CheckoutForm from '../components/payment/CheckoutForm';
import CartDetails from '../components/payment/CartDetails';
import { Loading, Error } from '../components/fetch_states';
import { createPaymentIntent } from '../utils/payment';
import { useSelector } from 'react-redux';
import '../styles/checkout.scss';

const Pay = () => {
    const { _id } = useSelector(state => state.user)
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const [error, setError] = useState(false);
    const options = useMemo(() => clientSecret ? { clientSecret } : { }, [clientSecret]);

    useEffect(() => {
        setStripePromise(loadStripe(import.meta.env.VITE_STRIPE_KEY));
    }, []);

    useEffect(() => {
        createPaymentIntent(_id)
            .then(res => setClientSecret(res))
            .catch(() => setError(true))
    }, []);

    return (
        <div className='checkout'>
            <div className='container'>
                <section>
                    <CartDetails />
                </section>
                <section>
                    <Link to="/cart" className="close-btn absolute flex-center"><GrClose /></Link>
                    {
                        stripePromise && options.clientSecret ?
                            <Elements stripe={stripePromise} options={options}>
                                <CheckoutForm />
                            </Elements> :
                            error ?
                                <Error text="Something went wrong" /> :
                                <Loading text="Preparing payment options" />
                    }
                </section>
            </div>
        </div>
    )
}

export default Pay
