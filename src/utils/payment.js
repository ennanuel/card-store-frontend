import { fetchOptions } from "../assets/data";

export const createPaymentIntent = (user_id) => new Promise(
    async function (resolve, reject) {
        try {
            const URL = `${import.meta.env.VITE_API_URL}/pay/${user_id}`;
            const options = { ...fetchOptions, method: 'POST' };
            const response = await fetch(URL, options);
            const res = await response.json();
            if (response.status !== 200) throw new Error(res.message);
            resolve(res.clientSecret);
        } catch (error) {
            console.error(error.message);
            reject();
        }
    }
)

export const createOrder = (user_id) => new Promise(
    async function (resolve, reject) {
        try {
            const URL = `${import.meta.env.VITE_API_URL}/order/create/${user_id}`;
            const options = { ...fetchOptions, method: 'POST' };
            const response = await fetch(URL, options);
            const res = await response.json();
            if (response.status !== 200) throw new Error(res.message);
            resolve();
        } catch (error) {
            console.error(error.message);
            reject();
        }
    }
)