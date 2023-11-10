import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import MenuLink from "./MenuLink";

const MenuLinks = ({ menuLinks, closeMenu, menuRef, isAdmin }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const hideCard = useMemo(() => /(add-card|orders)/.test(pathname), [pathname])
    
    function navigateAndClose(link) {
        navigate(link);
        closeMenu();
    }

    return (
        <ul id="menu" ref={menuRef} className="nav-links flex-row ai-center">
            {
                menuLinks.map((menuLink, i) => (
                    <MenuLink
                        {...menuLink}
                        key={i} i={i}
                        closeMenu={closeMenu}
                        navigateAndClose={() => navigateAndClose(menuLink.link)}
                        secondToLastIndex={menuLinks.length - 2}
                    />
                ))
            }
            {
                !hideCard && (
                isAdmin ?
                        <li className="add_card_btn flex-row full-h" onClick={closeMenu}>
                            <Link to="/add-card">Add Card</Link>
                        </li> :
                        <li className="add_card_btn flex-row full-h" onClick={closeMenu}>
                            <Link to="/orders/all/0">My Orders</Link>
                        </li>
                )
            }
        </ul>
    )
}

export default MenuLinks
