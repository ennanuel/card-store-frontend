import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import SubMenu from './SubMenu';

const MenuLink = ({ link, name, subMenus, closeMenu, secondToLastIndex, navigateAndClose, i }) => {
    const positionToRight = useMemo(() => i >= secondToLastIndex && window.innerWidth < 1000, []);

    return (
        <li className="relative menu_link flex-row">
            {
                link != '/' ?
                    <p className="full-w ai-center">{name}</p> :
                    <Link to={link} onClick={closeMenu}>{name}</Link>
            }
            <SubMenu
                subMenus={subMenus}
                name={name}
                closeMenu={closeMenu}
                navigateAndClose={navigateAndClose}
                positionToRight={positionToRight}
            />
        </li>
    )
}

export default MenuLink
