import { Link, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

const MenuLinks = ({ menuLinks, closeMenu }) => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <ul id="menu" className="nav-links flex-row align-items-center">
            {
                menuLinks.map( (menuLink, i) => {
                return (
                    <li className="relative menu_link flex-row" key={i}>
                        {
                            menuLink.link == '/' ?
                            <Link to={menuLink.link} onClick={closeMenu}>{menuLink.name}</Link> :
                            <p className="full-w align-items-center">{menuLink.name}</p>
                        }
                    {
                        menuLink.sub.length > 0 && 
                        <div className={`sub_menu absolute ${(i >= menuLinks.length - 2 && window.innerWidth <= 1000) && 'right_sub_menu'}`}>
                            <button onClick={() => { navigate(menuLink.link); closeMenu(); }}>Show Cards {menuLink.name}</button>
                            <ul className="sub_menu_links">
                                {
                                    menuLink.sub.map( (elem, i) => 
                                        elem.links.length > 0 &&
                                        <li key={i}>
                                            <h6 className="links_name">{elem.name}</h6>
                                            <ul className="flex-col nav_links">
                                                {
                                                    elem.links.map( (item, i) => <li className="a_link" key={i} onClick={closeMenu}>
                                                        <Link to={item.link}>{item.name}</Link>
                                                    </li> )
                                                }
                                            </ul>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        
                    }
                    </li>
                )
                })
            }
            {
                location.pathname !== '/add-card' && 
                <li className="add_card_btn flex-row full-h" onClick={closeMenu}><Link to="/add-card">Add Card</Link></li>
            }
        </ul>
    )
}

export default MenuLinks
