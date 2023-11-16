import { footerNavigate, NAV_LIST, socialsList } from '../assets/data';

const PRICE_TITLES = ['Cheaper Cards', 'Mid-Range Card', 'Premium Cards'];
const MONTHS_ARRAY = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DEFAULT_PATHNAME = "Card Store";
const PATH_REGEX = /^\w(\w|\W)+\w$/i;
const GET_NAVBAR_MENU_TYPES = {
  name: convertNameToMenu,
  team: convertTeamToMenu,
  sport: convertSportToMenu,
  rating: convertRatingToMenu,
  price: convertPricesToMenu
};
const GET_FOOTER_MENU_TYPES = {
  shortcut: convertShortcutsToMenu,
  popular: convertPopularPlayersToMenu,
  recent: convertRecentPlayersToMenu,
  premium: convertPremiumPlayersToMenu,
  team: convertTeamToMenu,
  social: convertSocialsToMenu
};

function createMenu(title, links) {
  return { title, links };
};
function convertPlayerToMenuItem(player) {
  const link = `/card/${player._id}/${player.names.first}+${player.names.last}`;
  const name = `${player.names.first} ${player.names.middle} ${player.names.last}`;
  return { name, link };
};
function convertTeamToMenuItem(team) {
  const { name } = team;
  const link = `/cards/team/${name.replace(' ', '+')}`;
  return { name, link };
};
function convertSportToMenuItem({ name }) {
  const link = `/cards/sport/${name.replace(' ', '+')}`;
  return { name, link };
};
function convertLinksToMenuItem({ link, name }) {
  const itemName = `Cards ${name}`;
  return { name: itemName, link };
};
function convertSocialToMenuItem({ link, name }) {
  return { link, name, socialLink: true };
}
function convertShortcutsToMenu() {
  const menuTitle = 'Football Cards';
  const menuLinks = NAV_LIST.map(convertLinksToMenuItem);
  const createdMenu = createMenu(menuTitle, menuLinks);
  return createdMenu;
};
function convertSocialsToMenu() {
  const menuTitle = 'Socials';
  const menuLinks = socialsList.map(convertSocialToMenuItem);
  const createdMenu = createMenu(menuTitle, menuLinks);
  return createdMenu;
}
function convertPopularPlayersToMenu({players}) { 
  const menuTitle = 'Popular Players';
  const filteredAndSlicedPlayers = players.filter(({ rating }) => rating >= 90).slice(0, 10);
  const sortPlayersFromHighest = filteredAndSlicedPlayers.sort((a, b) => a.rating - b.rating, 0);
  const menuLinks = sortPlayersFromHighest.map(convertPlayerToMenuItem);
  const createdMenu = createMenu(menuTitle, menuLinks);
  return createdMenu;
};
function convertRecentPlayersToMenu({players}) { 
  const menuTitle = 'Recent Uploads';
  const slicedPlayers = players.slice(0, 10);
  const menuLinks = slicedPlayers.map(convertPlayerToMenuItem);
  const createdMenu = createMenu(menuTitle, menuLinks);
  return createdMenu;
};
function convertNameToMenu({ players }) {
  const popularPlayersMenu = convertPopularPlayersToMenu({players});
  const recentPlayersMenu = convertRecentPlayersToMenu({players});
  const createdMenus = [recentPlayersMenu, popularPlayersMenu];
  return createdMenus;
};
function convertRatingToMenu({ players }) {
  const maxRating = 100;
  let createdMenus = [];
  for (let minRating = 0; minRating < maxRating; minRating += 25) {
    const newMaxRating = minRating + 25
    const playersWithinRatingRange = players.filter(({ rating }) => rating <= newMaxRating && rating > minRating).slice(0, 10);
    const menuItems = playersWithinRatingRange.map(convertPlayerToMenuItem);
    const menuTitle = `From ${minRating} - ${maxRating}`;
    const createdMenu = createMenu(menuTitle, menuItems);
    createdMenus.push(createdMenu);
  }
  return createdMenus;
};
function convertPriceToMenu({ players, minPrice, maxPrice, menuTitle }) {
  const playersWithinPriceRange = players.filter(({ price }) => price >= minPrice && price < maxPrice);
  const menuItems = playersWithinPriceRange.map(convertPlayerToMenuItem);
  const createdMenu = createMenu(menuTitle, menuItems);
  return createdMenu;
};
function convertPremiumPlayersToMenu({ players }) {
  const minPrice = 20000;
  const maxPrice = 9999999999;
  const menuTitle = 'Premium Cards';
  const createdMenu = convertPriceToMenu({ players, minPrice, maxPrice, menuTitle });
  return createdMenu;
};
function convertPricesToMenu({ players }) {
  let i = 0;
  let createdMenus = [];
  const maxPrice = 10000;
  const maxPriceThird = Math.round(maxPrice / 3);
  while (i <= 2) {
    const iThird = i / 3;
    const minPrice = Math.round(maxPrice * iThird);
    const newMaxPrice = i === 2 ? 999999999 : minPrice + maxPriceThird;
    const menuTitle = PRICE_TITLES[i];
    const createdMenu = convertPriceToMenu({ players, menuTitle, minPrice, maxPrice: newMaxPrice });
    createdMenus.push(createdMenu);
    i++;
  }
  return createdMenus;
};
function convertTeamToMenu({teams}) {
  const menuTitle = 'Top Teams';
  const menuLinks = teams.map(convertTeamToMenuItem);
  const createdMenu = createMenu(menuTitle, menuLinks);
  return createdMenu;
};
function convertSportToMenu({sports}) {
  const menuTitle = 'Popular Sports';
  const menuLinks = sports.map(convertSportToMenuItem);
  const createdMenu = createMenu(menuTitle, menuLinks);
  return createdMenu;
};
function getNavBarMenus ({ players = [], teams = [], sports = [], menuType }) {
  const getMenuBasedOnType = GET_NAVBAR_MENU_TYPES[menuType];
  if (!getMenuBasedOnType) return [];
  const menus = getMenuBasedOnType({ players, teams, sports });
  return menus;
};

export function convertNavListToMenu({ players, sports, teams }) {
  function convertItemToMenuItem({ menuType, name, link }) {
    const navBarMenus = getNavBarMenus({ players, teams, sports, menuType });
    const subMenus = /sport|team/.test(menuType) ? [navBarMenus] : navBarMenus;
    return { name, link, subMenus };
  }
  const menus = NAV_LIST.map(convertItemToMenuItem);
  return menus;
};

export function convertFooterNavToMenu({ players, teams }) {
  function getFooterMenus (menuType) {
    const getFooterMenuBasedOnType = GET_FOOTER_MENU_TYPES[menuType];
    if (!getFooterMenuBasedOnType) return { title: 'Wrong type', link: [] };
    const menus = getFooterMenuBasedOnType({ players, teams });
    return menus;
  };
  const menus = footerNavigate.map(getFooterMenus);
  return menus;
};

function separateDecimal(num) {
  const splitNumber = num.toString().split('.')
  return splitNumber.length !== 2 ? [...splitNumber, '00']: splitNumber;
};
function convertStringToPriceInThousands(num) {
  let priceArray = []
  for (let endIndex = num.length; endIndex > 0; endIndex -= 3) { 
    const startIndex = Math.max(endIndex - 3, 0);
    const numThousandthSubstring = num.substring(startIndex, endIndex);
    priceArray.unshift(numThousandthSubstring);
  }
  return priceArray.join(',')
};

export const convertNumberToPriceFormat = (num) => {
  if (!num) return '';
  const [integer, decimal] = separateDecimal(num);
  let i = integer.length;
  const wholeNumber = convertStringToPriceInThousands(integer);
  const price = `${wholeNumber}.${decimal}`;
  return price;
}

export function convertToDateFormat(date, noTime = false) {
  if (!date) return '';
  const newDate = new Date(date);
  const minute = newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes();
  const hour = newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours();
  const day = newDate.getDate() < 9 ? '0' + (newDate.getDate() + 1): (newDate.getDate() + 1);
  const month = MONTHS_ARRAY[newDate.getMonth()];
  const year = newDate.getFullYear();
  const dateWithoutTime = `${day} ${month}, ${year}`
  if (noTime) return dateWithoutTime;
  const dateAndTime = `${dateWithoutTime} - ${hour}:${minute}`;
  return dateAndTime;
}

export function createPagination(num) {
  let pages = [];
  for (let i = 1; i <= num; i++) {
          pages.push(i);
  }
  return pages;
}

export const TEXT_DISPLAY_TYPES = {
    team: "By Player Team",
    sport: "By Sport",
    price: "By Price",
    rating: "By Player Rating",
    name: "By Player Name"
}

export const FILTER_TEXT_OBJ = {
  team: 'Team',
  sport: 'Sport',
  price: 'Price',
  rating: 'Rating',
  name: 'Name'
};