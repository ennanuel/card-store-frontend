import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { GrCart } from 'react-icons/gr';

const CartBtn = ({ pathname, quantity }) => {
    const hide = useMemo(() => pathname.includes('/cart'), [pathname]);
    if (hide) return;
    return (
        <Link to="/cart" className="cart-btn relative flex flex-center">
            <GrCart size={20} />
            {quantity > 0 && <span className="cart-number absolute">{quantity}</span>}
        </Link>
    )
};

export default CartBtn
