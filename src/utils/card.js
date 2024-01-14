import { fetchOptions } from "../assets/data";
import image from "../assets/card-images/empty.jpg";
import userImage from "../assets/card-images/Sample_User_Icon.png";

export function resolveCardImage(card) {
  const cardImage = card.image ? `${import.meta.env.VITE_IMAGE_URL}/card/${card.image}`: image;
  const resolvedCard = { ...card, image: cardImage };
  return resolvedCard;
}

export function getProfilePic(imgPath) {
  const profilePic = imgPath ? `${import.meta.env.VITE_IMAGE_URL}/profile/${imgPath}` : userImage;
  return profilePic;
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
      const response = await fetch(`${import.meta.env.VITE_API_URL}/sport?limit=10`, fetchOptions);
      const res = await response.json();
      if (response.status !== 200) throw new Error(res);
      resolve(res.sports);
    } catch (error) {
      reject(error);
    }
  }
);

export const fetchTeams = () => new Promise(
  async function (resolve, reject) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/team?limit=10`, fetchOptions);
      const res = await response.json();
      if (response.status !== 200) throw new Error(res.message);
      resolve(res.teams);
    } catch (error) {
      reject(error.message);
    }
  }
);

export const fetchPlayers = () => new Promise(
  async function (resolve, reject) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/player`, fetchOptions);
      const res = await response.json();
      if (response.status !== 200) throw new Error(res.message);
      const { cards } = res;
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