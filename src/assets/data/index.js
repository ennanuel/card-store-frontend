export const apiURL = 'https://cardstore-api.onrender.com/api'

export const imageURL = 'https://cardstore-api.onrender.com/images/'

// export const apiURL = 'http://localhost:5000/api'

// export const imageURL = 'http://localhost:5000/images/'

export const footerNavigate = [
    {
        title: "Football Cards",
        links: [
            "Cards by Player",
            "Cards by Rating",
            "Cards by Team",
            "Other Sports",
        ]
    },
    {
        title: "Popular Players",
        links: [
            "Dan Marino",
            "Joe Montana",
            "Peyton Manning",
            "Brett Favre",
            "Emmitt Smith",
            "Tom Brady",
            "Barry Sanders",
        ]
    },
    {
        title: "Recent Additions",
        links: [
            "2022 Absolute",
            "2022 Black & White Rookies",
            "2022 Select Draft Picks",
            "2022 Wild Card Matte",
            "2022 Sage Artistry",
            "2022 Panini Supernova",
            "2022 Score",
        ]
    },
    {
        title: "Social Links",
        links: [
            "Facebook",
            "Twitter",
            "Instagram",
        ]
    },
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