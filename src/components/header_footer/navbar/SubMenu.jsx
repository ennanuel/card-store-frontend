import { Link } from 'react-router-dom';

const SubMenu = ({ subMenus, closeMenu, name, navigateAndClose, positionToRight }) => {
    if (subMenus.length <= 0) return;
    return (
        <div className={`sub_menu absolute ${positionToRight && 'right_sub_menu'}`}>
            <button onClick={navigateAndClose}>Show Cards {name}</button>
            <ul className="sub_menu_links">
                {
                    subMenus.map(({ title, links }, i) =>
                        links.length > 0 &&
                        <li key={i}>
                            <h6 className="links_name">{title}</h6>
                            <ul className="flex-col nav_links">
                                {
                                    links.map((item, i) => <li className="a_link" key={i} onClick={closeMenu}>
                                        <Link to={item.link}>{item.name}</Link>
                                    </li>)
                                }
                            </ul>
                        </li>
                    )
                }
            </ul>
        </div>
    )
};

export default SubMenu
