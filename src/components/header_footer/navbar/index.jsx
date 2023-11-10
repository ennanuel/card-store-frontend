import { useState, useRef, useEffect, useMemo } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrCart, GrClose } from 'react-icons/gr';
import { Link, useLocation } from 'react-router-dom';
import { convertNavListToMenu } from '../../../utils/site';
import Profile from '../Profile';
import MenuLinks from './MenuLinks';
import Search from '../Search';
import { useSelector } from 'react-redux'
import '../../../styles/header.scss';
import CartBtn from './CartBtn';


const NavBar = () => {
  const { categories, cart: { quantity }, user: { isAdmin } } = useSelector(state => state);
  const menuLinks = useMemo(() => convertNavListToMenu(categories), [categories]);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const { pathname } = useLocation();

  function displayMenu() {
    if (menuRef?.current) return;
    menuRef.current.style.maxHeight = `${menuRef.current.scrollHeight}px`;
    setShowMenu(true);
  };

  function closeMenu() {
    if (menuRef?.current) return;
    menuRef.current.style.maxHeight = null;
    setShowMenu(false);
  };

  return (
    <header className="header">
      <div className="top full-w flex-row ai-center">
        <h2 className="logo"><Link to="/">cardStore</Link></h2>
        <div className="search flex-row">
          <Search />
          <CartBtn pathname={pathname} quantity={quantity} />
          {pathname !== '/user' && <Profile />}
        </div>
      </div>
      <nav className="bottom">
        <div className="flex-col">
          <div onClick={showMenu ? closeMenu : displayMenu} className="menu-icon flex-row ai-center">
            <span>{showMenu ? <GrClose /> : <AiOutlineMenu />}</span>
          </div>
        </div>
        <MenuLinks
          menuLinks={menuLinks}
          menuRef={menuRef}
          closeMenu={closeMenu}
          isAdmin={isAdmin}
        />
      </nav>
    </header>
  )
};

export default NavBar;
