import { imageURL } from "../data"

import { apiURL } from "../data"

export const fetchCard = (id, premium, setPlayer, setImgURL, setPrice, getPrice, setError) => {
    setError(false)
    setPlayer(null)
    setPrice(null)
    setImgURL(false)

    fetch(`${apiURL}/player/find/${id}`)
      .then(res => {
        if(res.status !== 200) {
          throw 'Could not fetch card details.'
        } else {
          return res.text()
        }
      })
      .then(data => {
        const result = JSON.parse(data)
        setPlayer(result)
        setImgURL(imageURL + result.image)
        setPrice(getPrice(premium ? result.premPrice : result.price))
      })
      .catch(err => {
        setError(true)
        console.error('error: ', err)
      })
}



export const fetchCards = (setState, setError, setEmpty, type, val, op) => {
  setState([])
  setEmpty(false)
  setError(false)

  fetch(`${apiURL}/player/?type=${type}&val=${val}${op ? `&op=${op}` : ''}`)
    .then(res => {
      if(res.status !== 200) {
          throw "Could not Fetch!";
        }
      return res.text()
    })
    .then(data => {
      const result = JSON.parse(data)
      setEmpty(result.length < 1)
      setError(false)
      setState(result)
    })
    .catch(err => {
      console.error('error', err)
      setError(true)
    })
}



export const fetchSports = (setSports) => {
  fetch(`${apiURL}/sport`)
  .then( res => {
    if(res.status !== 200) {
        throw "Could not Fetch!";
      }
    return res.text()
  })
  .then( dat => {
    const result = JSON.parse(dat)
    const value = result.map( elem => elem.sport )
    
    setSports(value)
  })
  .catch( err => console.error(err) )
}



export const fetchTeams = (setTeams) => {
  fetch(`${apiURL}/team`)
  .then( res => {
    if(res.status !== 200) {
        throw "Could not Fetch!";
      }
    return res.text()
  })
  .then( dat => {
    const result = JSON.parse(dat)
    const value = result.map( elem => ({ name: elem.team, sport: elem.sport }))

    setTeams(value)
  })
  .catch( err => console.error(err) )
}



export const fetchPlayers = (setPlayers) => {
  fetch(`${apiURL}/player/`)
  .then( res => {
    if(res.status !== 200) {
        throw "Could not Fetch!";
      }
    return res.text()
  })
  .then( dat => {
    const result = JSON.parse(dat)
    
    setPlayers(result)
  })
  .catch( err => console.error(err) )
}


export const addCard = async (data, navigate, setError, setLoading) => {
    setError(false)
    setLoading(true)

    const user = localStorage.getItem('user');
    const myHeaders = new Headers();

    myHeaders.append("token", user.accessToken);
    
    const formData = new FormData();

    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value)
    }
    
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formData,
      redirect: 'follow'
    };
    
    fetch(`${apiURL}/player/create`, requestOptions)
      .then(response => {
        if(response.status !== 200) {
            throw "Could not Create Card!";
          }
        return response.text()
      })
      .then(result => {
        setLoading(false)
        navigate('/')
      })
      .catch(error => {
        setLoading(false)
        setError(true)
        console.error('error: ', error)
      });
}


export const searchCard = (val, setCards, setLoading, setError, setEmpty) => {
  setCards({player: [], team: [], sport: []})
  setError(false)
  setEmpty(false)

  fetch(`${apiURL}/search?val=${val}`)
      .then(response => {
        if(response.status !== 200) {
            throw "Search failed!";
          }
        return response.text()
      })
      .then(result => {
        const data = JSON.parse(result)

        setCards(data)
        setLoading(false)
        setEmpty(data.lenght > 0)
      })
      .catch(error => {
        setLoading(false)
        setError(true)
        console.error('error: ', error)
      });
}