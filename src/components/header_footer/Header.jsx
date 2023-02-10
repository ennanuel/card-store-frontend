import { useState } from 'react'
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Profile } from '..'
import { navList } from '../../assets/data'
import '../../styles/header/header.css'

const Header = ({user, setUser}) => {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()

    const handleClick = () => {
      const menu = document.getElementById('menu');
      menu.style.maxHeight = showMenu ? null : menu.scrollHeight + 'px'
      setShowMenu(prev => !prev)
    }

    const closeMenu = () => {
      const menu = document.getElementById('menu');
      menu.style.maxHeight = null
      setShowMenu(false)
    }

  return (
    <header className="header full-w">
      <div className="top flex-row align-items-center">
        <h2 className="logo"><Link to="/">cardStore</Link></h2>
        <div className="search flex-row">
            <div className="search-input full-border flex-row align-items-center">
                <input className="full-w" type="text" id="search-card" placeholder="Search" />
                <button className="flex-row align-items-center justify-content-center" onClick={() => navigate('/search')}><AiOutlineSearch /></button>
            </div>
            {location.pathname !== '/user' && <Profile user={user} setUser={setUser} />}
          </div>
      </div>
      <nav className="bottom">
          <div className="flex-col">
            <div onClick={handleClick} className="menu-icon flex-row align-items-center">
              <span>{showMenu ? <GrClose /> : <AiOutlineMenu />}</span>
            </div>
          </div>
            <ul id="menu" className="nav-links flex-row align-items-center full-w">
                {
                    navList.map( (navItem, i) => 
                    <li onClick={closeMenu} key={i}>
                        <Link to={navItem.link} className="flex-row align-items-center">{navItem.name}</Link>
                    </li> )
                }
                {
                  location.pathname !== '/add-card' && <li className="add_card_btn flex-row full-h"><Link to="/add-card">Add Card</Link></li>
                }
            </ul>
      </nav>
    </header>
  )
}

export default Header