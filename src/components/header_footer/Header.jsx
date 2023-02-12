import { useState, useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getMenu } from '../../assets/functions/site'
import Profile from './Profile'
import { navList } from '../../assets/data'
import MenuLinks from './MenuLinks'
import Search from './Search'
import '../../styles/header/header.css'


const Header = ({user, setUser, players, teams, sports, links}) => {
    const [menuLinks, setMenuLinks] = useState([])
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation()

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

    useEffect( () => {
      const navLinks = navList.map( list => ({ ...list, sub: getMenu(list.type, players, teams, sports) }) )
      setMenuLinks(navLinks)
    }, [players, teams, sports])

  return (
    <header className="header">
      <div className="top flex-row align-items-center">
        <h2 className="logo"><Link to="/">cardStore</Link></h2>
        <div className="search flex-row">
            <Search />
            {location.pathname !== '/user' && <Profile user={user} setUser={setUser} />}
          </div>
      </div>
      <nav className="bottom">
          <div className="flex-col">
            <div onClick={handleClick} className="menu-icon flex-row align-items-center">
              <span>{showMenu ? <GrClose /> : <AiOutlineMenu />}</span>
            </div>
          </div>
          <MenuLinks menuLinks={menuLinks} closeMenu={closeMenu} />
      </nav>
    </header>
  )
}

export default Header
