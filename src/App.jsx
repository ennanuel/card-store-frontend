import { Routes, Route, useLocation } from 'react-router-dom'
import { Cart, Home, ViewCard, Login, Register, EditUser } from './pages'
import { Header, Notification, Footer, } from './components'
import AddCard from './pages/AddCard'
import './styles/App.css'
import { useEffect, useState } from 'react'


let firstTime = true

const App = () => {
  const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)
  const [page, setPage] = useState('')
  const [cards, setCards] = useState([])

  const location = useLocation()

  useEffect( () => {
    const siteTitle = document.getElementById('title')

    const currLoc = location.pathname.split('/');

    const newLoc = currLoc
      .filter( elem => /^[a-z][a-z|\W]+[a-z]$/i.test(elem) )
      .map( elem => elem.includes('+') ? elem.replace('+', ' ') : elem )
      .join(" | ")
      .replace("-", " ")

    setPage("Home | " + newLoc)
    
    siteTitle.innerHTML = location.pathname !== '/' ? "Home | " + newLoc : "Card Store"
    
    if(!firstTime) return;
    firstTime = false
    
    fetch("http://localhost:5000/api/player/")
      .then(response => {
        if(response.status !== 200) {
          const err = "Something went wrong"
          throw err;
        }
        return response.text()
      })
      .then(result => { setCards(JSON.parse(result)) })
      .catch(error => console.log('error', error))

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
              <Route path="/*" element={<Home cards={cards} />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Card/:id/:name?" element={<ViewCard cards={cards} page={page} />} />
              <Route path="/Add-Card" element={<AddCard />} />
              <Route path="/User" element={<EditUser user={user} />} />
            </Routes>
          </section>
          <Footer />
        </>
      }
    </>
  )
}

export default App
