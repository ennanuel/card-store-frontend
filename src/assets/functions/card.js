export const fetchCard = (id, setPlayer, setImgURL, setPrice, getPrice, setError) => {
    setError(false)

    fetch(`http://localhost:5000/api/player/find/${id}`)
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

  fetch(`http://localhost:5000/api/player/?type=${type}&val=${val}${op ? `&op=${op}` : ''}`)
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
  fetch('http://localhost:5000/api/sport')
  .then( res => {
    if(res.status !== 200) {
        throw "Could not Fetch!";
      }
    return res.text()
  })
  .then( dat => {
    const result = JSON.parse(dat)
    setSports(result.map(elem => elem.sport ))
  })
  .then( err => console.error(err) )
}



export const fetchTeams = (setTeams) => {
  fetch('http://localhost:5000/api/team')
  .then( res => {
    if(res.status !== 200) {
        throw "Could not Fetch!";
      }
    return res.text()
  })
  .then( dat => {
    const result = JSON.parse(dat)
    setTeams(result.map(elem => ({ name: elem.team, sport: elem.sport }) ))
  })
  .then( err => console.error(err) )
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
    
    fetch("http://localhost:5000/api/player/create", requestOptions)
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