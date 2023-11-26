import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { convertNumberToPriceFormat } from '../../utils/site';

const CartDetails = () => {
    const { items, total, shippingCost } = useSelector(state => state.cart);
    const [showCard, setShowCard] = useState(false);
    const [shippingPrice, totalPrice] = useMemo(() => [shippingCost, total].map(price => convertNumberToPriceFormat(price.toFixed(2))), [total, shippingCost]);
    const convertedItems = useMemo(() => items.map(item => ({
        ...item,
        total: convertNumberToPriceFormat((item.price * item.quantity).toFixed(2))
    })), [items]);

    return (
        <div className="cart-details flex-col">
            <p onClick={() => setShowCard(!showCard)}>
                {
                    showCard ?
                        <p>
                            <b>Demo Card</b><br />
                            <span><b className="warning">Card Number: </b>4242 4242 4242 4242</span><br />
                            <span><b className="warning">Expiration: </b>02/28</span><br />
                            <span><b className="warning">CVC: </b>208</span><br />
                            <span><b className="warning">Country: </b>Nigeria</span><br />
                        </p> :
                        <>
                            <span>You are about to pay for the following items </span>
                            <span className="warning">(Do not use your real card details, use this <b>demo card</b> instead).</span>
                        </>
                }
            </p>
            <ul className="flex-col">
                {
                    convertedItems.map(({ names, total, quantity }, i) => (
                        <li key={i} className="flex-col relative">
                            <div className="flex-row item">
                                <p className="item-name">Card - <b>{names.first} {names.middle} {names.last}</b></p>
                                <p><b>x{quantity}</b></p>
                            </div>
                            <p><b>${total}</b></p>
                        </li>
                    ))
                }
                <li className="flex-col relative">
                    <div className="flex-row item">
                        <p className="item-name"><b>Shipping Cost</b></p>
                        <p><b>--</b></p>
                     </div>
                    <p><b>${shippingPrice}</b></p>
                </li>
            </ul>
            <div className="price flex-col">
                <p><b>Total</b></p>
                <h3><sup>$</sup> <span>{totalPrice}</span></h3>
            </div>
        </div>
    )
}

export default CartDetails
