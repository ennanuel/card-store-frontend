import { fetchOptions } from "../assets/data";

export const fetchUserInfo = (user_id) => new Promise(
    async function (resolve, reject) {
        try {
            const URL = `${import.meta.env.VITE_API_URL}/user/single/${user_id}`;
            const response = await fetch(URL, fetchOptions);
            const res = await response.json();
            if (response.status !== 200) throw new Error(res.message);
            resolve(res);
        } catch (error) {
            reject(error.message)
        }
    }
)

export const fetchUser = () => new Promise(
    async function (resolve, reject) {
        try {
            const URL = `${import.meta.env.VITE_API_URL}/auth`;
            const response = await fetch(URL, fetchOptions);
            const res = await response.json();
            if (response.status !== 200) throw new Error(res.message);
            if (!res) throw new Error('User not found');
            resolve(res);
        } catch (error) {
            reject(error.message)
        }
    }
)

export const editUserInfo = (values) => new Promise(
    async function (resolve, reject) {
        const headers = new Headers();
        const body = new FormData();
        for (let [key, value] of Object.entries(values)) {
            if (!value) continue;
            body.append(key, value);
        };
        headers.append('Access-Control-Allow-Origin', import.meta.env.VITE_API_URL);
        const requestOptions = { ...fetchOptions, method: 'PUT', headers, body };
        const response = await fetch(`${import.meta.env.VITE_API_URL}/user/edit`, requestOptions);
        const res = await response.json();
        if (response.status !== 200) reject(res);
        resolve();
    }
)