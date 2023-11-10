import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addQuantityToUserCartItem, addToUserCart, removeFromUserCart, subtractQuantityFromUserCartItem } from '../../state/features/cartSlice';
import { cardStoreApi } from '../../state/api';
import { setIsInCartToFalse, setIsInCartToTrue } from '../../utils/cart';

const AddToCart = ({ quantity, price, isInCart, outOfStock, isYours, card_id }) => {
    const { items, _id: cart_id, user_id, loading } = useSelector(state => state.cart);
    const cartItem = useMemo(() => items.find(item => item?.card_id === card_id) || {}, [items]);
    const [itemQuantity, setItemQuantity] = useState(cartItem.quantity || 1);
    const dispatch = useDispatch();

    function addQuantity() {
        const newQuantity = Math.min(quantity, itemQuantity + 1);
        if (isInCart || cartItem.card_id) dispatch(addQuantityToUserCartItem({ item: cartItem, cart_id, user_id, amount: 1 }));
        setItemQuantity(newQuantity);
    };
    function subtractQuantity() { 
        const newQuantity = Math.max(1, itemQuantity - 1);
        if (isInCart || cartItem.card_id) dispatch(subtractQuantityFromUserCartItem({ item: cartItem, cart_id, user_id, amount: 1 }));
        setItemQuantity(newQuantity);
    };
    function addToCart() {
        if (isYours) return;
        const item = { card_id, quantity: itemQuantity };
        dispatch(addToUserCart({ item, cart_id, user_id }))
            .then(dispatch(cardStoreApi.util.updateQueryData('getCard', card_id, setIsInCartToTrue)))
            .catch(error => console.error(error));
    }
    async function removeFromCart() {
        dispatch(removeFromUserCart({ item: cartItem, cart_id, user_id }))
            .then(dispatch(cardStoreApi.util.updateQueryData('getCard', card_id, setIsInCartToFalse)))
            .catch(error => console.error(error));
    }
    return (
        <form className="payment flex-row">
            <div className="price">
                <p><b>Price</b></p>
                <p className="price-num">
                    <sup>$</sup> <span>{price}</span>
                </p>
            </div>
            {
                outOfStock ?
                    <p>Out of Stock</p> :
                    <div className={`relative add-to-cart flex-col ${loading && 'disable'}`}>
                        <div className="quantity flex-row">
                            <input
                                onChange={(e) => setItemQuantity(e.target.value)}
                                type="number"
                                min={1}
                                max={quantity}
                                id="quantity"
                                value={itemQuantity}
                            />
                            <button onClick={addQuantity} type="button" className="item-btn flex ai-center jc-center">
                                <AiOutlinePlus size={20} />
                            </button>
                            <button onClick={subtractQuantity} type="button" className="item-btn flex ai-center jc-center">
                                <AiOutlineMinus size={20} />
                            </button>
                        </div>
                        {
                            isYours ?
                                <Link className="sell-btn action-btn relative">Edit Card</Link> :
                                (isInCart) ?
                                    <button type="button" onClick={removeFromCart} className="sell-btn action-btn remove-btn relative">Remove From Cart</button> :
                                    <button type="button" onClick={addToCart} className="sell-btn action-btn relative">Add To Cart</button>
                        }
                        
                    </div>
            }
        </form>
    )
};

export default AddToCart