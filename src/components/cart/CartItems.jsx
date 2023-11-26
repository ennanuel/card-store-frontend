import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowUp, MdKeyboardArrowDown, MdDelete } from 'react-icons/md';
import { NothingFound } from '../fetch_states';

const CartItems = ({ items = [], increaseQuantity, decreaseQuantity, removeItem }) => {
    if (items?.length < 1) return (
        <tbody className="flex ai-center jc-center">
            <tr>
                <td colSpan={6}>
                    <NothingFound text="Cart is empty" />
                </td>
            </tr>
        </tbody>
    );

    return (
        <tbody className="items">
            {
                items.map((item, i) => (
                    <tr key={i} className={`${i % 2 > 0 && 'grey-col'}`}>
                        <td className="first-row">
                            <span>Card - </span>
                            <Link to={`/card/${item.card_id}/${item.names.first}+${item.names.last}`} className="names">
                                <b>{`${item.names.first} ${item.names.middle} ${item.names.last}`}</b>
                            </Link>
                        </td>
                        <td className="quantity">
                            <span>{item.quantity}</span>
                        </td>
                        <td className="quantity h-full flex-row ai-center jc-center flex-wrap">
                            <button
                                onClick={() => increaseQuantity(item)}
                                className="flex-row ai-center jc-center"
                            >
                                <MdKeyboardArrowUp size={25} />
                            </button>
                            <button
                                onClick={() => decreaseQuantity(item)}
                                className="flex-row ai-center jc-center"
                            >
                                <MdKeyboardArrowDown size={25} />
                            </button>
                        </td>
                        <td>${item.price}</td>
                        <td>${(item.price * item.quantity)?.toFixed(2)}</td>
                        <td>
                            <button
                                onClick={() => removeItem(item)}
                                className="cart_btn remove flex flex-center"
                            >
                                <MdDelete size={25} />
                            </button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    )
};

export default CartItems
