import { useState } from 'react'
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { Profile } from '../components'
import '../styles/header/header.css'

const Header = ({user, setUser}) => {
    const navList = ['Home', 'By Player', 'By Rating', 'By Sport', 'By Team', 'Team Sets', 'Site Menu']
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
      const menu = document.getElementById('menu');
      menu.style.maxHeight = showMenu ? null : menu.scrollHeight + 'px'
      setShowMenu(prev => !prev)
    }

  return (
    <header className="header full-w">
      <div className="top flex-row align-items-center">
        <h2 className="logo">cardStore</h2>
        <div className="search flex-row">
            <div className="search-input full-border flex-row align-items-center">
                <input className="full-w" type="text" id="search-card" placeholder="Search" />
                <button className="flex-row align-items-center justify-content-center"><AiOutlineSearch /></button>
            </div>
            <Profile user={user} setUser={setUser} />
          </div>
      </div>
      <nav className="bottom">
          <div className="flex-col">
            <div onClick={handleClick} className="menu-icon flex-row align-items-center">
              <span>{showMenu ? <GrClose /> : <AiOutlineMenu />}</span>
            </div>
          </div>
          <ul id="menu" className="nav-links flex-row align-items-center">
              {
                  navList.map( (navItem, i) => 
                  <li key={i}>
                      <p className="flex-row align-items-center">{navItem}</p>
                  </li> )
              }
          </ul>
      </nav>
    </header>
  )
}

export default Header
