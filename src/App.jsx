import { Routes, Route, useLocation, redirect } from 'react-router-dom'
import { Cart, Home, ViewCard, Login, Register, EditUser } from './pages'
import { Header, Notification, Footer, } from './components'
import AddCard from './pages/AddCard'
import './styles/App.css'
import { useEffect, useState } from 'react'


const App = () => {
  const location = useLocation();
  const [path, setPath] = useState('');
  const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)

  useEffect( () => {
    setPath(location.pathname)
  }, [location] )

  return (
    <div className="App">
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
              <Route path="/*" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/card" element={<ViewCard />} />
              <Route path="/add-card" element={<AddCard />} />
              <Route path="/user" element={<EditUser user={user} />} />
            </Routes>
          </section>
          <Footer />
        </>
      }
    </div>
  )
}

export default App
