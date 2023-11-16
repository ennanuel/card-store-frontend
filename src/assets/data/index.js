const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', import.meta.env.VITE_API_URL);

export const fetchOptions = {
    method: 'GET',
    redirect: "follow",
    credentials: "include",
    headers
};

export const footerNavigate = [
    'shortcut',
    'popular',
    'recent',
    'premium',
    'team',
    'social'
]

export const NAV_LIST = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'By Player',
        menuType: 'name',
        link: '/cards/first/all'
    },
    {
        name: 'By Rating',
        menuType: 'rating',
        link: '/cards/rating/all'
    },
    {
        name: 'By Team',
        menuType: 'team',
        link: '/cards/team/All'
    },
    {
        name: 'By Sport',
        menuType: 'sport',
        link: '/cards/sport/All'
    },
    {
        name: 'By Price',
        menuType: 'price',
        link: '/cards/price/all'
    }
]

export const socialsList = [
    { name: 'Facebook', link: null },
    { name: 'Instagram', link: null },
    { name: 'Twitter', link: null },
    { name: 'LinkedIn', link: null }
]

export const SEARCH_FILTERS = [
    {
        name: 'player',
        type: 'name'
    },
    {
        name: 'team',
        type: 'team'
    },
    {
        name: 'sport',
        type: 'sport'
    },
]