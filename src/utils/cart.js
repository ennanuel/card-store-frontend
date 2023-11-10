import { fetchOptions } from "../assets/data";

export const fetchCart = (user_id) => new Promise(
    async function (resolve, reject) {
        try {
            const URL = `${import.meta.env.VITE_API_URL}/cart/${user_id}`;
            const response = await fetch(URL, fetchOptions);
            const res = await response.json();
            if (response.status !== 200) throw new Error(res.message);
            resolve(res);
        } catch (error) {
            console.error(error);
            reject(error.message);
        }
    }
)

export async function addItemToUserCart ({ cart_id, user_id, item }, { rejectWithValue }) {
    try {
        const URL = `${import.meta.env.VITE_API_URL}/cart/item/add/${cart_id}/${user_id}`;
        const body = JSON.stringify({ amount: item.quantity, card_id: item.card_id });
        const options = { ...fetchOptions, method: 'PUT', body };
        const response = await fetch(URL, options);
        const res = await response.json();
        if (response.status !== 200) throw new Error(res.message);
        return res;
    } catch (error) {
        console.error(error);
        return rejectWithValue(item);
    }
};

export async function removeItemFromUserCart ({ cart_id, user_id, item }, { rejectWithValue }) {
    try {
        const URL = `${import.meta.env.VITE_API_URL}/cart/item/remove/${cart_id}/${user_id}`;
        const body = JSON.stringify({ card_id: item.card_id });
        const options = { ...fetchOptions, method: 'PUT', body };
        const response = await fetch(URL, options);
        const res = await response.json();
        if (response.status !== 200) throw new Error(res.message);
        return res;
    } catch (error) {
        console.error(error);
        return rejectWithValue(item);
    }
};

export async function addQuantityToCartItem ({ amount, cart_id, user_id, item }, { rejectWithValue }) {
    try {
        const URL = `${import.meta.env.VITE_API_URL}/cart/quantity/add/${cart_id}/${user_id}`;
        const body = JSON.stringify({ amount, card_id: item.card_id });
        const options = { ...fetchOptions, method: 'PUT', body };
        const response = await fetch(URL, options);
        const res = await response.json();
        if (response.status !== 200) throw new Error(res.message);
        return res;
    } catch (error) {
        console.error(error);
        return rejectWithValue(item);
    }
}

export async function subtractQuantityFromCartItem ({ amount, cart_id, user_id, item }, { rejectWithValue }) {
    try {
        const URL = `${import.meta.env.VITE_API_URL}/cart/quantity/remove/${cart_id}/${user_id}`;
        const body = JSON.stringify({ amount, card_id: item.card_id });
        const options = { ...fetchOptions, method: 'PUT', body };
        const response = await fetch(URL, options);
        const res = await response.json();
        if (response.status !== 200) throw new Error(res.message);
        return res;
    } catch (error) {
        console.error(error);
        return rejectWithValue(item);
    }
};

export function setIsInCartToTrue(card) {
    const patch = { isInCart: true };
    Object.assign(card, patch)
}

export function setIsInCartToFalse(card) {
    const patch = { isInCart: false };
    Object.assign(card, patch)
}