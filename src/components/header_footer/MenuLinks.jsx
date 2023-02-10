import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const MenuLinks = ({ menuLinks, closeMenu }) => {
    const location = useLocation();

    return (
        <ul id="menu" className="nav-links flex-row align-items-center">
            {
                menuLinks.map( (menuLink, i) => {
                return (
                    <li className="relative menu_link flex-row" onClick={closeMenu} key={i}>
                    <Link to={menuLink.link} className="full-w align-items-center">{menuLink.name}</Link>
                    {
                        menuLink.sub.length > 0 && 
                        <ul className={`sub_menu absolute ${i >= menuLinks.length - 2 && window.innerWidth <= 1000 && 'right_sub_menu'}`}>
                            {
                                menuLink.sub.map( (elem, i) => 
                                    elem.links.length > 0 &&
                                    <li key={i}>
                                        <h6 className="links_name">{elem.name}</h6>
                                        <ul className="flex-col nav_links">
                                            {
                                                elem.links.map( (link, i) => <li className="a_link" key={i}>{link}</li> )
                                            }
                                        </ul>
                                    </li>
                                )
                            }
                        </ul>
                    }
                    </li>
                )
                })
            }
            {
                location.pathname !== '/add-card' && <li className="add_card_btn flex-row full-h"><Link to="/add-card">Add Card</Link></li>
            }
        </ul>
    )
}

export default MenuLinks
