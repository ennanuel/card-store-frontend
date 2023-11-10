import React from 'react'
import FooterSubLink from './FooterSubLink';

const FooterLink = ({ title, links }) => {
    return (
        <li className="footer_nav">
            <h3>{title}</h3>
            <ul className="footer_links flex-row">
                {
                    links.map((item, i) => <FooterSubLink key={i} {...item} />)
                }
            </ul>
        </li>
    )
};

export default FooterLink
