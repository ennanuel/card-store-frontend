import { Link } from "react-router-dom";
import { SportFilter, NameFilter, PriceFilter, RatingFilter, TeamFilter } from "../../components/filters"
import { navList } from '../data'


export const getMenu = (type, cardPlayers, cardTeams, cardSports) => {
  const players = [...cardPlayers]
  const teams = [...cardTeams]
  const sports = [...cardSports]
  let res = [];

  if(players == undefined || teams == undefined || sports == undefined || type == undefined ) return res;

  switch(type) {
    case 'name':
      res.push(
        {
          name: 'Recently Uploaded',
          links: players.map( elem => ({
            link: `/card/${elem._id}/${elem.names.first}+${elem.names.last}`,
            name: `${elem.names.first} ${elem.names.middle} ${elem.names.last}`
          }))
        }
      )

      res.push({
        name: 'Most Popular',
        links: players
          .slice(0, 10)
          .sort( (a, b) => a.price > b.price ? -1 : 1 )
          .map( elem => ({
              link: `/card/${elem._id}/${elem.names.first}+${elem.names.last}`,
              name: `${elem.names.first} ${elem.names.middle} ${elem.names.last}`
            })
          )
      })
      break;
    case 'rating':
      for(let i = 0; i < 100; i+=25) {
        res.push({
          name: `From ${i} - ${i+25}`,
          links: players.filter( elem => elem.rating <= i + 25 && elem.rating > i )
            .slice(0, 10)
            .map( elem => ({
                link: `/card/${elem._id}/${elem.names.first}+${elem.names.last}`,
                name: `${elem.names.first} ${elem.names.middle} ${elem.names.last}`
              })
            )
        })
      }
      break;
    case 'team':
      res.push({
        name: 'Popular Teams',
        links: teams.slice(0, 20).map( elem => ({
            link: `/cards/team/${elem.name.replace(' ', '+')}`,
            name: elem.name
          })
        )
      })
      break;
    case 'sport':
      res.push({
        name: 'Popular Sports',
        links: sports.map( sport => ({
            link: `/cards/sport/${sport}`,
            name: sport
          })
        )
      })
      break;
    case 'price':
      res.push({
        name: 'Cheaper Cards',
        links: players.filter( elem => elem.price <= 40000 )
          .sort( (a, b) => a.price > b.price ? -1 : 1 )
          .slice(0, 10)
          .map( (elem, i) => ({
              link: `/card/${elem._id}/${elem.names.first}+${elem.names.last}`,
              name: `${elem.names.first} ${elem.names.middle} ${elem.names.last}`
            })
          )
      })

      res.push({
        name: 'Mid-Range Cards',
        links: players.filter( elem => elem.price <= 50000 && elem.price > 40000 )
          .sort( (a, b) => a.price > b.price ? -1 : 1 )
          .slice(0, 10)
          .map( (elem, i) => ({
              link: `/card/${elem._id}/${elem.names.first}+${elem.names.last}`,
              name: `${elem.names.first} ${elem.names.middle} ${elem.names.last}`
            })
          )
      })

      res.push({
        name: 'Premium Cards',
        links: players.filter( elem => elem.price > 50000 )
          .sort( (a, b) => a.price > b.price ? -1 : 1 )
          .slice(0, 10)
          .map( (elem, i) => ({
              link: `/card/${elem._id}/${elem.names.first}+${elem.names.last}`,
              name: `${elem.names.first} ${elem.names.middle} ${elem.names.last}`
            })
          )
      })
      break;
  }
  return res;
}
export const getFooterLinks = (type, playerCards, teams) => {
  let res;
  const players = [...playerCards]

  switch(type) {
    case 'links':
      res = {
        title: "Football Cards",
        links: navList.map( elem => ({link: elem.link, name: `Cards ${elem.name}`}))
      }
      break;
    case 'popular':
      res = {
        title: "Popular Players",
        links: players
          .sort( (a, b) => a.rating > b.rating && b.rating >= 95 ? 1 : -1 )
          .slice(0, 8)
          .map( elem => ({
            link: `/card/${elem._id}/${elem.names.first}+${elem.names.last}`, 
            name: `${elem.names.first} ${elem.names.middle} ${elem.names.last}`
          }) )
      }
      break;
    case 'recent':
      res = {
        title: "Recent Uploads",
        links: players
          .slice(0, 8)
          .map( elem => ({
            link: `/card/${elem._id}/${elem.names.first}+${elem.names.last}`, 
            name: `${elem.names.first} ${elem.names.middle} ${elem.names.last}`
          }) )
      }
      break;
    case 'premium':
      res = {
        title: "Premium Cards",
        links: players
          .filter( player => player.price > 40000 )
          .slice(0, 8)
          .map( elem => ({
            link: `/card/${elem._id}/${elem.names.first}+${elem.names.last}`,
            name: `${elem.names.first} ${elem.names.middle} ${elem.names.last}`
          }))
      }
      break;
    case 'teams':
      res = {
        title: "Top Teams",
        links: teams
          .slice(0, 8)
          .map( team => ({
            link: `/cards/team/${team.name.replace(' ', '+')}`,
            name: team.name
          }))
        }
      break;
    default: 
      res = {
        title: "Social Links",
        links: [
          {
            link: null,
            name: "Facebook"
          },
          {
            link: null,
            name: "Twitter"
          },
          {
            link: null,
            name: "Instagram"
          }
        ]
      }
  }
  return res;
}


export const getPathInfo = (setState, location) => {
    const siteTitle = document.getElementById('title')

    const currLoc = location.pathname.split('/').map( path => path.substring(0, 1).toUpperCase() + path.substring(1, ) )

    const newLoc = currLoc
      .filter( elem => /^[a-z][a-z|\W]+[a-z]$/i.test(elem) )
      .map( elem => elem.includes('+') ? elem.replace('+', ' ') : elem )
      .join(" | ")
      .replace("-", " ")

    setState("Home | " + newLoc)
    
    siteTitle.innerHTML = location.pathname !== '/' ? newLoc : "Card Store"
}



export const getPrice = (val) => {
  const [num, decimal] = val.toString().split('.')
  let price = []
  let i = num.length

  while(i > 0) {
    price.unshift(num.substring(i - 3 > 0 ? i - 3: 0, i))
    i -= 3
  }

  return decimal ? price.join(',') + '.' + decimal : price.join(',')
}



export const showFilter = (type, op, val, navigate, location) => {
  switch (type) {
    case 'team':
      return <TeamFilter navigate={navigate} val={val} />;
    case 'sport':
      return <SportFilter navigate={navigate} val={val} />;
    case 'price':
      return <PriceFilter navigate={navigate} val={val} location={location} />;
    case 'rating':
      return <RatingFilter navigate={navigate} val={val} location={location} />;
    case 'name':
      return <NameFilter op={op} navigate={navigate} location={location} />;
    default: 
      return null;
  }
}

export const getText = (type) => {
  switch (type) {
    case 'team':
      return "By Player Team";
    case 'sport':
      return "By Sport";
    case 'price':
      return "By Price";
    case 'rating':
      return "By Player Rating";
    case 'name':
      return "By Player Name";
    default: 
      return "Recent Releases"
  }
}

export const getFilterText = (type) => {
  switch (type) {
    case 'team':
      return "Team";
    case 'sport':
      return "Sport";
    case 'price':
      return "Price";
    case 'rating':
      return "Rating";
    case 'name':
      return "Name";
    default: 
      return null;
  }
}