import { Link } from "react-router-dom";
import { SportFilter, NameFilter, PriceFilter, RatingFilter, TeamFilter } from "../../components/filters"


export const getMenu = (type, players, teams, sports) => {
  let res = [];

  if(players == undefined || teams == undefined || sports == undefined || type == undefined ) return res;

  switch(type) {
    case 'name':
      res.push({
        name: 'Recently Uploaded',
        links: players.map( elem => <Link to={`/card/${elem._id}`}>{elem.names.first} {elem.names.middle} {elem.names.last}</Link> ).slice(0, 5)
      })

      res.push({
        name: 'Most Popular',
        links: players
          .slice(0, 10)
          .sort( (a, b) => a.price > b.price ? -1 : 1 )
          .map( elem => <Link to={`/card/${elem._id}`}>{elem.names.first} {elem.names.middle} {elem.names.last}</Link> )
      })
      break;
    case 'rating':
      for(let i = 0; i < 100; i+=25) {
        res.push({
          name: `From ${i} - ${i+25}`,
          links: players.filter( elem => elem.rating <= i + 25 && elem.rating > i )
            .slice(0, 10)
            .map( elem => <Link to={`/card/${elem._id}`}>{elem.names.first} {elem.names.middle} {elem.names.last}</Link> )
        })
      }
      break;
    case 'team':
      res.push({
        name: 'Popular Teams',
        links: teams.slice(0, 20).map( elem => <Link to={`/cards/team/${elem.name.replace(' ', '+')}`}>{elem.name}</Link>)
      })
      break;
    case 'sport':
      res.push({
        name: 'Popular Sports',
        links: sports.map( sport => <Link to={`/cards/sport/${sport}`}>{sport}</Link> )
      })
      break;
    case 'price':
      res.push({
        name: 'Cheaper Cards',
        links: players.filter( elem => elem.price <= 5000 )
          .sort( (a, b) => a.price > b.price ? -1 : 1 )
          .slice(0, 10)
          .map( (elem, i) => <Link key={i} to={`/card/${elem._id}`}>{elem.names.first} {elem.names.middle} {elem.names.last}</Link> )
      })

      res.push({
        name: 'Mid-Range Cards',
        links: players.filter( elem => elem.price <= 10000 && elem.price > 5000 )
          .sort( (a, b) => a.price > b.price ? -1 : 1 )
          .slice(0, 10)
          .map( (elem, i) => <Link key={i} to={`/card/${elem._id}`}>{elem.names.first} {elem.names.middle} {elem.names.last}</Link> )
      })

      res.push({
        name: 'Premium Cards',
        links: players.filter( elem => elem.price > 10000 )
          .sort( (a, b) => a.price > b.price ? -1 : 1 )
          .slice(0, 10)
          .map( (elem, i) => <Link key={i} to={`/card/${elem._id}`}>{elem.names.first} {elem.names.middle} {elem.names.last}</Link> )
      })
      break;
  }
  return res;
}


export const getPathInfo = (setState, location) => {
    const siteTitle = document.getElementById('title')

    const currLoc = location.pathname.split('/')

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
    default:
      return <NameFilter op={op} navigate={navigate} location={location} />;
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
    default:
      return "By Player Name";
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
    default:
      return "Name";
  }
}