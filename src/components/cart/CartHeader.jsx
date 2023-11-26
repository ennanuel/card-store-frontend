import React from 'react'

const CartHeader = () => {
    return (
        <>
            <colgroup>
                <col className="title-col" />
                <col className="qty-col" />
                <col className="actions-col remove-for-mobile" />
                <col className="price-col" />
                <col className="total-col" />
                <col className="remove-col" />
            </colgroup>
            <thead>
                <tr className="grey-col">
                    <th className="first-row"><b>ITEM</b></th>
                    <th><b>QTY</b></th>
                    <th></th>
                    <th><b>PRICE</b></th>
                    <th><b>TOTAL</b></th>
                    <th></th>
                </tr>
            </thead>
        </>
    )
};

export default CartHeader
