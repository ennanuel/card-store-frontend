import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PageInfo } from '../components';
import {
  addQuantityToItem,
  addQuantityToUserCartItem,
  removeFromUserCart,
  removeItemFromCart,
  subtractQuantityFromItem,
  subtractQuantityFromUserCartItem
} from '../state/features/cartSlice';
import { CartItems, CartHeader, PricingInfo, Checkout } from '../components/cart';
import '../styles/cart.scss';

const Cart = () => {
  const { cart: { _id, items, total, shippingCost }, user: { _id: user_id } } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function increaseQuantity(item) { 
    const amount = 1;
    dispatch(addQuantityToUserCartItem({ amount: 1, cart_id: _id, user_id, item }));
    dispatch(addQuantityToItem({ card_id: item.card_id, amount }));
  };
  function decreaseQuantity(item) { 
    const amount = 1;
    dispatch(subtractQuantityFromUserCartItem({ amount: 1, cart_id: _id, user_id, item }));
    dispatch(subtractQuantityFromItem({ card_id: item.card_id, amount }));
  };
  function removeItem(item) { 
    dispatch(removeFromUserCart({ item, user_id, cart_id: _id }));
    dispatch(removeItemFromCart({ card_id: item.card_id, }));
  };
  function checkOut() {
    const data = { cart_id: _id };
    navigate({ pathname: '/pay', state: data });
  }
  
  return (
    <div className="cart">
      <PageInfo />
      <table className="full-w full-border">
        <CartHeader />
        <CartItems
          items={items}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
        />
        <PricingInfo
          shippingCost={shippingCost}
          total={total}
        />
      </table>
      <Checkout checkOut={checkOut} showBtn={items.length >= 1} />
    </div>
  )
}

export default Cart
