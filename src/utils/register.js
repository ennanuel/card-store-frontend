import { fetchOptions } from "../assets/data";

export const register = (data) => new Promise(
    async function (resolve, reject) {
        try {
            const body = JSON.stringify(data);
            const requestOptions = { ...fetchOptions, method: "POST", body };
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, requestOptions);
            const res = await response.json();
            resolve({ ...res, status: response.status });
        } catch (error) {
            console.error(error);
            reject();
        }
    }
);