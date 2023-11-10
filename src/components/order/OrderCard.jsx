import React, { useMemo } from 'react'
import { Link } from 'react-router-dom';
import { convertNumberToPriceFormat, convertToDateFormat } from '../../utils/site';

const OrderCard = ({ _id, cards, amount, destination, status, createdAt }) => {
    const orderPrice = useMemo(() => convertNumberToPriceFormat(amount.toFixed(2)), []);
    const orderDate = useMemo(() => convertToDateFormat(createdAt), [])

    return (
        <Link to={`/order/${_id}`} className={`flex-col relative ${status?.toLowerCase()}`}>
            <div className="top flex-row">
                <p className="order-date">{orderDate}</p>
                <p className="status"><b>{status}</b></p>
            </div>
            <p>
                <span>Items: </span>
                <b className="names">{cards}</b>
            </p>
            <div className="bottom flex-row">
                <p className="amount">${orderPrice}</p>
                <p className="dest">{destination}</p>
            </div>
        </Link>
    )
};

export default OrderCard
