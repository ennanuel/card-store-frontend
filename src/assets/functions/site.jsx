import { SportFilter, NameFilter, PriceFilter, RatingFilter, TeamFilter } from "../../components/filters"

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



export const showFilter = (type, op, navigate, location) => {
  switch (type) {
    case 'team':
      return <TeamFilter navigate={navigate} />;
    case 'sport':
      return <SportFilter op={op} navigate={navigate} location={location} />;
    case 'price':
      return <PriceFilter op={op} navigate={navigate} location={location} />;
    case 'rating':
      return <RatingFilter op={op} navigate={navigate} location={location} />;
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