import { Routes, Route, useLocation } from 'react-router-dom'
import { Cart, Home, ViewCard, Login, Register, EditUser, Cards, Search } from './pages'
import { Header, Notification, Footer, } from './components'
import AddCard from './pages/AddCard'
import './styles/App.css'
import { useEffect, useState, useRef } from 'react'
import { fetchCards, fetchPlayers, fetchSports, fetchTeams } from './assets/functions/card'
import { getPathInfo } from './assets/functions/site'

const App = () => {
  const [user, setUser] = useState(localStorage.getItem('user') !== "undefined" && localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)
  const [players, setPlayers] = useState([])
  const [teams, setTeams] = useState([])
  const [sports, setSports] = useState([])
  const [page, setPage] = useState('')
  const [cards, setCards] = useState([])
  const [error, setError] = useState(false)
  const [empty, setEmpty] = useState(false)
  
  const divRef = useRef()

  const location = useLocation()

  useEffect( () => {
    getPathInfo(setPage, location)
    fetchPlayers(setPlayers)
    fetchTeams(setTeams);
    fetchSports(setSports);
    
    divRef.current.scrollIntoView({ behavior: "smooth"})

    fetchCards(setCards, setError, setEmpty)
  }, [location] )

  return (
    <div id="App" ref={divRef}>
      {
        !user ? 
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Login setUser={setUser} />} />
        </Routes>
        :
        <>
          <Header user={user} setUser={setUser} players={players} teams={teams} sports={sports} cards={cards} error={error} empty={empty}  />
          <Notification />
          <section className="content">
            <Routes>        
              <Route path="/*" element={<Home players={players} teams={teams} sports={sports} cards={cards} error={error} empty={empty} />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Card/:id/:name?" element={<ViewCard cards={cards} page={page} />} />
              <Route path="/Add-Card" element={<AddCard />} />
              <Route path="/User" element={<EditUser user={user} />} />
              <Route path="/Cards/:type?/:val?/:op?" element={<Cards page={page} />} />
              <Route path="/Search/:val?" element={<Search />} />
            </Routes>
          </section>
          <Footer />
        </>
      }
    </div>
  )
}

export default App
