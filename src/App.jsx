import { Routes, Route } from 'react-router-dom'
import { Cart, Home, ViewCard, Login, Register, EditUser } from './pages'
import { Header, Notification, Footer, } from './components'
import AddCard from './pages/AddCard'
import './styles/App.css'
import { useEffect, useState } from 'react'


let firstTime = true

const App = () => {
  const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)
  const [cards, setCards] = useState()

  useEffect( () => {
    
    if(!firstTime) return;
    firstTime = false
    
    fetch("http://localhost:5000/api/player/")
      .then(response => response.text())
      .then(result => { setCards(JSON.parse(result))})
      .catch(error => console.log('error', error));

  }, [] )

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
              <Route path="/cart" element={<Cart />} />
              <Route path="/card/:id/:name?" element={<ViewCard cards={cards} />} />
              <Route path="/add-card" element={<AddCard />} />
              <Route path="/user" element={<EditUser user={user} />} />
            </Routes>
          </section>
          <Footer />
        </>
      }
    </>
  )
}

export default App
