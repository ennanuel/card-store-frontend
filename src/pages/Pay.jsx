import React, { useEffect, useMemo, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/payment/CheckoutForm';
import CartDetails from '../components/payment/CartDetails';
import { Loading, Error } from '../components/fetch_states';
import '../styles/checkout.scss';
import { createPaymentIntent } from '../utils/payment';
import { useSelector } from 'react-redux';

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
