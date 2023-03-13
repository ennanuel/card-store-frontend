export const apiURL = 'https://cardstore-api.onrender.com/api'

export const imageURL = 'https://cardstore-api.onrender.com/images/'

// export const apiURL = 'http://localhost:5000/api'

// export const imageURL = 'http://localhost:5000/images/'

export const footerNavigate = [
    'links',
    'popular',
    'recent',
    'premium',
    'teams',
    'socials'
]

export const navList = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'By Player',
        type: 'name',
        link: '/cards/name'
    },
    {
        name: 'By Rating',
        type: 'rating',
        link: '/cards/rating'
    },
    {
        name: 'By Team',
        type: 'team',
        link: '/cards/team'
    },
    {
        name: 'By Sport',
        type: 'sport',
        link: '/cards/sport'
    },
    {
        name: 'By Price',
        type: 'price',
        link: '/cards/price'
    }
]


export const searchFilters = [
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