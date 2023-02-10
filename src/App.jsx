import { Routes, Route, useLocation } from 'react-router-dom'
import { Cart, Home, ViewCard, Login, Register, EditUser, Cards, Search } from './pages'
import { Header, Notification, Footer, } from './components'
import AddCard from './pages/AddCard'
import './styles/App.css'
import { useEffect, useState } from 'react'
import { fetchCards } from './assets/functions/card'
import { getPathInfo } from './assets/functions/site'

const App = () => {
  const [user, setUser] = useState(localStorage.getItem('user') !== "undefined" && localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)
  const [page, setPage] = useState('')
  const [cards, setCards] = useState([])
  const [error, setError] = useState(false)
  const [empty, setEmpty] = useState(false)

  const location = useLocation()

  useEffect( () => {
    getPathInfo(setPage, location)

    fetchCards(setCards, setError, setEmpty)
  }, [location] )

  return (
    <>
      {
        !user ? 
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Login setUser={setUser} />} />
        </Routes>
        :
        <>
          <Notification />
          <Header user={user} setUser={setUser} />
          <section className="content full-w">
            <Routes>        
              <Route path="/*" element={<Home cards={cards} error={error} empty={empty} />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Card/:id/:name?" element={<ViewCard cards={cards} page={page} />} />
              <Route path="/Add-Card" element={<AddCard />} />
              <Route path="/User" element={<EditUser user={user} />} />
              <Route path="/Cards/:type/:val?/:op?" element={<Cards page={page} />} />
              <Route path="/Search/:val?" element={<Search />} />
            </Routes>
          </section>
          <Footer />
        </>
      }
    </>
  )
}

export default App
