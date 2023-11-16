import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';

const CartBtn = ({ pathname, quantity }) => {
    const hide = useMemo(() => pathname.includes('/cart'), [pathname]);
    if (hide) return;
    return (
        <Link to="/cart" className="cart-btn relative flex-row ai-center jc-center">
            <BsCart3 size={20} />
            {quantity > 0 && <span className="cart-number absolute">{quantity}</span>}
        </Link>
    )
};

export default CartBtn
