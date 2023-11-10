import { fetchOptions } from "../assets/data";

export const login = (data) => new Promise(
    async function (resolve, reject) {
        try {
            const body = JSON.stringify(data);
            const requestOptions = { ...fetchOptions, method: "POST", body };
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, requestOptions);
            const res = await response.json();
            if (response.status !== 200) throw new Error(res.message);
            resolve();
        } catch (error) {
            reject(error.message)
        }
    }
);