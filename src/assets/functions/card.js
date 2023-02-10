import { apiURL } from "../data"

export const fetchCard = (id, setPlayer, setImgURL, setPrice, getPrice, setError) => {
    setError(false)

    fetch(`${apiURL}/player/find/${id}`)
      .then(res => res.text())
      .then(data => {
        const result = JSON.parse(data)
        setPlayer(result)
        setImgURL('http://localhost:5000/images/' + result.image)
        setPrice(getPrice(result.price))
      })
      .catch(err => {
        setError(true)
        console.error('error: ', err)
      })
}



export const fetchCards = (setState, setError, setEmpty, type, val, op) => {
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



export const fetchSports = (setSports = false) => {
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
    
    if(setSports) {
      setSports(value)
    } else {
      return value
    }
  })
  .then( err => setSports ? console.error(err) : [] )
}



export const fetchTeams = (setTeams = false) => {
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

    if(setTeams) {
      setTeams(value)
    } else {
      return value
    }
  })
  .then( err => setTeams ? console.error(err) : [] )
}



export const fetchPlayers = () => {
  fetch(`${apiURL}/player/`)
  .then( res => {
    if(res.status !== 200) {
        throw "Could not Fetch!";
      }
    return res.text()
  })
  .then( dat => {
    const result = JSON.parse(dat)
    return result;
    return result.map(elem => ({ names: elem.names, id: elem._id }) )
  })
  .then( err => [] )
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
      .then(response => response.text())
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