import { fetchOptions } from "../assets/data";

export function resolveCardImage(card) {
  const cardImage = card.image ? `${import.meta.env.VITE_IMAGE_URL}/card/${card.image}`: null;
  const resolvedCard = { ...card, image: cardImage };
  return resolvedCard;
}

export const fetchCards = ({ fetchType, searchValue }) => new Promise(
  async function (resolve, reject) {
    try {
      const fetchURL = `${import.meta.env.VITE_API_URL}/player/type/${fetchType}/${searchValue}`;
      const response = await fetch(fetchURL, fetchOptions);
      const res = await response.json();
      if (response.status !== 200) throw res;
      const cards = res.map(resolveCardImage);
      resolve(cards);
    } catch (error) {
      reject(error);
    }
  }
);

export const fetchSports = () => new Promise(
  async function (resolve, reject) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/sport`, fetchOptions);
      const res = await response.json();
      if (response.status !== 200) throw new Error(res);
      resolve(res);
    } catch (error) {
      reject(error);
    }
  }
);

export const fetchTeams = () => new Promise(
  async function (resolve, reject) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/team`, fetchOptions);
      const res = await response.json();
      if (response.status !== 200) throw new Error(res.message);
      resolve(res);
    } catch (error) {
      reject(error.message);
    }
  }
);

export const fetchPlayers = () => new Promise(
  async function (resolve, reject) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/player/`, fetchOptions);
      const res = await response.json();
      if (response.status !== 200) throw new Error(res.message);
      const cards = res.map(resolveCardImage);
      resolve(cards);
    } catch (error) {
      reject(error.message);
    }
  }
);

export const addCard = (values, user_id) => new Promise(
  async function (resolve, reject) {
    try {
      const headers = new Headers();
      const body = new FormData();
      for (let [key, value] of Object.entries(values)) {
        if (!value) continue;
        body.append(key, value);
      };
      headers.append('Access-Control-Allow-Origin', import.meta.env.VITE_API_URL);
      const requestOptions = { ...fetchOptions, method: 'POST', headers, body };
      const response = await fetch(`${import.meta.env.VITE_API_URL}/player/create/${user_id}`, requestOptions);
      const res = await response.json();
      if (response.status !== 200) throw new Error(res.message);
      resolve();
    } catch (error) {
      console.error(error.message);
      reject(error.message);
    }
  }
);