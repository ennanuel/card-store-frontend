import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PageInfo } from '../components';
import { NothingFound } from '../components/fetch_states';
import { Link } from 'react-router-dom';
import { MdDelete, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { HiCreditCard } from 'react-icons/hi2';
import { addQuantityToItem, addQuantityToUserCartItem, removeFromUserCart, removeItemFromCart, subtractQuantityFromItem, subtractQuantityFromUserCartItem } from '../state/features/cartSlice';
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
        <colgroup>
          <col style={{ width: '40%' }} />
          <col style={{ width: '5%' }} />
          <col style={{ width: '15%' }} />
          <col style={{ width: '16.67%' }} />
          <col style={{ width: '16.67%' }} />
          <col style={{ width: '6.67%' }} />
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
        {
          items.length < 1 ?
            <tbody className="flex ai-center jc-center">
              <tr>
                <td colSpan={6}>
                  <NothingFound text="Cart is empty" />
                </td>
              </tr>
            </tbody> :
            <tbody className="items">
              {
                items.map( (item, i) => (
                  <tr key={i} className={`${ i % 2 > 0 && 'grey-col'}`}>
                    <td className="first-row">
                      <span>Card - </span>
                      <Link to={`/card/${item.card_id}/${item.names.first}+${item.names.last}`} className="names">
                        <b>{`${item.names.first} ${item.names.middle} ${item.names.last}`}</b>
                      </Link>
                    </td>
                    <td className="quantity">
                      <span>{item.quantity}</span>
                    </td>
                    <td className="quantity">
                      <button
                        onClick={() => increaseQuantity(item)}
                        className="flex flex-center"
                      >
                        <MdKeyboardArrowUp size={25} />
                      </button>
                      <button
                        onClick={() => decreaseQuantity(item)}
                        className="flex flex-center"
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
                ) )
              }
            </tbody>
        }
        <tbody className="total">
          <tr>
            <td colSpan={4} className="total-title">Shipping Handling:</td>
            <td colSpan={2}>${shippingCost?.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan={4} className="total-title">Order Total:</td>
            <td colSpan={2}>${total?.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <div className="checkout-btn flex">
        {
          items.length >= 1 &&
            <button onClick={checkOut} className="cart_btn check_out_btn flex-row ai-center jc-center">
              <HiCreditCard size={20} />
              <b>Check Out</b>
            </button>
        }
      </div>
    </div>
  )
}

export default Cart
