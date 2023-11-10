import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';


const FooterSubLink = ({ link, name, socialLink = false }) => {
    return (
        <li className="flex-row ai-center"><MdOutlineKeyboardArrowRight />
            <span className="link">
                {
                    socialLink ?
                        <a href={link} target="_blank">{name}</a> :
                        <Link to={link}>{name}</Link>
                }
            </span>
        </li>
    )
};

export default FooterSubLink
