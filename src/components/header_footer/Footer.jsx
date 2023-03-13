import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { footerNavigate } from '../../assets/data'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import '../../styles/footer/footer.css'
import { getFooterLinks } from '../../assets/functions/site'

const Footer = ({ players, teams }) => {
    const [footerLinks, setFooterLinks] = useState([])

    useEffect( () => {
        setFooterLinks( footerNavigate.map( (elem, i) => getFooterLinks(elem, players, teams) ))
        console.log(footerNavigate.map( (elem, i) => getFooterLinks(elem, players, teams) ))
    }, [players])
  return (
    <footer className="footer">
        <div className="navigate flex-row">
            {
                footerLinks.map(
                    (navItem, i) => (
                        <ul key={i}>
                            <h3>{navItem.title}</h3>
                            {
                                navItem.links.map(
                                    (item, i) => (
                                        <li key={i} className="flex-row align-items-center"><MdOutlineKeyboardArrowRight />
                                            <span className="link">
                                                {
                                                    item.link !== null ?
                                                    <Link to={item.link}>{item.name}</Link> :
                                                    item.name
                                                }
                                            </span>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    )
                )
            }
        </div>
        <div className="copyright">
            <p>2001-2023 cardStore, Inc.</p>
            <p>
                <a href="http://card-store.netlify.app" style={{color: 'var(--notification-bg)', textDecoration: 'none'}} className="link">cardStore</a> features a wide selection of sports trading cards,
            </p>
            <p>including rookie cards, team sets and graded cards.</p>
        </div>
    </footer>
  )
}

export default Footer
