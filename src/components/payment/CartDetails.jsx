import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { convertNumberToPriceFormat } from '../../utils/site';

const CartDetails = () => {
    const { items, total, shippingCost } = useSelector(state => state.cart);
    const totalPrice = useMemo(() => convertNumberToPriceFormat(total.toFixed(2)), [total]);
    const convertedItems = useMemo(() => items.map(item => ({
        ...item,
        total: convertNumberToPriceFormat((item.price * item.quantity).toFixed(2))
    })), [items]);

    return (
        <div className="cart-details flex-col">
            <p>
                <span>You are about to pay for the following items </span>
                <span className="warning">(Do not use your real card details, use this <b>demo card</b> instead).</span>
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
                    <p><b>${shippingCost}</b></p>
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
